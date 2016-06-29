import $ from 'jquery';
import Readimage from './lib/readimage';
window.$ = $;

$(function() {
  var CURSOR_CLASS = "cursor";
    var opts = {
      targetElement: $(".readimage"),
      targetImageUrl: [
        '../images/image04.jpg',
        '../images/image05.jpg',
        '../images/image06.jpg'
      ],
      callback: function(){
        $(".alert").fadeIn(1,function(){
          $(this).fadeOut(2500);
        });
      }
    }
    var Read = new Readimage(opts);


    // tab script
    $(".tab_swich").click(function(){
        $('.tab_swich').removeClass(CURSOR_CLASS);
        $('.tab').removeClass(CURSOR_CLASS);
        $(this).addClass(CURSOR_CLASS);
        var index = $('.tab_swich').index(this);
        $(".tab").eq(index).addClass(CURSOR_CLASS);
    });


});
