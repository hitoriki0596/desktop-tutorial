/**function monhoc(toan,van,anh) {
    let result ;
    if (toan > 9) result = 'Loai A' ;
    else if (toan >= 7) result = 'Loai B' ;
    else if (toan >= 5) result = 'Loai C' ;
    else result = 'Loai F' ;
    return result ;
}
console.log(monhoc(9.5)); */
function diemso(x,y,z) {
    var tb = trungbinh3mon (x,y,z) ;
    if ( tb > 9) {
        return "Loại A" ;
    } else {
        if ( tb > 7){
            return "Loại B" ;
        } else {
            if ( tb >= 5){
                return "Loại C" ;
            } else {
                return "Loại F"

            }
        }
    } 
}
        
       
