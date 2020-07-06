(function ($) {
	$(window).on('load', function () {
		$.instagramFeed({
			username: 'craft.food.blog',
			container: '#instagram-feed',
			display_profile: false,
			display_biography: false,
			display_gallery: true,
			display_igtv: false,
			callback: null,
			styling: false,
			items: 9,
			items_per_row: 4,
			margin: 1,
		});

		$(document).ready(function () {
			console.log('hallo');
			$('.hover').on('touchenter touchleave', function (e) {
				e.preventDefault();
				$(this).toggleClass('hover_effect');
			});
		});
	});
})(jQuery);
