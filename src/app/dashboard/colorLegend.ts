export const colorLegend = (selection: { selectAll: (arg0: string) => { (): any; new(): any; data: { (arg0: null[]): any; new(): any; }; }; }, props: { colorScale: any; circleRadius: any; spacing: any; textOffset: any; backgroundRectWidth: any; }) => {
  const {                      
    colorScale,                
    circleRadius,
    spacing,                   
    textOffset,
    backgroundRectWidth        
  } = props;                   
  
  const backgroundRect = selection.selectAll('rect')
    .data([null]);             
  const n = colorScale.domain().length; 
  backgroundRect.enter().append('rect')
    .merge(backgroundRect)
      .attr('x', -circleRadius * 2)   
      .attr('y', -circleRadius * 2)   
      .attr('rx', circleRadius * 2)   
      .attr('width', backgroundRectWidth)
      .attr('height', spacing * n + circleRadius * 2) 
      .attr('fill', 'white')
      .attr('opacity', 0.8);
  

  const groups = selection.selectAll('.tick')
    .data(colorScale.domain());
  const groupsEnter = groups
    .enter().append('g')
      .attr('class', 'tick');
  groupsEnter
    .merge(groups)
      .attr('transform', (d: any, i: number) =>    
        `translate(0, ${i * spacing})`  
      );
  groups.exit().remove();
  
  groupsEnter.append('circle')
    .merge(groups.select('circle')) 
      .attr('r', circleRadius)
      .attr('fill', colorScale);      
  
  groupsEnter.append('text')
    .merge(groups.select('text'))   
      .text((d: any) => d)
      .attr('dy', '0.32em')
      .attr('x', textOffset);
}
