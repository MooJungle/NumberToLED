tar=910;
var arr=["1111110","0110000","1101101","1111001","0110011","1011011","1011111","1110000","1111111","1110011"];
var target = tar.toString().split('');
console.log(target);
for(let i=0;i<target.length;i++){
    num = arr[target[i]];
    console.log(target[i]);
    console.log(arr[target[i]]);
    var numArr=num.toString().split('');
    console.log(numArr)
    str0=Number(numArr[0])?"_":".";
    str5=Number(numArr[5])?"|":".";
    str6=Number(numArr[6])?"_":".";
    str1=Number(numArr[1])?"|":".";
    str4=Number(numArr[4])?"|":".";
    str3=Number(numArr[3])?"_":".";
    str2=Number(numArr[2])?"|":".";
    console.log("."+ str0 + "."+"\n"+str5+str6+str1+"\n" +str4+str3+str2);

}