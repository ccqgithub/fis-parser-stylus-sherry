'use strict';
var stylus = require('stylus');
var nib = require('nib');

module.exports = function(content, file, conf) {
    var out;

    stylus.render(content, {
        filename: file.getId(),
        compress: true,
        use: nib()
    }, function(err, css) {
        if (err) throw err;
        out = css;
    });
    
    return out;
};