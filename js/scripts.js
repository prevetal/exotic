document.addEventListener('DOMContentLoaded', function () {
	// Карусель животных
	const exoticAnimalsSliders = [],
		exoticAnimals = document.querySelectorAll('.exotic_animals .swiper')

	exoticAnimals.forEach(function (el, i) {
		el.classList.add('exotic_animals_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 2,
					grid: {
						rows: 2
					}
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 3,
					grid: {
						rows: 2
					}
				},
				1280: {
					spaceBetween: 32,
					slidesPerView: 6,
					grid: {
						rows: 1
					}
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.item')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.item')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		exoticAnimalsSliders.push(new Swiper('.exotic_animals_s' + i, options))
	})


	// Карусель докторов
	const exoticDoctorsSliders = [],
		exoticDoctors = document.querySelectorAll('.exotic_doctors .swiper')

	exoticDoctors.forEach(function (el, i) {
		el.classList.add('exotic_doctors_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				1280: {
					spaceBetween: 30,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					setHeight(swiper.el.querySelectorAll('.person'))

					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.photo').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.person')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)

					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.photo').outerHeight() * 0.5
						)
					})
				}
			}
		}

		exoticDoctorsSliders.push(new Swiper('.exotic_doctors_s' + i, options))
	})


	// Возвращаем здоровье вашим любимцам
	const exoticCasesItemSliders = [],
		exoticCasesItem = document.querySelectorAll('.exotic_cases .item .swiper')

	exoticCasesItem.forEach(function (el, i) {
		el.classList.add('exotic_cases_item_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			nested: true,
			spaceBetween: 0,
			slidesPerView: 1
		}

		exoticCasesItemSliders.push(new Swiper('.exotic_cases_item_s' + i, options))
	})


	const exoticCasesSliders = [],
		exoticCases = document.querySelectorAll('.exotic_cases .swiper.main_swiper')

	exoticCases.forEach(function (el, i) {
		el.classList.add('exotic_cases_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 40,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		exoticCasesSliders.push(new Swiper('.exotic_cases_s' + i, options))
	})


	// Возвращаем здоровье вашим любимцам
	const exoticGallerySliders = [],
		exoticGallery = document.querySelectorAll('.exotic_gallery .swiper')

	exoticGallery.forEach(function (el, i) {
		el.classList.add('exotic_gallery_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 40,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.item').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.item').outerHeight() * 0.5
						)
					})
				}
			}
		}

		exoticGallerySliders.push(new Swiper('.exotic_gallery_s' + i, options))
	})


	$('.exotic_cases .item .spoler_btn').click(function(e) {
		e.preventDefault()

		let item = $(this).closest('.item')

		$(this).toggleClass('active')

		item.find('.text').toggleClass('hide')
	})


	// Услуги и цены
	$('.exotic_prices .spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$('.exotic_prices .table_wrap').toggleClass('hide')
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}


	// Увеличение картинки
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})
})



// Вспомогательные функции
const setHeight = items => {
	let maxheight = 0

	items.forEach(el => {
		if (el.offsetHeight > maxheight) maxheight = el.offsetHeight
	})

	items.forEach(el => el.style.height = maxheight + 'px')
}