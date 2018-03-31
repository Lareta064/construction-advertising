$(document).ready(function() {

	
	
    //плавная прокрутка
    $("a,a[href='#'],a[rel='m_PageScroll2id'],a.PageScroll2id, a.mouse_scroll").mPageScroll2id({
      highlightSelector:"nav a"
  });

        	//иконка бургер
	(function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".cmn-toggle-switch");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }
 
})();

// конец иконка
//работа со скрытым меню
	$("#navigation__button").click(myFunction); 

	function myFunction() {
		var x = document.getElementById("topnav");
		
		if(x.className === "header__menu") {
			x.className += " responsive";
		}  else{
				x.className = "header__menu";

		}
	}

  var navLinks = $(".header__nav a");
  var navToggleButton = $("#navigation__button");
  var navBlock = $('.header__menu');
  var navBlockOpen = 'responsive';

  navLinks.on('click', function(){
    if ( navBlock.hasClass(navBlockOpen) ) {
      navButtonToggle();
    }
    navBlock.removeClass(navBlockOpen);
  });

  function navButtonToggle(){
    if ( navToggleButton.hasClass("active")) {
      navToggleButton.removeClass("active");
    } else {
      navToggleButton.addClass("active");
    }
  }
   //работа со скрытым меню

		    //открываем поп 
		$('.show_popup').click(function() { // Вызываем функцию по нажатию на кнопку 
		    var popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id 
		    $(popup_id).show(); // Открываем окно
		    $('.overlay_popup').show(); // Открываем блок заднего фона
		}) 
		$('.overlay_popup').click(function() { // Обрабатываем клик по заднему фону
		    $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
		});
		//открываем поп 

		/*animated*/
		 wow = new WOW( {
		     boxClass:     'wow',      // default
		    animateClass: 'animated', // default
		    offset:       100,          // через сколько пикселей сработает
		    mobile:       false,       // default
		    live:         true        // для мобильных оставить или убрать анимацию
		  }
		  )
		  wow.init();
		   new WOW().init();

		   //slider
		   	$('#types-owl').owlCarousel({
		   		//margin:30,
		   		loop:true,
		   		dots: false,
		   		autoplay:true,
		   		nav: true, // навигация
   			 // Перепишем текст кнопок
    			// используем Font Awesome для добавления стрелок
    			navText: ['<span class="glyphicon glyphicon-arrow-left"></span>',
             '<span class="glyphicon glyphicon-arrow-right"></span>'],
		   		smartSpeed:1000, 
                autoplayTimeout:2000, 
		   		responsive:{
		   			0:{items:1},
		   			600:{items:2},
		   			1000:{items:4}
		   		}
		   	});

		   		$('#reviews-owl').owlCarousel({
		   		//margin:30,
		   		loop:true,
		   		dots: false,
		   		autoplay:true,
		   		nav: true, // навигация
   			 // Перепишем текст кнопок
    			// используем Font Awesome для добавления стрелок
    			navText: ['<span class="glyphicon glyphicon-arrow-left"></span>',
             '<span class="glyphicon glyphicon-arrow-right"></span>'],
		   		smartSpeed:2000, 
                autoplayTimeout:3000, 
		   		responsive:{
		   			0:{items:1},
		   			600:{items:1},
		   			1000:{items:1}
		   		}
		   	});
		   

	
});