var str = './uid=li&word=12/da=15&cc=25';
    var str1=str.substring(2);
    //
    var arr=str1.split('&');
    //console.log(arr);
    var str2=arr.join('/');
    //console.log(str2);
    var arr2=str2.split("/");
    var json={};
    //console.log(arr);
    for(var i=0;i<arr2.length;i++){
        json[arr2[i].split('=')[0]] = arr2[i].split('=')[1]
    }
    console.log(json);