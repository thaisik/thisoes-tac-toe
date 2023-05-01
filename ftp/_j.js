/*

欢迎查看源代码！指点批评、合作联络 q780309206

*/
$(document).ready(function(){
// 暗号模式展开
  onlinet = (function(){$("#angoua").removeAttr('onclick id').css({'background':'#39E3C93a','cursor':'auto'});$(".hid2").remove();$("span").css('display','none');$("#aform").css('display','flex');});

// 下 'O' & 'X' 准备  /* v=1.1 */
  var c=["#AC3AC7","#E39D07","#333"]; var t=[7,7.2,7.7,8,9,9.3,9.5,11]; let spinPeriod=[18,21,25,27,30,36,39];
  const FAS = $('.fa-solid').length; const TAVG = t.reduce((t1, t2) => t1 + t2, 0) / t.length;

  const rand = (function(k){ return Math.floor(Math.random()*k); });
  const rReset =  (function(i){
      $('.fa-solid:nth-of-type(' + i + ')').css({
        'color' : c[rand(3)],
        'left' : rand( $(window).width() - 72 ),
        'top' : '-4rem',
        'animationDuration' : spinPeriod[rand(spinPeriod.length)]+"s"
      });
  });
  const infplay = (function(j){ console.log("TSK_faPlay_id = "+j);
    let kore = '.fa-solid:nth-of-type(' + j + ')';
    let currleft = $(kore).position.left;
    $(kore).animate(
    {
      'left' : (currleft + 27),
      'top' : ($( window ).height() + 1)
    }, {
      duration: (1000 * t[rand(t.length)]),
      specialEasing: { top: "easeInQuad" },
      complete: function() {rReset(j);infplay(j);}
    });
  });
// 执行下雨
  const rain = (function(x){
    rReset(x); infplay(x);
  });
  const playfa = (async function(){
    for (let z=0; z<(FAS+1) ;z++) {
      await new Promise(rt => setTimeout(rt, Math.round(TAVG * 1000/*s*/ / FAS) )); // sleep
      rain(z);
    }
  });
  playfa();
});
