var jsdom = require('jsdom');
const $ = require('jquery')(new jsdom.JSDOM().window);

//import $ from 'jquery';
global.$ = $;
global.jQuery = $;