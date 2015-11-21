var org = require('org');

var parser = new org.Parser();

exports.translate = function(load) {
    load.metadata.content = parser.parse(load.source);
};

exports.instantiate = function(load) {
    return load.metadata.content;
};