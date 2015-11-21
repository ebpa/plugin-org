var org = require('org');

var parser = new org.Parser();
console.log('plugin loading');

exports.translate = function(load) {
    console.log('translate');
    return parser.parse(load.source);
};

exports.instantiate = function(load) {
    console.log('instantiate');
    return load.source;
};