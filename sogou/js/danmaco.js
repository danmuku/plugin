
var firebase = new Firebase('https://dazzling-fire-9662.firebaseio.com/'+ 'sogou-hackathon2');

firebase.on('child_added', function (snapshot) {
    var message = snapshot.val();
    $(".s_show").append("<div>" + message + "</div>");
    init_screen();
});

$(document).ready(function(){
    //发表评论
    $(".s_btn").click(function () {
        post();
    });
});



$(document).keydown(function(event){
    var keyCode = event.keyCode;
    if (keyCode == 13) {
        post();
    }
});


function post() {
    var text = $(".s_txt").val();
    if (text) {
        $(".s_txt").val("");
        firebase.push(text);
    } else {
        $(".s_txt").focus();
    }
}




//初始化弹幕
function init_screen() {

    $(".s_show").find("div").show().each(function() {
        var _left = $(window).width() - $(this).width();
        var _height = $(window).height();

        var _top = Math.random()*(_height);

        if (_top > _height - 100) {
            _top = 20;
        }

        var time = Math.random() * 50000 + 10000;

        //设定文字的初始化位置
        $(this).css({
            left: _left,
            top: _top,
            color: getRandomColor()
        });
        $(this).animate({
            left: "-" + _left + "px"
        },
        time,
        function() {});

    });
}

//随机获取颜色值
function getRandomColor() {
    return '#' + (function (h) {
            return new Array(7 - h.length).join("0") + h
        })((Math.random() * 0x1000000 << 0).toString(16))
}