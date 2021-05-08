let sentenceOrder = [
    "<p class='short' id='caps'>HAPPY MOTHER'S DAY!!! &#128525&#128519&#128523</p>",
    "<p class='short'>I love you</p>",
    "<p id='long'>I cherish each moment I spend with you. Once again... Thank you for supporting me <br> " +
    "with everything I do. Whether I fail or succeed you're always at my side; sitting with me listening <br>" + 
    "while I try to explain some thing that's completely confusing to you and you still sit and listen to me.<br>" + 
    "This means a lot to me and always will. You're such a great mother and a beuatiful soul.<br>" + 
    "Thanks for being my mum ❤️</p>"
]
let index = 0;
let interval = 1500;
$(document).ready(function(){
    $("#wrapper").html(sentenceOrder[0]);
    setInterval(() => {
        $("#wrapper").html(sentenceOrder[index]);
        index++;
        if (index >= sentenceOrder.length - 1){
            interval = 30000;
            let timeout = interval;
            setTimeout(() => {
                index = 0;
            }, timeout);
        }else{
            interval = 1500;
        }

    }, interval);
})