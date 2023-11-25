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




$(".c-theme-switch").on("click", () => {
	$("html").toggleClass("dark_theme");
	$("html").toggleClass("light_theme");
});



$('.tabs li').click(function () {
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



// mobiscroll.datepicker('#range', {
//     controls: ['calendar'],
//     select: 'range',
//     calendarType: 'month',
//     touchUi: true
// });



$('.add').click(function () {
	var th = $(this).closest('.item').find('.count');
	th.val(+th.val() + 1);
});
$('.sub').click(function () {
	var th = $(this).closest('.item').find('.count');
	if (th.val() > 1) th.val(+th.val() - 1);
});



// $(function () {
// 	$('#value1, #value2, #value3').keyup(function () {
// 		var value1 = parseFloat($('#value1').val()) || 0;
// 		var value2 = parseFloat($('#value2').val()) || 0;
// 		var value3 = parseFloat($('#value2').val()) || 0;
// 		$('#sum').val(value1 + value2 + value3);
// 	});
// });

var swiper = new Swiper(".highlights_places .slider", {
	slidesPerView: 2,
	spaceBetween: 20,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 28,
		},
	},
	navigation: {
		nextEl: '.highlights_places .next_arrow',
		prevEl: '.highlights_places .prev_arrow',
	},
});


var swiper = new Swiper(".discover_slider .slider", {
	slidesPerView: 2,
	spaceBetween: 20,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 28,
		},
	},
	navigation: {
		nextEl: '.discover_slider .next_arrow',
		prevEl: '.discover_slider .prev_arrow',
	},
});

const largeSlider = () => {
	let largeSliders = document.querySelectorAll('.listingCart .image_slider')
	let prevArrow = document.querySelectorAll('.listingCart .prev_arrow')
	let nextArrow = document.querySelectorAll('.listingCart .next_arrow')
	largeSliders.forEach((slider, index) => {
		let sliderLength = slider.children[0].children.length
		let result = (sliderLength > 1) ? true : false
		const swiper = new Swiper(slider, {
			loop: result,
			navigation: {
				nextEl: nextArrow[index],
				prevEl: prevArrow[index],
			},
			speed: 1000,
			pagination: {
				el: `.swiper-pagination`,
				type: 'progressbar',
			},
		});
	})
}
window.addEventListener('load', largeSlider)




$(".quantity_item .btn").click(function () {
	$(this).parents().eq(0).toggleClass('active')
});


$(document).click(function (event) {

	if (!$(event.target).closest(".quantity_item .btn, .quantity_item .quantity .dropdown").length) {
		$("body").find(".quantity_item .quantity .dropdown").parents().eq(0).removeClass("active");
	}

});


$(document).ready(function () {
	$("#demo-item-templating0").asDatepicker({ mode: 'range' });
});


$(".search_item").click(function () {
	$(this).toggleClass('active')
	$(this).find('input').focus()
	$(this).find('dropdown').toggleClass('opened')
});


$(document).click(function (event) {
	if (!$(event.target).closest(".btn").length) {
		$("body").find(".search_item").removeClass("opened");
	}
});