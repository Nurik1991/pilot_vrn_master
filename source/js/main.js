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




// When the user scrolls down 20px from the top of the document, show the button
// When the user scrolls down 20px from the top of the document, show the button
$(document).ready(function () {
	$(function () {
		$("#to-top__link-id").hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 150) {

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
});
