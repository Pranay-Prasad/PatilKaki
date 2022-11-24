const newStringofNums = "1,3,545,6767,8,9-9,9994_33$$33,33!334";
var sum = 0;
for(let i = 0; i < newStringofNums.length;i++){
    var c = newStringofNums.charAt(i);
    var asci_val = c.charCodeAt(0);
    if(asci_val >= 48 && asci_val <= 57){
        sum = sum + (c - '0');
    }
}
console.log(sum);