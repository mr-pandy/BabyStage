// Slick Slider Configuration
$(document).ready(function () {
  // Homepage Sliders
  $('.home-sliders').slick({
    autoplaySpeed: 2000,
    slidesToShow: 1,
    dots: true,
    prevArrow: $('.prev-btn'),
    nextArrow: $('.next-btn'),
  })
})

// Database 
var postName = document.getElementById('postName');
function getName(e){
  e.preventDefault();

  var name = document.getElementById('email').value;

  console.log(name);
  var params = `name=${name}`

  var xhr = new XMLHttpRequest();

  xhr.open('POST', '/assets/PHP/email.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www.form-urlencoded');

  xhr.onload(()=>{
    console.log(this.responseText);
  })
  xhr.send(params)
}

getName()



