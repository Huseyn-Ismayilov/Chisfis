// // var input1 = document.querySelector('.hero .date_item input');

// // var input2 = document.querySelector('.searchForm .date_item input');
// (function () {

// 	var demo5 = new HotelDatepicker(
// 		document.querySelector(".hero .date_item input"),
// 		{
// 			minNights: 7,
// 		}
// 	);

// 	var demo2 = new HotelDatepicker(
// 		document.querySelector(".searchForm .date_item input"),
// 		{
// 			minNights: 7,
// 		}
// 	);

// })


// var input = document.querySelector(".searchForm .date_item input");
// var demo = new HotelDatepicker(input);

// var input1 = document.querySelector(".hero .date_item input");
// var demo1 = new HotelDatepicker(input1);




$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll >= 60) {
		$(".site_header").addClass("scroll_down");
	} else {
		$(".site_header").removeClass("scroll_down");
	}
});


// $('.site_header .toggle, .mobile_menu .close_btn').click(function () {
// 	$('.mobile_menu').toggleClass('opened');
// 	$('.nav_menu').toggleClass('opened');
// 	$('.site_header .toggle').toggleClass('opened')
// });

// $('.mobile_menu .menu .dropdown .nav_link').click(function () {
// 	$(this).next().toggleClass('opened');
// 	return false;
// });

// $('.mobile_menu .menu .back_btn').click(function () {
// 	$(this).parent().removeClass('opened');
// });

// end


// end
$(document).click(function (event) {
	if (!$(event.target).closest(".site_header .toggle, .mobile_menu .inner").length) {
		$("body").find(".mobile_menu .inner").parent().removeClass("opened");
		$('.site_header .toggle').removeClass('opened');
	}
});



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




// var swiper = new Swiper(".mySwiper", {
// 	slidesPerView: "auto",
// 	spaceBetween: 30,
// 	pagination: {
// 		el: ".swiper-pagination",
// 		clickable: true,
// 	},
// 	breakpoints: {
// 		640: {
// 			slidesPerView: 2,
// 			spaceBetween: 20,
// 		},
// 		768: {
// 			slidesPerView: 4,
// 			spaceBetween: 40,
// 		},
// 		1024: {
// 			slidesPerView: 5,
// 			spaceBetween: 50,
// 		},
// 	},
// });



// let index = 1;

// const on = (listener, query, fn) => {
// 	document.querySelectorAll(query).forEach(item => {
// 		item.addEventListener(listener, el => {
// 			fn(el);
// 		})
// 	})
// }

// on('click', '.selectBtn', item => {
// 	const next = item.target.nextElementSibling;
// 	next.classList.toggle('toggle');
// 	next.style.zIndex = index++;
// });
// on('click', '.option', item => {
// 	item.target.parentElement.classList.remove('toggle');

// 	const parent = item.target.closest('.select').children[0];
// 	parent.setAttribute('data-type', item.target.getAttribute('data-type'));
// 	parent.innerText = item.target.innerText;
// })



// mobiscroll.datepicker('#range', {
//     controls: ['calendar'],
//     select: 'range',
//     calendarType: 'month',
//     touchUi: true
// });




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
			loop: result,
			navigation: {
				nextEl: nextArrow[index],
				prevEl: prevArrow[index],
			},
			speed: 1000,
			pagination: {
				el: `.listingCart .swiper-pagination`,
				type: 'progressbar',
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

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
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


$('.sectionVideos .mainVideo .playBtn').click(function () {
	$(this).style.opacity = 0
})


// var player;

// // this function gets called when API is ready to use
// function onYouTubePlayerAPIReady() {
// 	// create the global player from the specific iframe (#video)
// 	player = new YT.Player('video', {
// 		events: {
// 			// call this function when player is ready to use
// 			'onReady': onPlayerReady
// 		}
// 	});
// }

// function onPlayerReady(event) {

// 	// bind events
// 	var playButton = document.querySelector(".mainVideo .playBtn");
// 	playButton.addEventListener("click", function () {
// 		player.playVideo();
// 	});

// 	var pauseButton = document.getElementById("pause-button");
// 	pauseButton.addEventListener("click", function () {
// 		player.pauseVideo();
// 		alert(player.getCurrentTime());

// 	});

// }

// // Inject YouTube API script. 
// var tag = document.createElement('script');
// tag.src = "//www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


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
