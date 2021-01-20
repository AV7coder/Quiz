const name = prompt("Please Enter your name:")
const age  = prompt("Please enter your age:")
const grade = prompt("Please Enter your class:")
var ans1 = Math.PI;
var ans2 = 1234567890 * 1234567890;

var ans3 = "1 - (-1) = 2";
var ans4 = "64 sq. cm";
var ans5 = "A square is a reactangle."
var score = 0;
function correct(q_no){
  score += 1 ;
  var q_number = document.getElementById(q_no).innerHTML="";
}
function wrong(q_no){
  score -= 1;
    var q_number = document.getElementById(q_no).innerHTML=""
}
function submit(){
  var qp = document.getElementById("qp").innerHTML="";
  var submit_btn = document.getElementById("submit-btn").innerHTML="";
  var reslut_screen = document.getElementById("result").innerHTML="<h1>Your Response was submitted.<br> Name:"+name+"<br>Age:"+age+"<br>Class:"+grade+"<br>Result:"+score+"/5"+"<br>Percentage:"+score/5*100;

}
