(function() {
    setTimeout(function() {
        if (!window.jQuery)
            setTimeout(arguments.callee, 2000);
        else
            $(main());
    }, 2000);
})();

var func1 = function() {
    return true; //処理が終わったら true を返す
};

var sidebar_width = 176;
var change_width = 255;
var right_chat_bar = 255;

var func2 = function() {
    if (/inbox/.test(location.href)) {
        change = null;
        lab_right_chat_flg=false;
        $.each($('.nH'), function() {
            if ($(this).has('style') && $(this).hasClass('nn')) {
                if ($(this).css('width') === (sidebar_width + 'px')) {
                    $(this).css('width', change_width);
                    //ボタンサイズの横幅を変更
                    $('.T-I.T-I-KE').css('min-width','200px');
                    $('.J-KU-Jg.J-KU-Jg-Zc').css('width','225px');
                    change = 'on';
                    return true;
                }
                if (change === 'on') {
                    paddingwidth = $(this).css('width').replace(/px/, '') - (change_width - sidebar_width);
                    $(this).attr('style', 'width: ' + paddingwidth + 'px;');
                    $(this).css('width', paddingwidth);
                    change = null;
                }
            }
        });
    }
};

var main = function() {
    func1();
    //func2();
    //setTimeout で遅延処理
    setTimeout(function() {
        if (!func1())
            setTimeout(arguments.callee, 2000);
        else
            func2();
    }, 2000);
};

//windowの幅が変更された時の処理
$(window).resize(function() {
    change = null;
    $.each($('.nH'), function() {
        if ($(this).has('style') && $(this).hasClass('nn')) {
            if ($(this).css('width') === change_width + 'px') {
                change = 'on';
                return true;
            }
            if (change === 'on') {
                paddingwidth = $(this).css('width').replace(/px/, '') - (change_width - sidebar_width);
                $(this).attr('style', 'width: ' + paddingwidth + 'px;');
                $(this).css('width', paddingwidth);
                change = null;
            }
        }
    });
});