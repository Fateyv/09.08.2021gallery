import './style.css';

import $ from 'jquery';
import Controller from './controller/Controller';

$(() => {
  new Controller($('.container'));
});