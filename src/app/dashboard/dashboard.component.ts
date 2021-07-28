import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as d3 from 'd3';
import { colorLegend } from './colorlegend';
import { loadandprocessdata } from './loadandprocessdata';
import { G } from '@angular/cdk/keycodes';
import * as t from 'topojson';
import { AuthenticationService } from '../shared/services/authentication.service';
import { StateService } from '../shared/services/state.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  

//   constructor(private Service: AuthenticationService, public stateVariable: StateService) { }
//  public ngOnInit() {
//  }
  

private width: number;
  private height: number;
  private svg: any;
  pathGenerator: any;
  data: any;
  objects: any;
  stringObject: any;
  featureObj: any;
  stringFeature: string | undefined;
  idobj: any;


  constructor() {
    this.width = 1000
    this.height = 650
  }
  public ngOnInit() {
    this.buildSvg();
  }
  private buildSvg() {
    let projection = d3.geoMercator().scale(140)
      .translate([this.width / 2, this.height / 2]);
    this.pathGenerator = d3.geoPath()
      .projection(projection);


    this.svg = d3.select('#dashboard')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);

    const colorLegendG = this.svg.append('g')
      .attr('transform', `translate(30,400)`);
    
    
    Promise.all([
      d3.tsv('https://unpkg.com/world-atlas@1.1.4/world/50m.tsv'),
      d3.json('https://unpkg.com/world-atlas@1.1.4/world/50m.json')
    ]).then(([tsvData, topoJsondata]) => {

      var idJson = JSON.stringify(tsvData);
      this.idobj = JSON.parse(idJson);


      const rowById = this.idobj.reduce((accumulator: { [x: string]: any; }, d: { iso_n3: string | number; }) => {
        accumulator[d.iso_n3] = d;
        return accumulator;
      }, {});



      var stringJson = JSON.stringify(topoJsondata);
      this.stringObject = JSON.parse(stringJson);
      var countries = t.feature(this.stringObject, this.stringObject.objects.countries);
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
        circleRadius: 8,
        spacing: 20,
        textOffset: 12,
        backgroundRectWidth: 235
      });
      this.svg.selectAll('path').data(this.featureObj.features)
        .enter().append('path')
        .attr('class', 'country')
        .attr('d', (d: any) => this.pathGenerator(d))
        .attr('fill', (d: { properties: { economy: any; }; }) => colorScale(colorValue(d)))
        .append('title')
        .text((d: { properties: { name: string; economy: string; }; }) => d.properties.name + ": " + d.properties.economy);


    })
  

  }
}
