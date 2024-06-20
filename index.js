const slider = document.querySelectorAll(".carousel");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

let currentSlider= 0;
let maxSlide = slider.length - 1;

slider.forEach(
    (image,index)=> (image.style.transform=`translateX(${index*100}%)`)
);

function nextButtonClickHandler(){
    if(currentSlider===maxSlide){
        currentSlider=0;
    }
    else{
        currentSlider++;
    }
    slider.forEach((image,index)=> image.style.transform = `translateX(${(index - currentSlider)*100}%)`)

}
function prevButtonClickHandler(){
    if(currentSlider===0){
        currentSlider=maxSlide;
    }
    else{
        currentSlider--;
    }
    slider.forEach((image,index)=> image.style.transform = `translateX(${(index - currentSlider)*100}%)`)
}
nextBtn.addEventListener("click",nextButtonClickHandler);
prevBtn.addEventListener("click",prevButtonClickHandler);
