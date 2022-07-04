import * as $ from 'jquery';
import {Model} from "./model.js";
import {View} from "./view.js";
import {Controller} from "./controller.js";


import '../styles/style.scss'

$(function (){
    let firstToDoList = ['learn Java script', 'learn HTML', 'test3', 'TEST4', 'test5'];
    let model = new Model(firstToDoList);
    let view  = new View(model);
    let controller = new Controller(model, view);

})