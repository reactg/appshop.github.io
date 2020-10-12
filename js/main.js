function burgerMenu(selector){
    let menu = $(selector);
    let button = menu.find('.burger-menu__button');
    let links = menu.find('.burger-menu__link');
    let overlay = menu.find('.burger-menu__overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    })
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu(){
        menu.toggleClass('burger-menu_active');

        if(menu.hasClass('burger-menu_active')){
            $('body').css('overflow','hidden');
        } else{
            $('body').css('overflow', 'visible');
        }
    }

    $('.burger-menu__button').on('click', function(){
        $('.burger-menu__nav').toggleClass('_active');
    })

    let menuParents = document.querySelectorAll('.menu-page__parent');

    for(let i = 0; i<menuParents.length; i++){
        let menuParent = menuParents[i];
        menuParent.addEventListener('mouseenter', function(e){
            menuParent.classList.add('_active');
        })
        menuParent.addEventListener('mouseleave', function(e){
            menuParent.classList.remove('_active');
        })
    }

    let subMenuLink = document.querySelectorAll('.submenu-page__item');
    
    for(let i = 0; i<subMenuLink.length; i++){
        let subMenu = subMenuLink[i];
        subMenu.addEventListener('click', function(e){
            for (let i = 0; i<menuParents.length; i++){
                let menuParent = menuParents[i];
                menuParent.classList.remove('_active');
            }  
        });
    }

    let menuPageBurger = document.querySelector('.menu-page__burger');
    let menuPageBody = document.querySelector('.menu-page__body');

    menuPageBurger.addEventListener('click', function(e){
        menuPageBurger.classList.toggle('_active');
        menuPageBody.classList.toggle('_active');
    })

    let categoriesSearchTitle = document.querySelector('.search-page__title');
    let categoriesSearchTitleAfter = document.querySelector('.search-page__title');
    let categoriesSearch = document.querySelector('.categories-search');

    categoriesSearchTitle.addEventListener('click', function(e){
        categoriesSearchTitleAfter.classList.toggle('_active');
        categoriesSearch.classList.toggle('_active');
    })
    categoriesSearch.addEventListener('mouseleave', function(e){
        categoriesSearchTitleAfter.classList.toggle('_active');
        categoriesSearch.classList.toggle('_active');
    })
    
    let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');

    for(let i = 0; i<checkboxCategories.length; i++){
        let checkboxIndex = checkboxCategories[i];

        checkboxIndex.addEventListener('change', function(e){
            checkboxIndex.classList.toggle('_active');

            let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');

            if(checkboxActiveCategories.length > 0){
                categoriesSearchTitle.classList.add('_categories');
                let searchQuantity = categoriesSearchTitle.querySelector('.search-page__quantity');
                searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + checkboxActiveCategories.length;
            }else{
                categoriesSearchTitle.classList.remove('_categories');
            }
        })
    }
    
    $('.slider').slick({
        fade: true,
        dots:true,
        cssEase: 'linear',
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        prevArrow: "<img class='slider-arrows slider-arrows__left' src='images/arrow-left.svg' alt=''></img>",
        nextArrow: "<img class='slider-arrows slider-arrows__right' src='images/arrow-right.svg' alt=''></img>",
    });
   
    $('.slider-product').slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        rows: 2,
        adaptiveHeight: true,
        prevArrow: "<img class='slider-arrows slider-arrows__left' src='images/Arrow_slider.svg' alt=''></img>",
        nextArrow: "<img class='slider-arrows slider-arrows__right' src='images/Arrow_slider.svg' alt=''></img>",
        responsive: [
            {
                breakpoint: 645,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    rows: 1,
                    slidesPerRow: 3,
                }
            
            },
        ]
    });

    $('.slider-logo').slick({
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        touchMove: false,
        draggable: false,
        swipe:false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;
        let pageArrow = document.querySelector('.footer-logo__arrow_top');
        if(scrollDistance >= 500){
            pageArrow.classList.add('_active');
        }else{
            pageArrow.classList.remove('_active');
        }
    })

    $('a[href^="#"]').click(function(){
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 2000);
    });
}

burgerMenu('.burger-menu');