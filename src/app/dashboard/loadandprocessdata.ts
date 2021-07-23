import * as d3 from 'd3';
import * as t from 'topojson';

export const loadandprocessdata = () =>
Promise.all([
  d3.tsv('https://unpkg.com/world-atlas@1.1.4/world/50m.tsv'),
  d3.json('https://unpkg.com/world-atlas@1.1.4/world/50m.json')
    ]).then(([tsvData, topoJSONdata]) => {

     
const rowById = tsvData.reduce(d => {
  tsvData[d.iso_n3] = d;
  return rowById;
  }, {}); 

// const rowById = {};

// tsvData.forEach(d => {
//   rowById[d.iso_n3] = d;
// }); 
const countries = t.feature(topoJSONdata, topoJSONdata)

countries.features.forEach(d => {
  Object.assign(d.properties, rowById[d.id]);
});
 return countries;

});