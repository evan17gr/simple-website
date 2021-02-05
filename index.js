const videos = document.querySelectorAll("video");
const spans = Array.from(document.getElementsByClassName("smaller-text"));

videos.forEach(video => {
    video.addEventListener("mouseover",function(){
        this.play();
        
    })
    video.addEventListener("mouseout", function(){
        this.pause();
    })
})



