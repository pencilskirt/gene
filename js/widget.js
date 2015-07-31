
//portfolio1 code
var xhre = new XMLHttpRequest();
xhre.onreadystatechange = function () {
  if(xhre.readyState === 4 && xhre.status === 200) {
    var images = JSON.parse(xhre.responseText);
    var imageHTML = '<ul>';
    
   //my for loop
  for (var i=0; i<images.length; i += 1) {
        
        imageHTML += '<li> <img src="img/portfolio1/';
        imageHTML += images[i].image;
        imageHTML += '"> </li>';
        imageHTML += '<li> <p>';
        imageHTML += images[i].caption;
        imageHTML += '</p> </li>';
        
      }
    
    //
     imageHTML += '</ul>';
     
    document.getElementById('images').innerHTML = imageHTML;
  }
};
xhre.open('GET', 'data/portfolio1.json');
xhre.send();


//original code

//var xhre = new XMLHttpRequest();
//xhre.onreadystatechange = function () {
//  if(xhre.readyState === 4 && xhre.status === 200) {
//    var employees = JSON.parse(xhre.responseText);
//    var statusHTML = '<ul class="bulleted">';
//    for (var i=0; i<employees.length; i += 1) {
//      if (employees[i].inoffice === true) {
//        statusHTML += '<li class="in">';
//      } else {
//        statusHTML += '<li class="out">';
//      }
//      statusHTML += employees[i].name;
//      statusHTML += '</li>';
//    }
//    statusHTML += '</ul>';
//    document.getElementById('employeeList').innerHTML = statusHTML;
//  }
//};
//xhre.open('GET', '../data/employees.json');
//xhre.send();



//my for loop
  /*for (var i=0; i<images.length; i += 1) {
     imageHTML += '<img src="http://www.w3schools.com/images/w3schools_green.jpg"'
        imageHTML += '<li> <img src="img/';
        imageHTML += images[i].image;
        imageHTML += '"> </li>';
        
      }*/