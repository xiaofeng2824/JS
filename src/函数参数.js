/**
 * 在ES6中 新语法规范找那个可以直接给形参设置默认值
 *
 */
function fn( x = 0) {
//如果X没有默认值，默认值是零，一旦传递值，不管传递的是啥，都是按照传递的值处理的
    console.log(x);

}
fn();  //=> 0
fn(null);  //=>null
fn(undefined); //=>传递undefined，浏览器也是按照没有传递值处理的
