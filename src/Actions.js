var flux = require('flux-react');

var Actions = flux.createActions([
    'setLatitude',
    'setLongitude'
]);

module.exports = Actions