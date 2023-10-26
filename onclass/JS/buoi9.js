// function add(x,y,cb){
// cb();
// return x + y;
// }


// function add2(){
//     console.log("ADD");

// }
// c = add(9,8, add2);

function oneseconds(){

    console.log("1secondlater");

}

    console.log("2secondlater")  

var i = 0;
var iX = setInterval(function(){
    if(i > 10){
        i = 0;
        clearTimeout(tX);
    }else{
    console.log(i++);
    }
},1000)
    var tX = setTimeout(function(){
        console.log("time out")
        clearInterval(iX);
        clearTimeout(tY);
    }, 1*1000)
    var tY = setTimeout(function(){
        console.log("time out 2");
        clearInterval(iX);
    })
    clearTimeout(tX);
