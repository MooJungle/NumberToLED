module.exports = function main(tar) {
    var arr=["1111110","0110000","1101101","1111001","0110011","1011011","1011111","1110000","1111111","1110011"];
    var target = tar.toString().split('');
    var strArray =["","",""];
      for(let i=0;i<target.length;i++){
        var num = arr[target[i]];
        var numArr=num.toString().split('');
        var str0=Number(numArr[0])?"_":".";
        var str5=Number(numArr[5])?"|":".";
        var str6=Number(numArr[6])?"_":".";
        var str1=Number(numArr[1])?"|":".";
        var str4=Number(numArr[4])?"|":".";
        var str3=Number(numArr[3])?"_":".";
        var str2=Number(numArr[2])?"|":".";
        strArray[0] +="."+str0+"."+"  ";
        strArray[1] +=str5+str6+str1+"  ";
        strArray[2] +=str4+str3+str2+"  ";
        

    }
    console.log("’")
    for(let i=0;i<3;i++){ 

            console.log(strArray[i]);
            
    }
    console.log(strArray);
    console.log("’.")


};