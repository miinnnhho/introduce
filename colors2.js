function LinksSetColor(color){
  // var alist = document.querySelectorAll('a');
  // var i = 0;
  //  while(i < alist.length){
  //  alist[i].style.color = color;
  //  i = i + 1;
  //  }
  $('a').css('color', color);
}
//fun2//
function BodySetColor(color){
  //document.querySelector('body').style.color = color;
  $('body').css('color', color);
  //객체,객체 속 함수(메소드)
}
//fun3//
function BodySetBackgroundColor(color){
  //document.querySelector('body').style.backgroundColor = color;
  $('body').css('backgroundColor', color);


}
//fun4//
function nightdayhandler(self){

var target = document.querySelector('body');
if(self.value === 'night'){
  BodySetBackgroundColor('black');
  BodySetColor('white');
  self.value = 'day';

 LinksSetColor('powderblue');

} else{
  BodySetBackgroundColor('white');
  BodySetColor('black');
  self.value = 'night';

  Links.setColor('blue');
}
}
