import './scss/style.scss';
import $ from 'jquery';

import './components/backgroundSlider.js';

import './slick/slick.scss';
import './slick/slick-theme.scss';
import './slick/slick.min.js';

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1
});






