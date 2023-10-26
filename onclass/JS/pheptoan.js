// function btnAlert(){
//     var inpName = document.getElementById('inpName');
//     var inpFirstName = document.getElementById('inpFirstName');
//     alert("Hello: " + inpName.value + inpFirstName.value);
// }

// function changeInput(){
//     var inpName = document.getElementById('inpName');
//     console.log("HEER: " + inpName.value);
// }

// function btnPhepToan(pt){
//     console.log(pt);
//     var iA = document.getElementById('inpA');
//     var iB = document.getElementById('inpB');
//     var kq = document.getElementById('kq');
//     var a = parseInt(iA.value);
//     var b = parseInt(iB.value);
//     // var c = parseInt(iC.value);
//     if (pt == 1){
//         kq.innerHTML = a + b
//         return;
//     }
//     if (pt == 2){
//         kq.innerHTML = a - b
//         return;
//     }
//     if (pt == 3){
//         kq.innerHTML = a * b
//         return;
//     }
//     if (pt == 4){
//         kq.innerHTML = a / b
//         return;
//     }

// }
function giaitoan(){
        var iA = document.getElementById('inpA');
        var iB = document.getElementById('inpB');
        var iC = document.getElementById('inpC');
        var kq = document.getElementById('kq');
            var a = parseInt(iA.value);
            var b = parseInt(iB.value);
            var c = parseInt(iC.value);
            var ret = "" ;
            if(a == 0) {
              if (b == 0){
                ret = "phương trình vô nghiệm";
              } else {
                    ret = -c / b;

              }
            } else {
              var delta = b*b - 4*a*c;
              if (delta < 0){
                ret = "phương trình vô nghiệm";
              }
              if (delta == 0){
                ret = "phương trình có nghiệm kép:x1 = x2 =" + (-b / (2 * a ));
              }
              if (delta > 0){
                ret = "phương trình có 2 nghiệm";
                var x1 = ((-b + Math.sqrt(delta)) / (2*a));
                var x2 = ((-b - Math.sqrt(delta)) / (2*a));
                ret = "phương trình có 2 nghiệm X1 = " + x1 + " ; X2 = " + x2;  
}
            }
          }
kq.innerHTML = ret
