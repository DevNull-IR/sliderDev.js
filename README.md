# sliderDev.js
example slider in vanilla js

# use

```js
makeSlider('sliderName', 'sliderMap', ['urls images'], '.yourcss{yourcssCode}');
```
```html
<section id="slider">
  
</section>

<script src="./src/slider.js"></script>
<script>
  makeSlider('Myslider', 'slider', ['https://devnull-ali.ir/assets/img/portfolio/safe.png'], '.imgMyslider{margin: 2px;}');
</script>
```
arg one: sliderName
arg tow: id section top
arg there: Enter the link of the images as an array
arg foor: If you want a custom style, enter your css code here
arg foor description: You must use the \[name\] img class to access the photos. Enter the name used in the slider instead of \[name\]
