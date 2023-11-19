$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 60) {
		$(".site_header").addClass("scroll_down");
	} else {
		$(".site_header").removeClass("scroll_down");
	}
});



$('.site_header .toggle, .mobile_menu .close_btn').click(function () {
	$('.mobile_menu').toggleClass('opened');
	$('.nav_menu').toggleClass('opened');
	$('.site_header .toggle').toggleClass('opened')
});

$('.mobile_menu .menu .dropdown .nav_link').click(function (e) {
	$(this).next().toggleClass('opened');
	return false;
});
$('.mobile_menu .menu .back_btn').click(function (e) {
	$(this).parent().removeClass('opened');
});

// end


// end
$(document).click(function (event) {
	if (!$(event.target).closest(".site_header .toggle, .mobile_menu .inner").length) {
		$("body").find(".mobile_menu .inner").parent().removeClass("opened");
		$('.site_header .toggle').removeClass('opened');
	}
});



$('.site_header .search_bar').click(function (e) {
	$(this).next().toggleClass('opened');
	$('.site_header .bg').toggleClass('opened');
	$(this).toggleClass('hide');
	$('.page_overlay').addClass('opened');
});

$('.page_overlay').click(function (e) {
	$('.site_header .search_bar').next().addClass('opened');
	$('.site_header .bg').removeClass('opened');
	$('.site_header .search_bar').removeClass('hide');
	$('.page_overlay').removeClass('opened');
});




// 
// 

mobiscroll.setOptions({
	theme: 'ios',
	themeVariant: 'light'
});

mobiscroll.datepicker('#demo-responsive', {
	controls: ['calendar'],
	select: 'range',
	showRangeLabels: true,
	// responsive: {
	//     xsmall: {
	//         display: 'bottom'
	//     },
	//     small: {
	//         display: 'anchored'
	//     },
	//     custom: { // Custom breakpoint
	//         breakpoint: 800,
	//         display: 'anchored',
	//         touchUi: false
	//     }
	// }
});


$(function () {
	$('#demo-item-templating').mobiscroll().select({
		itemHeight: 40,
		theme: 'ios',
		themeVariant: 'light',
		data: [{
			text: 'Mercury – Act 1',
			value: '56243',
		}, {
			text: 'Divide',
			value: '18659',
		}, {
			text: 'Evolution',
			value: '88459',
		}, {
			text: 'Future Nostalgia',
			value: '65422',
		}
		],
		renderItem: function (item) {
			var data = item.data;
			return '<div class="md-item-template">' +
				'<div class="md-item-template-title">' +
				'<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 sm:h-6 sm:w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg>' +
				'<span>' + data.text + '</span>' +
				'</div>' +
				'</div>';
		}
	});
});
$(function () {
	$('#demo-item-templating0').mobiscroll().select({
		itemHeight: 40,
		theme: 'ios',
		themeVariant: 'light',
		data: [{
			text: 'Lorem ipsum',
			value: '56243',
		}, {
			text: 'Lorem ipsum',
			value: '18659',
		}, {
			text: 'Lorem ipsum',
			value: '88459',
		}, {
			text: 'Lorem ipsum',
			value: '65422',
		}
		],
		renderItem: function (item) {
			var data = item.data;
			return '<div class="md-item-template">' +
				'<div class="md-item-template-title">' +
				'<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 sm:h-6 sm:w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg>' +
				'<span>' + data.text + '</span>' +
				'</div>' +
				'</div>';
		}
	});
});
// End



$(".c-theme-switch").on("click", () => {
	$("html").toggleClass("dark_theme");
	$("html").toggleClass("light_theme");
});



$('ul.tabs li').click(function () {
	var $this = $(this);
	var $theTab = $(this).attr('id');
	console.log($theTab);
	if ($this.hasClass('active')) {
		// do nothing
	} else {
		$this.closest('.tabs_wrapper').find('ul.tabs li, .tabs_container .tab_content').removeClass('active');
		$('.tabs_container .tab_content[data-tab="' + $theTab + '"], ul.tabs li[id="' + $theTab + '"]').addClass('active');
	}

});



$('#demo-booking-timegrid').mobiscroll().datepicker({
	controls: ['calendar'],
	max: '2024-05-17T00:00',
	minTime: '08:00',
	maxTime: '19:59',
	stepMinute: 60,
	labels: [{
		start: '2023-11-17',
		textColor: '#e1528f',
		title: '2 SPOTS'
	}],
	invalid: [{
		start: '2023-11-17T08:00',
		end: '2023-11-17T13:00'
	}, {
		start: '2023-11-17T15:00',
		end: '2023-11-17T17:00'
	}, {
		start: '2023-11-17T19:00',
		end: '2023-11-17T20:00'
	}]
});


var swiper = new Swiper(".mySwiper", {
	slidesPerView: "auto",
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 50,
		},
	},
});



let index = 1;

const on = (listener, query, fn) => {
	document.querySelectorAll(query).forEach(item => {
		item.addEventListener(listener, el => {
			fn(el);
		})
	})
}

on('click', '.selectBtn', item => {
	const next = item.target.nextElementSibling;
	next.classList.toggle('toggle');
	next.style.zIndex = index++;
});
on('click', '.option', item => {
	item.target.parentElement.classList.remove('toggle');

	const parent = item.target.closest('.select').children[0];
	parent.setAttribute('data-type', item.target.getAttribute('data-type'));
	parent.innerText = item.target.innerText;
})



mobiscroll.datepicker('#picker', {
	// controls: ['calendar'],
	// select: 'range',
	pages: 2,
	// rangeHighlight: true,
	// showRangeLabels: true,
	// rangeStartHelp: 'Set dates',
	// rangeEndHelp: 'Set dates'
	controls: ['calendar'],
	select: 'preset-range',
	selectSize: 10,
	// display: 'inline',
	// touchUi: true
});

// mobiscroll.datepicker('#range', {
//     controls: ['calendar'],
//     select: 'range',
//     calendarType: 'month',
//     touchUi: true
// });


//  Quantity

$(function () {
	$('#value1, #value2').keyup(function () {
		var value1 = parseFloat($('#value1').val()) || 0;
		var value2 = parseFloat($('#value2').val()) || 0;
		$('#sum').val(value1 + value2);
	});
});

$('.add').click(function () {
	var th = $(this).closest('.wrap').find('.count');
	th.val(+th.val() + 1);
});
$('.sub').click(function () {
	var th = $(this).closest('.wrap').find('.count');
	if (th.val() > 1) th.val(+th.val() - 1);
});



var swiper = new Swiper(".category_slider .slider", {
	slidesPerView: "auto",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 28,
		},
	},
	navigation: {
		nextEl: '.category_slider .next_arrow',
		prevEl: '.category_slider .prev_arrow',
	},
});




// const largeSlider = () => {
// 	let largeSliders = document.querySelectorAll('.listingCart .image_slider')
// 	let prevArrow = document.querySelectorAll('.prev_arrow')
// 	let nextArrow = document.querySelectorAll('.next_arrow')
// 	largeSliders.forEach((slider, index) => {
// 		let sliderLength = slider.children[0].children.length
// 		let result = (sliderLength > 1) ? true : false
// 		const swiper = new Swiper(slider, {
// 			loop: result,
// 			navigation: {
// 				nextEl: nextArrow[index],
// 				prevEl: prevArrow[index],
// 			},
// 			speed: 1000,
// 			pagination: {
// 				el: `.swiper-pagination`,
// 				type: 'progressbar',
// 			},
// 		});
// 	})
// }
// window.addEventListener('load', largeSlider)

// const buildSwiperSlider = sliderElm => {
// 	const sliderIdentifier = sliderElm.dataset.id;
// 	return new Swiper(`#${sliderElm.id}`, {
// 		navigation: {
// 			nextEl: `.swiper-button-next-${sliderIdentifier}`,
// 			prevEl: `.swiper-button-prev-${sliderIdentifier}`
// 		},
// 		pagination: {
// 			el: `.swiper-pagination-${sliderIdentifier}`,
// 			type: 'progressbar',
// 		},
// 	});
// }

// // Get all of the swipers on the page
// const allSliders = document.querySelectorAll('.listingCart .image_slider');

// // Loop over all of the fetched sliders and apply Swiper on each one.
// allSliders.forEach(slider => buildSwiperSlider(slider));