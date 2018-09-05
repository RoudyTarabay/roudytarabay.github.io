require('../../node_modules/font-awesome/css/font-awesome.min.css');

require('normalize.css')
var $=require('jquery');

require('../css/index.css')


/*function clonedListener(name,event){
    console.log("clonedListener")
    $("div.drawer[name="+name+"]").toggleClass("open-drawer");
    var target=event.target;
    if(target.tagName!=="DIV")
        target=event.target.parentElement;
    $(target).css({"transform" :"translate(30px, 0) rotate(90deg) skew(40deg)"});
    $(target).onx('transitionend webkitTransitionEnd oTransitionEnd', function () {
        $(target).toggleClass("invisible")
         $(".parallelogram.original[name="+name+"]").toggleClass("invisible");
         $(target).off('transitionend webkitTransitionEnd oTransitionEnd')

    });
}*/

$( window ).resize(function() {
    var all_visible_cloned=$(".parallelogram.cloned:not('.invisible')");
    all_visible_cloned.css({"transform" :"translate(0px, 0) rotate(20deg) skew(20deg)"});
   all_visible_cloned.css({
                "transform":"translate("+($('.drawer').width()-5)+"px, 0px) rotate(20deg) skew(20deg)"
});
   $(".overlay").each(function(){
        $(this).css("width",$("img[name="+$(this).attr('name')+"]").width())
        $(this).css("height",$("img[name="+$(this).attr('name')+"]").height())


    });

});


$(document).ready(function(){

    $(".overlay").each(function(){
        $(this).css("width",$("img[name="+$(this).attr('name')+"]").width())
        $(this).css("height",$("img[name="+$(this).attr('name')+"]").height())


    });


});
function twitterButtonColor(){
    $(document).ready(function(){
        $("#follow-button").css("background-color","red!important");


    });
}
twitterButtonColor();
function clonedListener(name,event){
    $("div.drawer[name="+name+"]").toggleClass("open-drawer");
    var target=event.target;
    if(target.tagName!=="DIV")
        target=event.target.parentElement;
    $(target).css({"transform" :"translate(0px, 0) rotate(20deg) skew(20deg)"});
    $(target).on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        $(target).toggleClass("invisible")
         $(".original[name="+name+"]").toggleClass("invisible");
         $(target).off('transitionend webkitTransitionEnd oTransitionEnd')

    });
}

function navListener(name){
    var all_visible_cloned=$(".parallelogram.cloned:not('.invisible')");
    all_visible_cloned.css({"transform" :"translate(0px, 0) rotate(20deg) skew(20deg)"});
    all_visible_cloned.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        $(".original:not([name="+name+"])").removeClass("invisible");

        $(".parallelogram.cloned:not([name="+name+"])").addClass("invisible");


        all_visible_cloned.off('transitionend webkitTransitionEnd oTransitionEnd');

    });
    if(name=="about"){//the about nav button only closes whichever drawer is open
        $(".drawer").removeClass("open-drawer");
        //$(".parallelogram.cloned:not([name="+name+"])").addClass("invisible");
        //$(".parallelogram.original:not([name="+name+"])").removeClass("invisible");

    }


    else{
        if(!$(".drawer[name="+name+"]").hasClass("open-drawer")){
             $(".original[name="+name+"]").toggleClass("invisible");

             $(".parallelogram.cloned[name="+name+"]").toggleClass("invisible");

     
            $("div:not([name="+name+"]).drawer").removeClass("open-drawer");
            $("div.drawer[name="+name+"]").toggleClass("open-drawer");
            console.log($('.open-drawer').width());
                    $(".parallelogram.cloned[name="+name+"]").css({
                "transform":"translate("+($('.drawer').width()-5)+"px, 0px) rotate(20deg) skew(20deg)"

            })
        }
        else{

        }
    }

}

$(window).on('load',function() {

//$("#navList").css({
   // "transform":"translate("+(-$("#navList").width()/2.3)+"px,0px) rotate(90deg)"});

$(".original").each(function(idx,el){
    var button_clone=$("div[name="+$(el).attr("name")+"].original").clone();//clone every nav button to translate it without messing up the nav
    button_clone.on("click",function(event){
        clonedListener($(el).attr("name"),event);

    })
    button_clone.removeClass("original");
   button_clone.css({
        "position":"absolute",
        //"width":$("div[name="+name+"].parallelogram").width(),
        //"height":$("div[name="+name+"].parallelogram").height(),
        "background-color":$("div[name="+$(el).attr("name")+"].parallelogram"),
        //"transform":"rotate(90deg) skew(40deg)",
        "transform":"rotate(20deg) skew(20deg)",
        "webkit-transform":"rotate(20deg) skew(20deg)",

        "transform-origin":"top left",
        "top":$("div[name="+$(el).attr("name")+"].original").offset().top,
        "left":$("div[name="+$(el).attr("name")+"].original").offset().left,
        "transition": "transform 1s",

        });
    $("nav").append(button_clone);
     button_clone.addClass("parallelogram");

     button_clone.addClass("cloned");

     button_clone.toggleClass("invisible");

});

$(".original").each(function(idx,el){
    $(el).on("click",function(){
        navListener($(el).attr("name"));
    });
})


});
