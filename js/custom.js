$(function(){
    
    // cont3_deco1
    $(window).scroll(function(){
        var decoView=$(window).scrollTop();
        var deco1=$(".cont3_deco1")
        console.log(decoView);
        if(decoView<2100){
            $(deco1).removeClass("c3_view");
        }else{
            if(decoView<=2600){
                $(deco1).addClass("c3_view");
            }else{
                $(deco1).removeClass("c3_view");
            }
        }
    })

    // cont4_tap
    var tab=$('.cont4_list ul li');
    
    $(tab).click(function(){
        $(this).addClass("pick");
        $(this).siblings().removeClass("pick");
    })

    for(let i=0; i<5; i++){
        var tabico=$('#content4 .cont_tit h2 img');
        var tabs=$('.cont4_list ul li');
        var tabcont=$('.cont4_box');
        var tabtoptit=$('.cont4_box .cont4_tit1');
        var tabbottit=$('.cont4_box .cont4_tit2');
        var tabtopimg=$('.cont4_box .cont4_top .img');
        var tabbotimg=$('.cont4_box .cont4_bot .img');

        tab.eq(i).on('click',function(){
            $("#content4").attr('class','tab'+(i+1)+'_bg');
            $("#content4 .cont_tit h2").attr('class','tab'+(i+1)+'_h2');
            tabico.attr('src','./img/ico_cont4_tit'+(i+1)+'.png');
            tabcont.removeClass("c4_view");
            tabcont.eq(i).addClass("c4_view");
            tabtoptit.css('background','url(./img/cont4_'+(i+1)+'_tit1.png)no-repeat');
            tabbottit.css('background','url(./img/cont4_'+(i+1)+'_tit2.png)no-repeat');
            tabtopimg.css('background','url(./img/cont4_'+(i+1)+'_img1.jpg)no-repeat');
            tabbotimg.css('background','url(./img/cont4_'+(i+1)+'_img2.jpg)no-repeat');
        });
    }
})