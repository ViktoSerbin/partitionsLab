// import { Swiper, Parallax, Controller, Pagination, } from 'swiper';
// Swiper.use([Parallax, Controller, Pagination, ]);

document.addEventListener("DOMContentLoaded", () => {

    //Tabs
    let tabs = document.querySelectorAll("._tabs");
    for (let index = 0; index < tabs.length; index++) {
        let tab = tabs[index];
        let tabs_items = tab.querySelectorAll("._tabs-item");
        let tabs_blocks = tab.querySelectorAll("._tabs-block");
        for (let index = 0; index < tabs_items.length; index++) {
            let tabs_item = tabs_items[index];
            tabs_item.addEventListener("click", function (e) {
                for (let index = 0; index < tabs_items.length; index++) {
                    let tabs_item = tabs_items[index];
                    tabs_item.classList.remove("_active");
                    tabs_blocks[index].classList.remove("_active");
                }
                tabs_item.classList.add("_active");
                tabs_blocks[index].classList.add("_active");
                e.preventDefault();
            });
        }
    }

    //Swiper
    const swiperDot = new Swiper('.idea-slider__dots', {
      slidesPerView: 5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
	});

	const swiperText = new Swiper('.idea-slider__text', {
		loop: true,
		speed: 2400,
        slidesPerView: 1,
		// pagination: {
		// 	el: '.idea-slider__dots',
		// 	clickable: true,
		// },
		// navigation: {
		// 	nextEl: '.idea-slider__text .swiper-button-next',
		// 	prevEl: '.idea-slider__text .swiper-button-prev',
		// },
        thumbs: {
            swiper: swiperDot,
          },
	});

	// swiperIMG.controller.control = swiperText;
	// swiperText.controller.control = swiperIMG;

});
