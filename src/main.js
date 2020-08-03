import './main.scss';

import filterOpener from './js/filterOpener';
import lazyLoadInstance from './js/lazyLoading';
import rangeInit from './js/_range';
import priceFilter from './js/priceFilter';
import requestBuilder from './js/requestToBackEnd';


filterOpener();
rangeInit('range-slider');
priceFilter();
requestBuilder();