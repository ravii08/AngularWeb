import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as d3 from 'd3';
import { colorLegend } from './colorlegend';
import { G } from '@angular/cdk/keycodes';
import * as t from 'topojson';
import { AuthenticationService } from '../shared/services/authentication.service';
import { StateService } from '../shared/services/state.service';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  private svg: any;
  pathGenerator: any;
  data: any;
  objects: any;
  countryObject: any;
  featureObj: any;
  stringFeature: string | undefined;
  rowObject: any;
  width: number | undefined;
  height: number | undefined;


  constructor() {

  }
  public ngOnInit(): void {
    this.buildSvg();
  }
  private buildSvg() {

    this.width = window.innerWidth * .85;
    this.height = window.innerHeight * .85
    let projection = d3.geoNaturalEarth1().scale(140)
      .translate([this.width / 2, this.height / 2]);
    this.pathGenerator = d3.geoPath()
      .projection(projection);


    this.svg = d3.select('#dashboard')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    this.svg.append('path')
      .attr('class', 'sphere')
      .attr('d', this.pathGenerator({ type: 'Sphere' }));

    const colorLegendG = this.svg.append('g')
      .attr('transform', `translate(260,350)`);

    forkJoin([
      d3.tsv('https://unpkg.com/world-atlas@1.1.4/world/50m.tsv'),
      d3.json('https://unpkg.com/world-atlas@1.1.4/world/50m.json')
    ]).subscribe(([tsvData, topoJsondata]) => {

      var idJson = JSON.stringify(tsvData);
      this.rowObject = JSON.parse(idJson);



      const rowById = this.rowObject.reduce((accumulator: { [x: string]: any; }, d: { iso_n3: string | number; }) => {
        accumulator[d.iso_n3] = d;
        return accumulator;
      }, {});



      var stringJson = JSON.stringify(topoJsondata);
      this.countryObject = JSON.parse(stringJson);
      var countries = t.feature(this.countryObject, this.countryObject.objects.countries);
      this.stringFeature = JSON.stringify(countries);
      this.featureObj = JSON.parse(this.stringFeature);
      this.featureObj.features.forEach((d: { properties: any; id: string | number; }) => {
        Object.assign(d.properties, rowById[d.id]);
      });
      const colorScale = d3.scaleOrdinal();

      const colorValue = (d: { properties: { economy: any; }; }) => d.properties.economy;

      colorScale.domain(this.featureObj.features.map(colorValue))
        .domain(colorScale.domain().sort().reverse())
        .range(d3.schemeSpectral[colorScale.domain().length]);
      colorLegendG.call(colorLegend, {
        colorScale,
        circleRadius: 6,
        spacing: 15,
        textOffset: 12,
        backgroundRectWidth: 225
      });
      this.svg.selectAll('path').data(this.featureObj.features)
        .enter().append('path')
        .attr('class', 'country')
        .attr('d', (d: any) => this.pathGenerator(d))
        .attr('fill', (d: { properties: { economy: any; }; }) => colorScale(colorValue(d)))
        .on('mouseover', this.handleMouseOver)
        .on('mouseout', this.handleMouseOut)

        .append('title')
        .text((d: { properties: any; }) => d.properties.name + ": " + colorValue(d));


    })


  }
  handleMouseOver(this: any) {

    d3.select(this).style('transform', 'scale(1.02,1.02)')
    
  }
  handleMouseOut(this: any) {

    d3.select(this).style('transform', 'scale(1,1)')
      .style('transform-origin', '100% 100%');
  }

  
}

