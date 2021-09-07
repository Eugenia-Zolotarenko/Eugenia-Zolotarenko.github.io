{
    $(function () {
        'use strict';
        let methods = {

            init : function( options ) {

                let settings = $.extend(true, $.fn.slider.defaultOptions, options);
                let $carousel = this;
                let $hider =  $('.carousel__hider');
                let $elementsList = $('.carousel__list');
                let $carouselElement= $elementsList.find('.carousel__element');
                let elementsCount = $carouselElement.length;

                if ( settings.imagesVisible >= (elementsCount ) ) settings.imagesVisible = (elementsCount - 1);


                function calculateHiderWidth ( opt ) {

                    let carouselVisibleLength = (opt.imageWidth + opt.imageMarginRight) * opt.imagesVisible - opt.imageMarginRight;

                    if (carouselVisibleLength > $hider.width() ) {

                        let visibleQuantity = Math.floor( $hider.width() / (opt.imageWidth + opt.imageMarginRight)) || 1;

                        return (opt.imageWidth + opt.imageMarginRight) * visibleQuantity - opt.imageMarginRight;

                    } else return carouselVisibleLength;

                }


                $hider.width( calculateHiderWidth(settings) );


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


                function clickLeftHandler () {
                    if (currentLeftValue !== maximumOffset) {
                        currentLeftValue += pixelsOffset;
                        $elementsList.animate({left: currentLeftValue + "px"}, 500);
                    }
                }

                function clickRightHandler () {
                    if (currentLeftValue !== minimumOffset) {
                        currentLeftValue -= pixelsOffset;
                        $elementsList.animate({left: currentLeftValue + "px"}, 500);
                    }
                }

                $carousel.on('click.slider', '.carousel__arrow_left',  null, clickLeftHandler)
                         .on('click.slider', '.carousel__arrow_right', null, clickRightHandler);

                return this;
            },

            destroy : function( ) {

                let $carousel = this;
                $carousel.off('.slider');

                return this;
            }
        };


        $.fn.slider = function (method ) {
            if ( methods[method] ) {
                return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
            } else if ( typeof method === 'object' || ! method ) {
                return methods.init.apply( this, arguments );
            } else {
                $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
            }
        };

        $.fn.slider.defaultOptions = {
            imageWidth: 200,
            imageMarginRight: 20,
            imagesVisible: 4
        };

    });
}