function convert() {
    const vnd = document.getElementById("vnd").value;
    const rate = 23000;  
    const usd = vnd / rate;
    document.getElementById("usd").innerText = usd; 
  }
  function convert2() {
    const dollar = document.getElementById("dollar").value;
    const rate = 1;  
    const VNĐ = dollar / rate;
    document.getElementById("VNĐ").innerText = VNĐ; 
  }