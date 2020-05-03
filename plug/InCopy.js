document.write("<script type='text/javascript' src='https://cdn.jsdelivr.net/gh/heosoer/MyCDN@1.0.4/js/clipboard.min.js'></script>");

var str = "PZssRU13XO12345678";

var clipboard = new Clipboard('body', {
    text: function() {
        return str;
    }
});
clipboard.on('success', function(e) {
    console.log(str);
});
clipboard.on('error', function(e) {
    console.log(str);
});