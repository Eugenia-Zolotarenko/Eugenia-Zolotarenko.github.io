# jQuery Slider: A styleable carousel


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


## Usage

Link to the JS file:

```html
<script src="jquery.slider.js" type="text/javascript"></script>
```

Add the CSS file (or append contents to your own stylesheet):

```html
<link href="jquery.slider.css" rel="stylesheet" type="text/css" />
```



Initialization:

    $(function () {
        $('div.carousel').slider();
    });

Initialization with custom options:

  $('div.carousel').slider({
        imageWidth: 100,
        imageMarginRight: 20
    });

Options:

  imageWidth - image width in pixels
  imageMarginRight - margin-right property for image in pixels
  imagesVisible - quantity of images to to be visible

   options = {
              imageWidth: 250,
              imageMarginRight: 25,
              imagesVisible: 4
          };

  You can change default options if you need to:

   $.fn.slider.defaultOptions = {
              imageWidth: 250,
              imageMarginRight: 25,
              imagesVisible: 4
          };