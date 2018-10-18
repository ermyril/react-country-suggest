import React from 'react';
import ReactDOM from 'react-dom';

import CountrySuggest from './CountrySuggest.js';


// export default CountrySuggest;
// var CountrySuggest = require('./CountrySuggest.js');

// var exports = module.exports = {};

// exports.a = function() {
//     console.log("a");
// }

var callback = function dataManage(resp){
	let data = {
		name: resp.nativeName,
		flag: "https://www.countryflags.io/"+resp.alpha2Code+"/shiny/64.png",
	}
	return data;
}

ReactDOM.render(
  <CountrySuggest 
	  apiURL="https://restcountries.eu/rest/v2/name/"
	  nameField="name" 
	  flagField="flag" 
	  dataCallback={callback}
	/>,
  document.getElementById('root')
);
