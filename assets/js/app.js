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


// $('.sectionVideos .mainVideo .playBtn').click(function () {
// 	$(this).style.opacity = 0
// })


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



$('.navMenu .menu .nav_link').click(function () {
	$(this).next().slideToggle()
	return false
})


$('.site_header .action_list .toggle, .navMenu .closeBtn').click(function () {
	$('.navMenu').toggleClass('opened')
})


$(document).click(function (event) {
	if (!$(event.target).closest(".navMenu .inner, .site_header .action_list .toggle").length) {
		$("body").find(".navMenu").removeClass("opened");
	}
});


var stickyCagorySlider = new Swiper(".stickyCagorySlider .slider", {
	slidesPerView: "auto",
	pagination: {
		el: ".stickyCagorySlider .swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: '.stickyCagorySlider .next_arrow',
		prevEl: '.stickyCagorySlider .prev_arrow',
	},
});

// $.boceksoft = {
// 	calendarShow: function (eventPick, number) {
// 		$(eventPick).html("");
// 		$(eventPick).removeClass("hasDatepicker");
// 		$(eventPick).datepicker({
// 			monthNamesShort: (window.location.pathname.split("/")[1] == "en" ? $.datepicker.regional["en"].monthNames : $.datepicker.regional["tr"].monthNames),
// 			numberOfMonths: (number != 0 ? number : ($(window).width() > 1200 ? 2 : 1)),
// 			minDate: '0',
// 			dateFormat: 'dd.mm.yy',
// 			beforeShowDay: function (date) {
// 				return $.boceksoft.calendarBeforeShowDay(date, "", "", false);
// 			},
// 			onSelect: function (setDate) {
// 				var ssx = setDate.split('.');
// 				if (Calendardate1 == undefined)
// 					Calendardate1 = ssx[2] + "-" + ssx[1] + "-" + ssx[0] + "T00:00:00";
// 				else if (Calendardate2 == undefined && Calendardate1 != ssx[2] + "-" + ssx[1] + "-" + ssx[0])
// 					Calendardate2 = ssx[2] + "-" + ssx[1] + "-" + ssx[0] + "T00:00:00";
// 				else
// 					Calendardate1 = ssx[2] + "-" + ssx[1] + "-" + ssx[0] + "T00:00:00",
// 						Calendardate2 = undefined;
// 				if (Calendardate1 != undefined && Calendardate2 != undefined) {
// 					var datex1 = new Date(Calendardate1.replace(' ', 'T'));
// 					var datex2 = new Date(Calendardate2.replace(' ', 'T'));
// 					var event1 = "#calendarReservationdate1", event2 = "#calendarReservationdate2";
// 					var event1Input = "reservationdate1", event2Input = "reservationdate2";
// 					if (datex1 > datex2)
// 						event1 = "#calendarReservationdate2", event2 = "#calendarReservationdate1", event1Input = "reservationdate2", event2Input = "reservationdate1";
// 					$(event1).data("id", $("#reservationdate1").data("id"));
// 					$(event2).data("id", $("#reservationdate1").data("id"));
// 					if ($(event1).data("label-show") == "1")
// 						$(event1).parents("label").eq(0).find(".date").html((datex1.getDate() < 10 ? "0" : "") + datex1.getDate() + "." + ((datex1.getMonth() + 1) < 10 ? "0" : "") + (datex1.getMonth() + 1) + "." + datex1.getFullYear()),
// 							$(event1).parents("label").eq(0).find(".dateName").html($.boceksoft.dateName(datex1.getDay()));
// 					if ($(event2).data("label-show") == "1")
// 						$(event2).parents("label").eq(0).find(".date").html((datex2.getDate() < 10 ? "0" : "") + datex2.getDate() + "." + ((datex2.getMonth() + 1) < 10 ? "0" : "") + (datex2.getMonth() + 1) + "." + datex2.getFullYear()),
// 							$(event2).parents("label").eq(0).find(".dateName").html($.boceksoft.dateName(datex2.getDay()));
// 					$("[name='" + event1Input + "']").val((datex1.getDate() < 10 ? "0" : "") + datex1.getDate() + "." + ((datex1.getMonth() + 1) < 10 ? "0" : "") + (datex1.getMonth() + 1) + "." + datex1.getFullYear());
// 					$("[name='" + event2Input + "']").val((datex2.getDate() < 10 ? "0" : "") + datex2.getDate() + "." + ((datex2.getMonth() + 1) < 10 ? "0" : "") + (datex2.getMonth() + 1) + "." + datex2.getFullYear());
// 					$(event1).trigger("change");
// 					$(".modalRezervationForm .contactForm form .successDate").hide(),
// 						$(".modalRezervationForm .contactForm form [type='submit']").hide();
// 					if ($(".modalRezervationForm").length > 0)
// 						$(".modalRezervationForm").addClass("show");
// 					else
// 						$("#reservationdate1").trigger("change");

// 					eval($(eventPick).data("select-date"));
// 				}
// 			}
// 		});
// 	},
// 	villasCalendar: function (id, doviz, girisSaati, cikisSaati, villaAdi, islem, number, refreshAjax = 0) {
// 		if ($(".modalRezervationForm").length > 0)
// 			$(".modalRezervationForm .girisSaati").html(girisSaati),
// 				$(".modalRezervationForm .cikisSaati").html(cikisSaati),
// 				$("#calendarModal .villaCalendar .calendarInfo .villaName").html(villaAdi),
// 				$(".modalRezervationForm .homesIdValue").val(id);
// 		$.ajax({
// 			type: 'post',
// 			url: '/ajax/' + (islem == "yat" ? "yattarih" : "villatarih"),
// 			data: 'id=' + id + "&doviz=" + doviz,
// 			success: function (e) {
// 				var arr = e.split("##");
// 				Calendardate1 = undefined,
// 					Calendardate2 = undefined,
// 					giristarihler = arr[0].split(","),
// 					cikistarihler = arr[1].split(","),
// 					dolutarihler = arr[2].split(","),
// 					Rgiristarihler = arr[3].split(","),
// 					Rcikistarihler = arr[4].split(","),
// 					RezervasyonBekleyenler = arr[5].split(","),
// 					RezervasyonSaatler = arr[6].split(","),
// 					calendarFiyatlarTarihler = arr[8].split(",").filter(x => x != ''),
// 					calendarFiyatlar = arr[9].split(",").filter(x => x != ''),
// 					calendarhaftasonuTarihler = arr[10].split(",").filter(function (c) { return c !== '' }),
// 					calendarhaftasonuFiyatlar = arr[11].split(",").filter(function (c) { return c !== '' }),
// 					calendarFiyatlarDovizIcon = arr[12];
// 				calendarFiyatlarDovizGiris = arr[13];
// 				calendarFiyatlarDovizCikis = arr[14];
// 				activedays = [];
// 				if (arr[7] != "")
// 					activedays = $.parseJSON(arr[7]);
// 				aynilar = [];
// 				$.each(giristarihler, function (indexInArray, valueOfElement) {
// 					if ($.inArray(giristarihler[indexInArray], cikistarihler) > -1)
// 						aynilar.push(giristarihler[indexInArray]);
// 				});

// 				aynilar_dolu_opsiyon = [];
// 				$.each(cikistarihler, function (indexInArray, valueOfElement) {
// 					if ($.inArray(cikistarihler[indexInArray], Rgiristarihler) > -1)
// 						aynilar_dolu_opsiyon.push(cikistarihler[indexInArray]);
// 				});
// 				aynilar_opsiyon_dolu = [];
// 				$.each(Rcikistarihler, function (indexInArray, valueOfElement) {
// 					if ($.inArray(Rcikistarihler[indexInArray], giristarihler) > -1)
// 						aynilar_opsiyon_dolu.push(Rcikistarihler[indexInArray]);
// 				});
// 				$.boceksoft.villasCalendarEvents("#reservationdate1", "#reservationdate2");
// 				if ($("#calendarReservationdate1").length > 0)
// 					$.boceksoft.villasCalendarEvents("#calendarReservationdate1", "#calendarReservationdate2");
// 				if (refreshAjax != 1) {
// 					if ($.urlVeri("q") != "") {
// 						var a = $.urlVeri("q").split("-");
// 						$("#reservationdate1").val(a[0]);
// 						$("#reservationdate2").val(a[1]);
// 						//$("#reservationdate2").trigger("change");
// 					}
// 					$.boceksoft.calendarShow("#calendar", number);
// 					$("#calendar .ui-state-active").removeClass("ui-state-active");
// 					$(document).on("mouseover", "#calendar td", function () {
// 						if (Calendardate1 != undefined || Calendardate2 != undefined) {
// 							if ($("#calendar .ui-state-active").length > 0 && $("#calendar td.dp-highlight").length == 0) {
// 								var activeIndexs = {
// 									td: $("#calendar .ui-state-active").parents("td").index(),
// 									tr: $("#calendar .ui-state-active").parents("tr").index(),
// 									group: $("#calendar .ui-state-active").parents(".ui-datepicker-group").index()
// 								}
// 								var hoverIndexs = {
// 									this: $(this),
// 									td: $(this).index(),
// 									tr: $(this).parents("tr").index(),
// 									group: $(this).parents(".ui-datepicker-group").index()
// 								}
// 								$("#calendar td").each(function () {
// 									var eventIndexs = {
// 										this: $(this),
// 										td: $(this).index(),
// 										tr: $(this).parents("tr").index(),
// 										group: $(this).parents(".ui-datepicker-group").index()
// 									}
// 									if (
// 										(activeIndexs.group < eventIndexs.group || (activeIndexs.group == eventIndexs.group && activeIndexs.tr < eventIndexs.tr) || (activeIndexs.group == eventIndexs.group && activeIndexs.tr == eventIndexs.tr && activeIndexs.td < eventIndexs.td)) &&
// 										(eventIndexs.group < hoverIndexs.group || (eventIndexs.group == hoverIndexs.group && eventIndexs.tr < hoverIndexs.tr) || (eventIndexs.group == hoverIndexs.group && eventIndexs.tr == hoverIndexs.tr && eventIndexs.td < hoverIndexs.td)) &&
// 										(activeIndexs.group < hoverIndexs.group || (activeIndexs.group == hoverIndexs.group && activeIndexs.tr < hoverIndexs.tr) || (activeIndexs.group == hoverIndexs.group && activeIndexs.tr == hoverIndexs.tr && activeIndexs.td < hoverIndexs.td))
// 									) {
// 										if (eventIndexs.this.find("a").length > 0)
// 											eventIndexs.this.addClass("in-range");
// 									}
// 								});
// 								if ($("#calendar td.in-range").length > 0)
// 									hoverIndexs.this.attr("data-night", ($("#calendar td.in-range").length + 1) + " Gece");
// 							}
// 						}
// 					}).on("mousemove", "#calendar td", function (event) {
// 					}).on("mouseout", "#calendar td", function () {
// 						$("#calendar td[data-night]").removeAttr("data-night");
// 						$("#calendar td.in-range").removeClass("in-range");
// 					});
// 					$("#calendarModal .villaCalendar .loading").hide();
// 					$(document).on("mouseover", ".daterangepicker td", function () {
// 						var a = new Date($(this).data("date"));
// 						var gun = parseInt(a.getDate());
// 						var yil = a.getFullYear();
// 						var ay = a.getMonth() + 1;
// 						var actualDate = yil + "-" + ay + "-" + gun;
// 						if (RezervasyonBekleyenler.indexOf(actualDate) >= 0) {
// 							var ArrayIndexControl = parseInt((RezervasyonBekleyenler.indexOf(actualDate)));
// 							var attr = RezervasyonSaatler[ArrayIndexControl];
// 							$(this).attr('data-content', (window.location.pathname.split("/")[1] == "en" ? 'Waiting for Payment (Time remaining ' + attr + ' hours)' : 'Ödeme Bekliyor (Kalan süre ' + attr + ' saat ' + ')'));
// 						}
// 						else if (aynilar.indexOf(actualDate) >= 0 || aynilar_dolu_opsiyon.indexOf(actualDate) >= 0 || aynilar_opsiyon_dolu.indexOf(actualDate) >= 0)
// 							$(this).attr('data-content', (window.location.pathname.split("/")[1] == "en" ? 'Entry / Exit Day' : 'Giriş/Çıkış Günü'));
// 						else if (giristarihler.indexOf(actualDate) >= 0)
// 							$(this).attr('data-content', (window.location.pathname.split("/")[1] == "en" ? 'Entry Date' : 'Giriş Tarihi'));
// 						else if (cikistarihler.indexOf(actualDate) >= 0)
// 							$(this).attr('data-content', (window.location.pathname.split("/")[1] == "en" ? 'Exit Date' : 'Çıkış Tarihi'));
// 						else if (dolutarihler.indexOf(actualDate) >= 0)
// 							$(this).attr('data-content', (window.location.pathname.split("/")[1] == "en" ? 'Not Avaible' : 'Müsait Değil'));
// 						else if (Rgiristarihler.indexOf(actualDate) >= 0)
// 							$(this).attr('data-content', (window.location.pathname.split("/")[1] == "en" ? 'Entry Date' : 'Giriş Tarihi'));
// 						else if (Rcikistarihler.indexOf(actualDate) >= 0)
// 							$(this).attr('data-content', (window.location.pathname.split("/")[1] == "en" ? 'Exit Date' : 'Çıkış Tarihi'));
// 						else
// 							$(this).attr('data-content', (window.location.pathname.split("/")[1] == "en" ? 'Avaible' : 'Müsait'));
// 					});
// 					$(document).on("mouseover", ".ui-datepicker tbody tr td a", function () {
// 						var gun = $(this).html();
// 						var gun = parseInt(gun);
// 						var yil = $(this).parent("td").attr("data-year");
// 						var ay = $(this).parent("td").attr("data-month");
// 						ay = parseInt(ay) + parseInt(1);
// 						var actualDate = yil + "-" + ay + "-" + gun;
// 						if (RezervasyonBekleyenler.indexOf(actualDate) >= 0) {
// 							var ArrayIndexControl = parseInt((RezervasyonBekleyenler.indexOf(actualDate)));
// 							var attr = RezervasyonSaatler[ArrayIndexControl];
// 							$(this).attr('data-content', (window.location.pathname.split("/")[1] == "en" ? 'Waiting for Payment (Time remaining ' + attr + ' hours)' : 'Ödeme Bekliyor (Kalan süre ' + attr + ' saat ' + ')'));
// 						}
// 					});
// 				} else {

// 					$.boceksoft.calendarShow("#calendar", number);
// 				}
// 			}
// 		});
// 	},
// }


// var demo29 = new HotelDatepicker(document.querySelector(".inlineDatePicker"), {
// 	extraDayText: function (date, attributes) {
// 		if (date === fecha.format(testDate, "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
// 			return "$150";
// 		}
// 	},
// });

// var demo29 = new HotelDatepicker(
// 	document.querySelector(".inlineDatePicker"),
// 	{
// 		inline: true,
// 		minNights: 2,
// 		disabledDates: [
// 			'2023-12-09',
// 			'2023-12-05',
// 			'2023-12-08',
// 			'2023-12-10',
// 			'2023-12-13',
// 			'2023-12-23'
// 		]
// 	}
// );

// var testDate = new Date();
// testDate.setDate(testDate.getDate() + 2);

var demo3 = new HotelDatepicker(document.querySelector(".inlineDatePicker"), {
	inline: true,
	extraDayText: function (date, attributes) {
		if (date === fecha.format(new Date("2023-12-4"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
			return "<span>$110</span>";
		}
		if (date === fecha.format(new Date("2023-12-6"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
			return "<span>$110</span>";
		}
		if (date === fecha.format(new Date("2023-12-5"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
			return "<span>$110</span>";
		}
		if (date === fecha.format(new Date("2024-1-2"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
			return "<span>$234</span>";
		}
		if (date === fecha.format(new Date("2024-1-5"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
			return "<span>$150</span>";
		}
		if (date === fecha.format(new Date("2024-1-3"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
			return "<span>$290</span>";
		}
		if (date === fecha.format(new Date("2024-1-4"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
			return "<span>$63</span>";
		}
	}
});
// var demo2 = new HotelDatepicker(
// 	document.querySelector(".dateRange .asideDatePicker"),
// 	{
// 		noCheckInDaysOfWeek: ['Monday', 'Tuesday'],
// 	}
// );
var demo14 = new HotelDatepicker(document.querySelector(".dateRange .asideDatePicker"), {
	// inline: true,
	extraDayText: function (date, attributes) {
		if (date === fecha.format(new Date("2023-12-4"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
			return "<span>$110</span>";
		}
		if (date === fecha.format(new Date("2023-12-6"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
			return "<span>$110</span>";
		}
		if (date === fecha.format(new Date("2023-12-5"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
			return "<span>$110</span>";
		}
		if (date === fecha.format(new Date("2024-1-2"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
			return "<span>$234</span>";
		}
		if (date === fecha.format(new Date("2024-1-5"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
			return "<span>$150</span>";
		}
		if (date === fecha.format(new Date("2024-1-3"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
			return "<span>$290</span>";
		}
		if (date === fecha.format(new Date("2024-1-4"), "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
			return "<span>$63</span>";
		}
	}
});
// var demo23 = new HotelDatepicker(
// 	document.querySelector(".inlineDatePicker"),
// 	{
// 		// inline: true,
// 		// clearButton: true,
// 		// noCheckInDaysOfWeek: ['Monday', 'Tuesday'],
// 		extraDayText: function (date, attributes) {
// 			if (date === fecha.format(testDate, "YYYY-MM-DD") && attributes.class.includes("datepicker__month-day--visibleMonth")) {
// 				return "$150";
// 			}
// 		},

// 	}
// );

Fancybox.bind('.listingGallery a', {
	groupAll: true,
});



