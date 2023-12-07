
var header = document.querySelector(".bottomNavbar");
var navbarHeight = header.offsetHeight;
var lastScrollTop = 0;

window.onscroll = function () { scrollHide() };

function scrollHide() {
	var st = window.pageYOffset || document.documentElement.scrollTop;
	console.log(st);
	if (st > lastScrollTop) {
		header.classList.add('hide');
	} else {
		header.classList.remove('hide');
	}
	lastScrollTop = st <= 0 ? 0 : st;
}

// end
var demo1 = new HotelDatepicker(
	document.querySelector(".site_header .date_item input"),
	{
		showTopbar: false,
		moveBothMonths: true,
		// noCheckInDaysOfWeek: ['Monday', 'Tuesday']
	}
);


// end

$('.site_header .search_bar').click(function () {
	$(this).next().toggleClass('opened');
	$('.site_header .bg').toggleClass('opened');
	$(this).toggleClass('hide');
	$('.page_overlay').addClass('opened');
});

$('.page_overlay').click(function () {
	$('.site_header .search_bar').next().addClass('opened');
	$('.site_header .bg').removeClass('opened');
	$('.site_header .search_bar').removeClass('hide');
	$('.page_overlay').removeClass('opened');
});




$(".c-theme-switch").on("click", () => {
	$("html").toggleClass("dark_theme");
	$("html").toggleClass("light_theme");
});


$(".listingCart .save_btn").click(function () {
	$(this).toggleClass('active')
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




var swiper = new Swiper(".highlights_places .slider", {
	slidesPerView: 2,
	spaceBetween: 20,
	pagination: {
		el: ".highlights_places .swiper-pagination",
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
		el: ".discover_slider .swiper-pagination",
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
			// loop: result,
			navigation: {
				nextEl: nextArrow[index],
				prevEl: prevArrow[index],
			},
			speed: 1000,
			pagination: {
				el: `.listingCart .swiper-pagination`,
			},
		});
	})
}
window.addEventListener('load', largeSlider)



$(".search_item").click(function () {
	$(this).addClass('active')
	$(this).find('input').focus()
	$(this).find('dropdown').toggleClass('opened')
});

// $(".hero .item2").click(function () {
// 	$(this).addClass('active')
// 	$(this).find('dropdown').toggleClass('opened')
// });

$(".quantity_item .btn").click(function () {
	$(this).parents().eq(0).toggleClass('active')
	$(this).parents().eq(1).toggleClass('active')
});


$(document).click(function (event) {
	if (!$(event.target).closest(".quantity_item .btn,.quantity_item .dropdown").length) {
		$("body").find(".quantity_item .quantity").removeClass("active");
		$("body").find(".quantity_item").removeClass("active");
	}
});

$(document).click(function (event) {
	if (!$(event.target).closest(".search_item").length) {
		$("body").find(".search_item").removeClass("active");
	}
});

$(".search_item").click(function () {
	$(this).addClass('active')
	$(this).find('input').focus()
	$(this).find('dropdown').toggleClass('opened')
});



document.querySelectorAll(".uploadImage input").forEach((inputElement) => {
	const dropZoneElement = inputElement.closest(".uploadImage");

	dropZoneElement.addEventListener("click", (e) => {
		inputElement.click();
	});

	inputElement.addEventListener("change", (e) => {
		if (inputElement.files.length) {
			updateThumbnail(dropZoneElement, inputElement.files[0]);
		}
	});

	dropZoneElement.addEventListener("dragover", (e) => {
		e.preventDefault();
		dropZoneElement.classList.add("drop-zone--over");
	});

	["dragleave", "dragend"].forEach((type) => {
		dropZoneElement.addEventListener(type, (e) => {
			dropZoneElement.classList.remove("drop-zone--over");
		});
	});

	dropZoneElement.addEventListener("drop", (e) => {
		e.preventDefault();

		if (e.dataTransfer.files.length) {
			inputElement.files = e.dataTransfer.files;
			updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
		}

		dropZoneElement.classList.remove("drop-zone--over");
	});
});

function updateThumbnail(dropZoneElement, file) {
	let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

	// First time - remove the prompt
	if (dropZoneElement.querySelector(".drop-zone__prompt")) {
		dropZoneElement.querySelector(".drop-zone__prompt").remove();
	}

	// First time - there is no thumbnail element, so lets create it
	if (!thumbnailElement) {
		thumbnailElement = document.createElement("div");
		thumbnailElement.classList.add("drop-zone__thumb");
		dropZoneElement.appendChild(thumbnailElement);
	}

	thumbnailElement.dataset.label = file.name;

	// Show thumbnail for image files
	if (file.type.startsWith("image/")) {
		const reader = new FileReader();

		reader.readAsDataURL(file);
		reader.onload = () => {
			thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
		};
	} else {
		thumbnailElement.style.backgroundImage = null;
	}
}


$('.add').click(function () {
	var th = $(this).closest('.item').find('.count');
	th.val(+th.val() + 1);
});

$('.sub').click(function () {
	var th = $(this).closest('.item').find('.count');
	if (th.val() > 1) th.val(+th.val() - 1);
});



$(function () {
	$('#value1, #value2, #value3').keyup(function () {
		var value1 = parseFloat($('#value1').val()) || 0;
		var value2 = parseFloat($('#value2').val()) || 0;
		var value3 = parseFloat($('#value2').val()) || 0;
		$('#sum').html(val(value1 + value2 + value3))
	});
});



var swiper = new Swiper(".clientSay .slider", {
	pagination: {
		el: ".clientSay .swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: '.clientSay .next_arrow',
		prevEl: '.clientSay .prev_arrow',
	},
});



$('.navMenu .menu .nav_link').click(function () {
	$(this).next().slideToggle()
	return false
})


$('.site_header .action_list .toggle, .navMenu .closeBtn, .bottomNavbar .menuToggle').click(function () {
	$('.navMenu').toggleClass('opened')
})

$(".site_header .notifications .trigger").click(function () {
	$(this).next().toggleClass('active')
});

$(document).click(function (event) {
	if (!$(event.target).closest(".site_header .notifications .trigger, .site_header .notifications .dropdown .inner").length) {
		$("body").find(".site_header .notifications .dropdown").removeClass("active");
	}
});



$(document).click(function (event) {
	if (!$(event.target).closest(".navMenu .inner, .site_header .action_list .toggle, .navItem.menuToggle").length) {
		$("body").find(".navMenu").removeClass("opened");
	}
});


$(".bottomNavbar .navItem:not(.menuToggle)").click(function () {
	$(this).toggleClass('active')
	$(this).siblings().removeClass('active')
});


$(".mobileSearchForm .block .head").click(function () {
	$(this).parent().toggleClass('active')
	$(this).parent().siblings().removeClass('active')
});


var stickyCategorySlider = new Swiper(".stickyCategorySlider .slider", {
	slidesPerView: "auto",
	freeMode: true,

	pagination: {
		el: ".stickyCategorySlider .swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: '.stickyCategorySlider .next_arrow',
		prevEl: '.stickyCategorySlider .prev_arrow',
	},
	breakpoints: {
		1024: {
			freeMode: false,
		},
	},
});


if ($(window).width() < 991) {
	$('.listings .tag:not(.moreFilter.mobile)').remove()

}

$(".FeaturePlaces .tag:not(.moreFilter) .btn").click(function () {
	$(this).parent().toggleClass('active')
	$(this).parent().siblings().removeClass('active')
})

$(".FeaturePlaces .moreFilter:not(.mobile) > .btn, .moreFilerPopup.desktop .closeBtn").click(function () {
	$('.moreFilerPopup.desktop').toggleClass('active')
})

$(".FeaturePlaces .moreFilter.mobile > .btn, .moreFilerPopup.mobile .closeBtn").click(function () {
	$('.moreFilerPopup.mobile').toggleClass('active')
})

$(".btn.share_btn, .share_popup .top .closeBtn").click(function () {
	$('.share_popup').toggleClass('active')
})

$(document).click(function (event) {
	if (!$(event.target).closest(".FeaturePlaces .tag:not(.moreFilter) .dropdown, .FeaturePlaces .tag:not(.moreFilter) .btn").length) {
		$(".FeaturePlaces .tag:not(.moreFilter)").removeClass("active");
	}
});

$(document).click(function (event) {
	if (!$(event.target).closest(".moreFilter > .btn, .moreFilerPopup .inner").length) {
		$(".moreFilerPopup").removeClass("active");
	}
});

$(document).click(function (event) {
	if (!$(event.target).closest(".share_popup .inner, .share_btn").length) {
		$(".share_popup").removeClass("active");
	}
});

$(".mobileSearchForm .trigger, .mobileSearchForm .hiddenContent .close_btn").click(function () {
	$('.mobileSearchForm .hiddenContent').toggleClass('active')
})

var demo99 = new HotelDatepicker(document.querySelector("#mobileDatePicker"), {
	inline: true,
});
var demo3 = new HotelDatepicker(document.querySelector(".inlineDatePicker"), {
	inline: true,
	// moveBothMonths: true,
	// minNights: 2,
	// showTopbar: false,
	// disabledDates: [
	// 	'2023-12-12',
	// 	'2023-12-08',
	// 	'2023-12-11',
	// 	'2023-12-13',
	// 	'2023-12-16',
	// 	'2023-12-26'
	// ],
	// extraDayText: function (date, attributes) {
	// 	if (date === fecha.format(new Date("2023-12-4"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$110</span>";
	// 	}
	// 	if (date === fecha.format(new Date("2023-12-6"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$110</span>";
	// 	}
	// 	if (date === fecha.format(new Date("2023-12-5"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$110</span>";
	// 	}
	// 	if (date === fecha.format(new Date("2024-1-2"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$234</span>";
	// 	}
	// 	if (date === fecha.format(new Date("2024-1-5"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$150</span>";
	// 	}
	// 	if (date === fecha.format(new Date("2024-1-3"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$290</span>";
	// 	}
	// 	if (date === fecha.format(new Date("2024-1-4"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$63</span>";
	// 	}
	// },
	// noCheckInDates: [
	//     '2023-12-28',
	//     '2023-12-29',
	// 	'2024-01-05'
	// ],
	// noCheckOutDates: [
	//     '2023-12-11',
	//     '2023-12-20',
	// 	'2024-01-08',
	// 	'2024-01-12',
	// 	'2024-01-18',
	// 	'2024-01-26',
	// ]
});


var demo14 = new HotelDatepicker(document.querySelector(".listingDetailPage .asideDatePicker"), {
	// moveBothMonths: true,
	// minNights: 2,
	// showTopbar: false,

	// extraDayText: function (date, attributes) {
	// 	if (date === fecha.format(new Date("2023-12-4"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$110</span>";
	// 	}
	// 	if (date === fecha.format(new Date("2023-12-6"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$110</span>";
	// 	}
	// 	if (date === fecha.format(new Date("2023-12-5"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$110</span>";
	// 	}
	// 	if (date === fecha.format(new Date("2024-1-2"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$234</span>";
	// 	}
	// 	if (date === fecha.format(new Date("2024-1-5"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$150</span>";
	// 	}
	// 	if (date === fecha.format(new Date("2024-1-3"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$290</span>";
	// 	}
	// 	if (date === fecha.format(new Date("2024-1-4"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$63</span>";
	// 	}
	// },
	// disabledDates: [
	// 	'2023-12-12',
	// 	'2023-12-08',
	// 	'2023-12-11',
	// 	'2023-12-13',
	// 	'2023-12-16',
	// 	'2023-12-26'
	// ],
	onSelectRange: function () {
		$('.listingDetailPage .sticky .hiddenForm').slideDown(400)
		$('.listingDetailPage .dateRange').addClass('active')
	},
	// noCheckInDates: [
	//     '2023-12-28',
	//     '2023-12-29'
	// ],
	// noCheckOutDates: [
	//     '2023-12-11',
	//     '2023-12-20',
	// 	'2024-01-08',
	// 	'2024-01-12',
	// 	'2024-01-18',
	// 	'2024-01-26',
	// ]
});




Fancybox.bind('.listingGallery a', {
	groupAll: true,
});



var input = document.querySelector("#phone");
var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];
window.addEventListener("load", function () {

	errorMsg = document.querySelector("#error-msg"),
		validMsg = document.querySelector("#valid-msg");
	var iti = window.intlTelInput(input, {
		utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.2/build/js/utils.js"
	});
	window.intlTelInput(input, {
		// allowDropdown: false,
		// autoHideDialCode: false,
		// autoPlaceholder: "off",
		// dropdownContainer: document.body,
		// excludeCountries: ["us"],
		// formatOnDisplay: false,
		geoIpLookup: function (callback) {
			$.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
				var countryCode = (resp && resp.country) ? resp.country : "";
				callback(countryCode);
			});
		},
		// hiddenInput: "full_number",
		initialCountry: "auto",

		localizedCountries: { 'Tr': 'Turk' },
		//nationalMode: false,
		// onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
		placeholderNumberType: "MOBILE",
		// preferredCountries: ['cn', 'jp'],
		// separateDialCode: true,
		utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.2/build/js/utils.js",
	});
	$(validMsg).addClass("hide");
	input.addEventListener('blur', function () {
		reset();
		if (input.value.trim()) {
			if (iti.isValidNumber()) {
				validMsg.classList.remove("hide");
			} else {
				input.classList.add("error");
				var errorCode = iti.getValidationError();
				errorMsg.innerHTML = errorMap[errorCode];
				errorMsg.classList.remove("hide");
			}
		}
	});

	input.addEventListener('change', reset);
	input.addEventListener('keyup', reset);
});


var reset = function () {
	input.classList.remove("error");
	errorMsg.innerHTML = "";
	errorMsg.classList.add("hide");
	validMsg.classList.add("hide");
};
$(document).ready(function () {
	$("#phone").val("+907773859");
});




$(".listingDetailNav .reserve_btn, .datePickerForm > .closeBtn").click(function () {
	$(".datePickerForm").toggleClass('active')
	$("body").toggleClass('overflow_hidden')
})

$(".datePickerForm .yourTrip .bookDetails, .datePickerForm .bookingDetails .closeBtn").click(function () {
	$(".datePickerForm .bookingDetails").toggleClass('active')
	$(".datePickerForm").toggleClass('overflowHidden')
})
$(".listingDetailNav .date, .datePickerForm .dateRange0").click(function () {
	$(".datePickerPopup").toggleClass('active')
})

$(".datePickerPopup .closeBtn").click(function () {
	$(".datePickerPopup").removeClass('active')
})

var demo99 = new HotelDatepicker(document.querySelector(".datePickerPopup .datePicker"), {
	// moveBothMonths: true,
	// showTopbar: false,
	// inline: true,
	// extraDayText: function (date, attributes) {
	// 	if (date === fecha.format(new Date("2023-12-4"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$110</span>";
	// 	}
	// 	if (date === fecha.format(new Date("2023-12-6"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$110</span>";
	// 	}
	// 	if (date === fecha.format(new Date("2023-12-5"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$110</span>";
	// 	}
	// 	if (date === fecha.format(new Date("2024-1-2"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$234</span>";
	// 	}
	// 	if (date === fecha.format(new Date("2024-1-5"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$150</span>";
	// 	}
	// 	if (date === fecha.format(new Date("2024-1-3"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$290</span>";
	// 	}
	// 	if (date === fecha.format(new Date("2024-1-4"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
	// 		return "<span>$63</span>";
	// 	}
	// },
	// disabledDates: [
	// 	'2023-12-12',
	// 	'2023-12-08',
	// 	'2023-12-11',
	// 	'2023-12-13',
	// 	'2023-12-16',
	// 	'2023-12-26'
	// ],
});


