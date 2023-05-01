/*

欢迎查看源代码！指点批评、合作联络 q780309206

*/
$(document).ready(function(){

const s=[]; s[0] = $("#s1,#s2,#s3,#s4,#s5,#s6,#s7,#s8,#s9");
const set$s=(function(){for (let i=1; i<10 ;i++) s[i]=$("#s"+i);});
let player = 0;
const xiaX= (function() {for (let i=1; i<10 ;i++) s[i].text("x");});
const xiaO= (function() {for (let i=1; i<10 ;i++) s[i].text("o");});

const xia = (function(x,n) {
  if(typeof x!="undefined") {
    $(x).css({'opacity':"1","cursor":"no-drop"}).unbind();
    s[n]=$(); // console.log("TSK step-log : s"+n);
    if(player==0)xiaO();else xiaX();
  }
  else xiaX();
});
const on$s = (function(){
  for (let i=1; i<10 ;i++) {
    s[i].on({
      mouseenter:function() { $(this).css({'opacity':".36"}); },
      mouseleave:function() { $(this).css({'opacity':"0"}); },
      click     :async function() { xia(this,i); player=!player; }
    });
  }
});
// init round
player = 0; set$s(); on$s(); xia();

// buttons
$("#clc").click(function() {$("section,#cov").css('display','flex'); s[0].css({'opacity':'0','cursor':'cell'});set$s();});
$("#fo").click(function()  {player = 1; xiaX();});
$("#fx").click(function()  {player = 0; xiaO();});
$("#fo,#fx").click(function(){on$s();$("section,#cov").css('display','none'); xia();});


});
