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
	var Basbosa = function Basbosa(className, cb) {
        var results = [];
        if (!className) return Basbosa;

        // Returning list of classes
        if (className instanceof RegExp) {
            for (var registeredClassName in Basbosa.classes) {
                if (className.test(registeredClassName)) results.push(Basbosa(registeredClassName));
            }

            return results;
        }

        // TODO: Add this functionality!
        // If the class is a model class, check if we can create if if AutoModels is loaded and
        // a callback function was provided
//        if (!Basbosa.added(className)
//            && /Model$/.test(className)
//            && !Basbosa.added(className)
//            && typeof cb === 'function') {
//          return Basbosa('AutoModel').createModelClass(className, {}, {}, cb);
//        }


        if (typeof Basbosa.classes[className] !== 'undefined') {
			return Basbosa.classes[className];
		} else {
			throw new Error('Class ' + className + ' not defined or loaded yet');
		}
	};

    Basbosa.classes = {};

	Basbosa.add = function(className, _class) {
    if ((typeof _class.registeredName !== 'undefined') && _class.registeredName !== className) {
      var err = 'You are setting the registeredName property of the object to ' + _class.registeredName;
      err += "\n\r and registering with Basbosa with the name " + className;
      err += "\n\r either remove the property registeredName from your object "
      err += "\n\r or set it to " + className;

      throw new Error(err);
    }
    _class.registeredName = className;
		return Basbosa.classes[className] = _class;
	};

    Basbosa.added = function(className) {
      return Basbosa.classes[className] !== 'undefined';
    };


	
	return Basbosa;
}));