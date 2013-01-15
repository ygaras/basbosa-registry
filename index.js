(function(root, factory) {
	// Basbosa registry should be loaded once
	
	
	if (typeof exports !== 'undefined') {
  	// Node.js
    module.exports = factory(root);
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(function() {
    	if (typeof Basbosa !== 'undefined') return;
    	root.Basbosa = factory(root);
      return root.Basbosa;
    });
  } else {
    // Browser globals
    root.Basbosa = factory(root);
  }
}(this, function(root) {
	var Basbosa = function Basbosa(className) {
		if (!className) return Basbosa;
		if (Basbosa.classes[className]) {
			return Basbosa.classes[className];
		} else {
			new Error('Class ' + className + ' not defined or loaded yet');
		}
	};

	Basbosa.add = function(className, instance) {
		Basbosa.classes = Basbosa.classes || [];
		return Basbosa.classes[className] = instance;
	};
	
	return Basbosa;
}));