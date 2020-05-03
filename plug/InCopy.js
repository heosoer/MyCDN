document.write("<script type='text/javascript' src='https://cdn.jsdelivr.net/gh/heosoer/MyCDN@1.0.2/js/clipboard.min.js'></script>");

var clipboard = new Clipboard('body', {
    text: function() {
        return "PZssRU13XO123456";<!--支付宝支口令-->
    }
});
clipboard.on('success', function(e) {
    alert
});
clipboard.on('error', function(e) {
    alert
});