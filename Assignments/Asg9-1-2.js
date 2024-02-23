// Question 1 -  Visit any page on the browser, and replace the content of all the p tags with the phrase “How’s the Josh?” using Javascript
let paras = document.querySelectorAll('p');
paras.forEach(para => {
    para.textContent = "How's the Josh?";
});
//Logic - querySelectorAll selects all p elements on site and store in paras. foreach loops over each <p> represented by para variable. .textContent is used to change the content inside it i.r How's the josh

// Implemented on - https://best.aliexpress.com/?af=amp1250&dp=1708681972300600000&mfadid=adm&aff_fcid=051a46f82d4b493494fbeaadda4bcb00-1708684610447-02125-byrlillA&aff_fsk=byrlillA&aff_platform=link-c-tool&sk=byrlillA&aff_trace_key=051a46f82d4b493494fbeaadda4bcb00-1708684610447-02125-byrlillA&terminal_id=f905224c80b9427ba1c64e3389c3f1fd&afSmartRedirect=y
//sample of output - How's the Josh?


//Question 2 - Go to youtube. Open any video. Add a button to the page using JS. On click of the button, the video playback speed should change to 10x
let speedBtn = document.createElement('button');
speedBtn.innerText='10x Speed';
document.getElementsByClassName('ytp-chrome-controls')[0].appendChild(speedBtn);
speedBtn.addEventListener('click',function() {
    let video = document.getElementsByClassName('html5-main-video')[0];
    if(video) {
        video.playbackRate=10;  //10x
    }
})

// Logic - createElement creates new button. appendChild appends the newly created button to class (in youtube videos below shown options bar). addEventListener listens click event - executes when clicked.  let video = document.getElementsByClassName('html5-main-video')[0]; gets the video element on page using its class name. if found playbackRate is set to 10. s
//https://www.youtube.com/watch?v=zYvZVMyv9Z8&list=RDzYvZVMyv9Z8&start_radio=1