var stringify = require('json-stringify-safe');

System.config({
    'baseURL': '.',
    'map': {
        'org': './org.js',
        'orgjs': './node_modules/org/org.js'
    }
});

System.import('./test.org!')
    .then(function (org) {
        console.log(Object.keys(org));
    })
    .catch(function (err) {
        console.log('ERROR');
        console.log(JSON.stringify(arguments));
    });
