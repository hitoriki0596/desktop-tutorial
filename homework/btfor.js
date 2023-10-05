                                                // bài 1
// var a = "aaaaaaaaaa"
// console.log(a)
                                                // bài 2
// function bt2(){
//     for( var a = 1; a <=100; a++){
//         console.log(a)
//     }

// }
// bt2();
                                                // bài 3
// function bt3(){
//     for (var a = 100 ; a > 0; a--){
//         console.log(a);
//     }
// }
// bt3();
                                                // bài 4
// function bt4(){
//     for(var a = 0; a <=100; a = a + 3){
//         console.log(a)
//     }
// }
// bt4();
                                                // bài 5

        // cách 1
// function bt5(){
// for (var i = 99; i > 0 ; i--) {
//         if (i % 7 == 0){
//             console.log (i);
//         }
//     }
// }
                                                // bài 6
// function bt6(){
//     var a = 0;
//     for(var i = 0 ; i <= 5000; i++){
//         a = a + i
//     }
//     console.log(a);
// }
// bt6();
                                                // bài 7
// function bt7(){
//     var a = 0 ;
//     for (var i = 5000; i <= 10000; i++){
//         a = a + i
//     }
//     console.log(a)
// }
// bt7();
                                                // bài 8
// function bt8(){
//     var a = 0;
//     for(var i = 0; i <= 5*30; i += 5 ){
//         a += i
//     }
//     console.log(a)
// }
// bt8();
                                                // bài 9
//  function bt9(x){
//     var a = 1
//     for(var i = 2; i <= x; i++){
//         console.log(i);
//         a = a * i
//     }
//     return a;
//  }                                 
// console.log(bt9(0));
                                                // bài 10
                    //CÁCH 1                
 // function bt10(n){
//     var songuyento = false;
//     for(var i = 2; i < n; i++){
//         if (n % i == 0){
//             songuyento = true;
//         }
//     }
//     if (songuyento){
//         console.log("không phải là số nguyên tố")
//     }else{
//         console.log("là số nguyên tố")
//     }
// }
// console.log(bt10(5))
                        //CÁCH 2
                        // function chialaydu(n, m) {
                        //     var ret = 0;
                        //     for (var j = 0; j <= n; j = j + m) {
                        //         ret = n - j;
                        //     }
                        //     return ret;
                        // }
                        // function bai_tap_10(n){
                        //     var ret = "là số nguyên tố";

                        //     for(var i = 2; i < n; i++){
                        //         if(chialaydu(n, i) == 0){
                        //             ret = "không là số nguyên tố";
                        //         }
                        //     }
                        
                        //     return ret;
                        // }
                        // console.log(bai_tap_10(5))
                                                // bài 11
// function bai11(x){
//     if (x == 1){
//         console.log("1");
//         return;
//     }else{

//     }
//     if (x == 2){
//         console.log("1");
//         console.log("1");
//         return;
//     }else{

//     }
//     var f1 = 1;
//     var f2 = 1;
//     var fn = 0;
//     console.log(f1);
//     console.log(f2);
//     for(var i = 3; i <= x; i++){
//         fn = f1 + f2;
//         console.log(fn);
//         f1 = f2;
//         f2 = fn;

//     }

// }
// bai11(10);
