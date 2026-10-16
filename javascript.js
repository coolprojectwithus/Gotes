// //session 27 be bad!


var numberinput = document.getElementById("numinput")
var checkclick = document.getElementById("click")
var images = document.getElementById("guys")

checkclick.onclick = function(){
if (numberinput.value >= 100 && numberinput.value <= 199) {
    images.src = 'images/ots.jpg'
}
else if(numberinput.value >= 200 && numberinput.value <=299 ) {
    images.src = "images/jwd.png"
}

else if (numberinput.value >= 300 && numberinput.value <= 399){
    images.src = 'images/rsm.png'
}

else if (numberinput.value >=400 && numberinput.value <= 499){
    images.src = "images/abb.jpg"
}

else if (numberinput.value >= 50 && numberinput.value <=599){
    images.src = 'images/gng.jpg'
}

else if (numberinput.value >= 600 && numberinput.value <= 699){
    images.src = "images/mzh.jpg"
}

else if (numberinput.value >= 700 && numberinput.value <= 799){
    images.src = "images/kha.jpg"
}

else {
    images.src = "images/jagh.jpg"
}
}














// var point = 17;
// if (point <10){
//     console.log("so bad")
// } 
// else if (point < 15 ){
//     console.log("not bad")
// }
// else if (point <20){
//     console.log("great")
// }
// else {
//     console.log("khybu")
// }















// var a = document.getElementById("age")
// var b = document.getElementById("tap")
// var c = document.getElementById("paragraph")

// b.onclick = function (){
//     if(a.value %2 == 0 ){
//         c.innerText = 'zoj';
//         // document.getElementById("paragraph").innerHTML = 'Zoj';
//     }
//     else {
//         c.innerText = 'fard';
//     //    document.getElementById("paragraph").innerHTML = 'fard';
//     }
// }


// var number = 0;
// if (number %2 == 0 ){
//     window.alert("Zoj")
// }
// else{
//     window.alert("Fard")
// }