$(document).ready(function() {
    
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
  
});

var myFunk = (message) => {
  console.log(message);
}
myFunk('grisha');