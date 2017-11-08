/**
 * Created by Administrator on 2017/9/28.
 */
window.onload = function () {
    console.log(window.name);
    if(window.name == ""){
        window.name = 0;
        $('.loadingTop').addClass('slideOutUp');
        $('.loadingBottom').addClass('slideOutDown');
        $('.loadingMiddle').addClass('middle');
    }else{
        //window.name = eval(window.name)+1;
        //alert("���Ѿ�ˢ��"+window.name+"��");
        $('.loadingTop,.loadingBottom,.loadingMiddle').remove();
    }

}


/*页面加载动画*/
$(function(){
    $('#dowebok').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        menu: '#menu',
        // 'navigation': true,
        afterLoad: function(anchorLink, index){
            if(index == 2){
                $('.section2').find('article').delay(500).animate({
                    bottom: '10%'
                }, 1500, 'easeOutExpo');
            }
            if(index == 3){
                $('.section3').find('.left').animate({
                    right: '50%'
                }, 2000, 'easeOutExpo');
            }
            if(index == 3){
                $('.section3').find('.right').animate({
                    left: '50%'
                }, 2000, 'easeOutExpo');
            }
            if(index == 5){
                $('.section5').find('ul').animate({
                    opacity:'1',
                    top: '50%'
                }, 2000, 'easeOutExpo');
            }
        },
        onLeave: function(index, direction){
            if(index == '2'){
                $('.section2').find('article').delay(500).animate({
                    bottom: '-50%'
                }, 1500, 'easeOutExpo');
            }
            if(index == '3'){
                $('.section3').find('.left').animate({
                    right: '-50%'
                }, 2000, 'easeOutExpo');
            }
            if(index == '3'){
                $('.section3').find('.right').animate({
                    left: '-50%'
                }, 2000, 'easeOutExpo');
            }
            if(index == '5'){
                $('.section5').find('ul').animate({
                    opacity:'0',
                    top: '36%'
                }, 2000, 'easeOutExpo');
            }
        }
    });

    /*****************************************nav****************************************/

    $('nav .dianj').click(function () {
        var $this = $(this).children();
        if($this.hasClass('gb')){
            $(this).css({'right':'100px','transition':'0.6s'}).siblings().css({'right':'-33%','transition':'0.6s'});
            $(this).children().removeClass('gb').addClass('dk')
        }else {
            $(this).children().removeClass('dk').addClass('gb')
            $(this).css('right','200px').siblings('.ba').css('right','-8%').siblings('#menu').css('right','30px');
        }
    });

});



