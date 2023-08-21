function decimalToBinary(num) {
  //Write you code here
	 let s = "";
    while (num > 0) {
        if (num % 2 !== 0)
			s += "1";
        else s += "0";
         num = Math.floor(num / 2);
    }

    return s.split("").reverse().join(""); 


  
}

window.decimalToBinary = decimalToBinary;
