/* */ 
var copyObject = require('./internal/copyObject'),
    createAssigner = require('./internal/createAssigner'),
    keysIn = require('./keysIn');
var assignIn = createAssigner(function(object, source) {
  copyObject(source, keysIn(source), object);
});
module.exports = assignIn;
