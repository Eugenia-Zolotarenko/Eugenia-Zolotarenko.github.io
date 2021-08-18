{
    $(function () {
        'use strict';

        $.fn.slider = function (options) {

            let settings = $.extend(true, $.fn.slider.defaultOptions, options);

            let $carousel = $('.carousel');
            let $hider =  $('.carousel__hider');
            let $elementsList = $('.carousel__list');
            let $carouselElement= $elementsList.find('.carousel__element');

            let elementsCount = $carouselElement.length;

            if ( settings.imagesVisible >= (elementsCount ) ) settings.imagesVisible = (elementsCount - 1);


            function hiderWidth ( opt ) {

                let carouselVisibleLength = (opt.imageWidth + opt.imageMarginRight) * opt.imagesVisible - opt.imageMarginRight;

                if (carouselVisibleLength > $hider.width() ) {

                    let visibleQuantity = Math.floor( $hider.width() / (opt.imageWidth + opt.imageMarginRight)) || 1;

                    return (opt.imageWidth + opt.imageMarginRight) * visibleQuantity - opt.imageMarginRight;

                } else return carouselVisibleLength;

            }


            $hider.width( hiderWidth(settings) );


            //Apply settings' css properties to elements
            $carouselElement.css({
                'margin-right' : settings.imageMarginRight + 'px'
            });

            $carouselElement.children().css( {
                'max-width': settings.imageWidth + 'px'
            });


            //Calculate position-delta for slider to be scrolled
            let pixelsOffset = settings.imageWidth + settings.imageMarginRight;
            let currentLeftValue = 0;

            //Calculate min and max position to prevent scrolling after items end or before items start
            let minimumOffset = -((elementsCount - settings.imagesVisible) * pixelsOffset);
            let maximumOffset = 0;


            $carousel.on('click.slider', '.carousel__arrow_left', null, function () {
                if (currentLeftValue !== maximumOffset) {
                    currentLeftValue += pixelsOffset;
                    $elementsList.animate({left: currentLeftValue + "px"}, 500);
                }
            })
                .on('click.slider', '.carousel__arrow_right', null, function () {
                    if (currentLeftValue !== minimumOffset) {
                        currentLeftValue -= pixelsOffset;
                        $elementsList.animate({left: currentLeftValue + "px"}, 500);
                    }
                });

            return this;
        }

        $.fn.slider.defaultOptions = {
            imageWidth: 250,
            imageMarginRight: 25,
            imagesVisible: 4
        };

    });
}