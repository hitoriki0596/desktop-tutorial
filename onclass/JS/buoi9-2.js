
// for (var i = 0; i < 100; i++) {
//   var ix = setTimeout(() => {
//         console.log(i);
//     }, i * 100);
// }
var i = 0;
var iX = setInterval(function(){
    if(i > 99){
        i = 0;
        clearInterval(iX)
    }else{
    console.log(i++);
    }
},100)


