function makeSlider(SliderName, inId, imgs = [], stylesCss = ''){
    // console.log(imgs);
    let images = '';
    if(imgs.length > 0){
        imgs.forEach(function(items){
                images += `\n <img class="img`+SliderName+`" src="`+items+`" alt="">`;
        });
        document.getElementById(inId).innerHTML = `
        <style id="stylesheet`+ SliderName +`">
            .img`+ SliderName +`:nth-child(1){display: block;}
        </style>
        <style>
            section#slider`+ SliderName +`{
            width: 500px;
            height: 300px;
            border-radius: 20px;
            display: flex;
        }
        .img`+ SliderName +`{
            width: 500px;
            height: 300px;
            display: none;
            // cursor: grab;
        }
        `+stylesCss+`
        </style>
        <section id="slider`+ SliderName +`">
        `+images+`
        </section>
        <input type="button" value="next" id="nextSlider`+SliderName+`">
        <input type="button" value="back" id="BackSlider`+SliderName+`">
        <input type="hidden" value="1" id="sliderResult`+SliderName+`">
        <input type="hidden" value="o" id="sliderResultSet`+SliderName+`">`;
        let nextSlider = document.getElementById('nextSlider'+SliderName);
        let BackSlider = document.getElementById('BackSlider'+SliderName);
        let sliderResult = document.getElementById('sliderResult'+SliderName);
        let styles = document.getElementById('stylesheet'+SliderName);
        let sliderResultSet = document.getElementById('sliderResultSet'+SliderName).value;
        function next() {
            styles.innerHTML = ".img"+SliderName+":nth-child("+sliderResult.value+"){display: block;}";
        }
        nextSlider.onclick = function() {
            if(document.getElementsByClassName('img'+SliderName).length <= sliderResult.value){
                --sliderResult.value;
                next();
            }else{
                ++sliderResult.value;
                next();
            }
        };
        BackSlider.onclick = function() {
            if(sliderResult.value <= 1){
                ++sliderResult.value;
                next();
            }else{
                --sliderResult.value;
                next();
            }
        };
    }
}
