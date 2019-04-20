var ary = [1,2,3,4];
function fn()
{
    ary[0] = 0; //重新赋值 此时的ary为 [0,2,3,4]
    ary = [0];  //此时 ary重新指向了一个数组 [0]
    ary[0] = 100;  //给新数组第一位赋值 100
    return ary;
}

var res = fn(ary);
console.log(ary);
console.log(res);