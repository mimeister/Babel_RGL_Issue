
require('./lib');
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';
//import ES6Lib from './es6codelib';

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './reactcomponent';
import FetchData from './fetchdata';

ReactDOM.render(
    <Counter />,
    document.getElementById('basicreactcomponent')
);

ReactDOM.render(
	<FetchData />,
	document.getElementById('reactcomponentwithapidata')
);

//document.getElementById("fillThis").innerHTML = getText();

//$('#fillThisWithjQuery').html('filled by jQuery.');
//let myES6Object = new ES6Lib();
//$('#fillThisWithES6Lib').html(myES6Object.getData());

module.hot.accept();