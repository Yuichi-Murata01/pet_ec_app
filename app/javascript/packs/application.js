// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .



import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"


// $(document).ready(function() {
//     $("button").text("Hello JQuery on Rails");
//  });

// $(document).ready(function() {
//     $('.a').slick({
//         dots: true,
//         autoplay: true,
//         autoplaySpeed:1000,
//     });
// });

$(function() {
    $('.a').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
    });
});

// window.addEventListener('DOMContentLoaded', function() {
//     $('.a').slick({
//         dots: true,
//         autoplay: true,
//         autoplaySpeed:1000,
//     });
// });

var jQuery = require('jquery')
global.$ = global.jQuery = jQuery;
window.$ = window.jQuery = jQuery;

Rails.start()
Turbolinks.start()
ActiveStorage.start()

