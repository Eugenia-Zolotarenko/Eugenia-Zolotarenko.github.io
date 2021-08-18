HTML for slider

<div class="carousel">

    <div class="carousel__arrow carousel__arrow_left"><span>Влево</span></div>

    <div class="carousel__hider">

        <ul class="carousel__list">

            <li class="carousel__element">
                <img class="carousel__image" src="image1.jpg" alt="">
                <p>Описание 1</p>
            </li>

            <li class="carousel__element">
                <img class="carousel__image" src="image2.jpg" alt="">
                <p>Описание 2</p>
            </li>

            <li class="carousel__element">
                <img class="carousel__image" src="image3.jpg" alt="">
                <p>Описание 3</p>
            </li>

            <li class="carousel__element">
                <img class="carousel__image" src="image4.jpg" alt="">
                <p>Описание 4</p>
            </li>

        </ul>

     </div>

     <div class="carousel__arrow carousel__arrow_right"><span>Вправо</span></div>

</div>


Options:

imageWidth - image width in pixels
imageMarginRight - margin-right property for image in pixels
imagesVisible - quantity of images to to be visible

 options = {
            imageWidth: 250,
            imageMarginRight: 25,
            imagesVisible: 4
        };

You can change default options if you need:

 $.fn.slider.defaultOptions = {
            imageWidth: 250,
            imageMarginRight: 25,
            imagesVisible: 4
        };


Initialization:

    $(function () {
        $('div.carousel').slider();
    });

Initialization with options:

  $('div.carousel').slider({
        imageWidth: 100,
        imageMarginRight: 20
    });