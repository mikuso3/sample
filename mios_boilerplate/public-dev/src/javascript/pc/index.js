'use strict'

var $ = require('jquery');

$(function () {
  $('.test-text').click(function () {
    $('.test-text2').slideToggle();
  });
});
