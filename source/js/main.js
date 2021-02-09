// анимация при загрузке стр
$(document).ready(function () {

	setTimeout(function () {
		show_first();
	}, 500);

	setTimeout(function () {
		show_second();
	}, 2000);

	setTimeout(function () {
		show_third();
	}, 3000);

	setTimeout(function () {
		show_fourth();
	}, 4000);

	setTimeout(function () {
		show_fiveth();
	}, 5000);

	setTimeout(function () {
		show_sixth();
	}, 5500);

});


function show_first() {
	$('.offer-swiper-container').css({
		visibility: 'visible',
		opacity: '1'
	});
}
function show_second() {
	$('.header').css({
		visibility: 'visible',
		top: '0px'
	});
}
function show_third() {

	$('.offer__text').css({
		visibility: 'visible',
		opacity: '1'
	});
}


function show_fourth() {

	$('.offer-swiper-pagination').css({
		visibility: 'visible',
		opacity: '1'
	});
}
function show_fiveth() {

	$('.search-block').css({
		visibility: 'visible',
		opacity: '1'
	});
}
function show_sixth() {

	$('.offer__bookmarks').css({
		visibility: 'visible',
		opacity: '1'
	});
}






// svg поддержка
$(document).ready(function () {
	$('img[src$=".svg"]').each(function () {
		var $img = jQuery(this);
		var imgURL = $img.attr('src');
		var attributes = $img.prop("attributes");

		$.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Remove any invalid XML tags
			$svg = $svg.removeAttr('xmlns:a');

			// Loop through IMG attributes and apply on SVG
			$.each(attributes, function () {
				$svg.attr(this.name, this.value);
			});

			// Replace IMG with SVG
			$img.replaceWith($svg);
		}, 'xml');
	});
});


// маска для телефонов
$("[placeholder*='Тел']").mask("+7(999) 999-9999");

// при клике на покупку перекрасится корзинка
$('.card__buy-button').click(function (event) {
	$('.offer__buy-button').css('background', '#ffa401');
});




// When the user scrolls down 20px from the top of the document, show the button
// When the user scrolls down 20px from the top of the document, show the button
$(document).ready(function () {
	$("body,html").animate({
		scrollTop: 1
	}, 800);

	$(function () {
		$("#to-top__link-id").hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 850) {

				$("#to-top__link-id").fadeIn();
				$("#to-top__link-id").css('display', 'block');
			} else {
				$("#to-top__link-id").fadeOut();

			}
		});

		$("#to-top__link-id").click(function () {
			$("body,html").animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

	// показать и скрыть отзывы
	$('.reviews-title').click(function (event) {
		if ($('.reviews-title').hasClass('open')) {
			$(this).removeClass('open').addClass('close');
			$('.reviews-body').slideUp();
		}
		else {
			$(this).removeClass('close').addClass('open');
			$('.reviews-body').slideDown();
		}
	});

	// карточка товара сменить активное изображение
	$('.description__choose-image img').click(function (event) {
		let $this_img = $(this).attr('src')
		$('.single-product__preview-image img').attr('src', $this_img);
	});
});







// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function () {
	modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
	modal.style.display = "block";
}
$('.callback').click(function (event) {
	$('.modalwind').css('display', 'block');
});
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}



// Для моб меню
$('.have-sub').click(function (event) {
	if ($('.have-sub').children('.sub-menu').hasClass('active')) {
		$(this).children('.sub-menu').removeClass('active');
	}
	else {
		$(this).children('.sub-menu').addClass('active');
	}
});


$('.sub-menu__links').click(function (event) {
	// $('#checkbox').removeClass('mobile-menu__checkbox');
	// $('#checkbox').addClass('mobile-menu__checkbox');
});
$('.menu__item a').click(function (event) {
	// $('#checkbox').removeClass('mobile-menu__checkbox');
	// $('#checkbox').addClass('mobile-menu__checkbox');
});
// mobile-menu__checkbox