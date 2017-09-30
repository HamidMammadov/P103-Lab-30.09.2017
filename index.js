$(document).ready(function(){
 var classLength=$('.slide').innerWidth();
 console.log(classLength)
 $('.sliders').css('position','relative');
 var i=0;
 $('.sliders').css('right', i+'px');
 $('.point').click(function(){
     var b=parseInt($(this).attr('index'));
    if(b != null){ i=b*classLength;
        $('.sliders').css('position','relative');
     $('.sliders').css('right', i+'px');
     $(".point").removeClass ('active');
     $(this).addClass('active');
    console.log(b);
console.log(i)}
    
 })

})