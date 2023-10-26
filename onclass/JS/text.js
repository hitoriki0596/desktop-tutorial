// var i = 0;
// var iX = setInterval(function(){
//     if(i > 99){
//         i = 0;
//        clearInterval(iX);
//     }else{
//         if (i % 2 == 0) {
//             console.log(i * 2);
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
// },10)
let timer = 0;
let intervalId;

function startTimer() {
  intervalId = setInterval(() => {
    timer++;
    console.log(timer);
  }, 1000);
}

// function stopTimer() {
   
//   clearInterval(intervalId);
// }

startTimer();
// setTimeout(stopTimer, 5000);
