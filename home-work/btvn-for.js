// bài 1
//  let n = 'nnnnnnnnnn';
//  console.log (n);
   
 // bài 2
 /** 
 for (var i = 1; i <= 100 ; i++) {
    console.log (i);
 }; */
 // bài 3
 /** 
 for (var i = 100 ; i > 0 ; i--) {
    console.log (i);
 }; */
 // bài 4
    // cách 1
    // for (var i = 0 ; i <= 100 ; i = i + 3) {
    
    //     console.log (i);
    // }
    // cách 2
//     for (var i = 0 ; i <= 100 ; i++) {
//         if (i % 3 == 0) {
//             console.log(i);
//     }
// };
// bài 5
// cách 1
// for (var i = 99; i > 0 ; i--) {
//         if (i % 7 == 0){
//             console.log (i);
//         };
//     };
// cách 2
//  for (var i = 0 ; i <= 100 ; i = i + 7) {
//     console.log(i)
// };
// bài 6 
/**var a = 0;
    for (var i = 1 ; i <= 5000 ; i++) {
        a = a + i;
    }
    console.log(a); */
// bài 7

    // var a = 0 ;
    // for (var i = 5001; i <= 10000; i++) {
    //     a += i;
    // };
    // console.log(a);
// bài 8

// var a = 0;
//   for (var i = 5; i <= 5*30; i = i + 5){
//     a += i;
//   }
//   console.log (a);
// bài 9

// function Number(n){
//   var a = 1
//   for (var i = 2; i <= n; i++) {
//     console.log({i});
//     a = a * i;
//   }
//   return a;
// }   
// console.log(Number(0));
// bài 10
// function chialaydu(n, m) {
//    var    ret = 0;
//     for ( var j = 0 ; j <= n ; j = j + m) {
//         ret = n - j;
//     }
//         return ret;
// }
// module.exports.chialaydu = chialaydu;
//     function songuyento(n){
//         var songuyento = false;

//         for(var i = 2; i < n; i++) {
//             if (n % i == 0) {
//                 songuyento = true;
//     }
// }
//     if (songuyento){
//         console.log ("khong la so nguyen to")
//     } else {
//         console.log ("la so nguyen to")
//     }
// }
//     console.log(songuyento(5));

// bài 11
// function fibo(n){
//     if(n == 1){
//         console.log("1");
//         return;
//     } else {

//     }

//     if(n == 2){
//         console.log("1");
//         console.log("1");
//         return;
//     } else {

//     }

//     // 3
//     var f1 = 1;
//     var f2 = 1;
//     var fn = 0;
//     console.log(f1);
//     console.log(f2);
//     for(i = 3; i <= n; i++){
//         fn = f1 + f2;
//         console.log(fn);
//         //
//         f1 = f2;
//         f2 = fn;
//     }

// }

// fibo(10);
// bài 12
// function songuyento(n) {
//     if (n <= 1) {
//       return false;
//     }
//     if (n == 2) {
//       return true;
//     }
//     for (let i = 2; i * i <= n; i++) {
//       if (n % i == 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   function songuyentotu1den2000() {
//            for (let i = 1; i <= 2000; i++) {
//                let result = songuyento(i);
//                 if (result) {
//         console.log(i);
//       }
//     }
//   }
//   songuyentotu1den2000();
// bài 13
