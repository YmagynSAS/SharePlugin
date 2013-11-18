
	function Share() {
	}

	Share.prototype.show = function(content, success, fail) {
		return cordova.exec( function(args) {
			success(args);
		}, function(args) {
			fail(args);
		}, 'Share', '', [content]);
	};
	cordova.addConstructor(function()  {
		   if(!window.plugins)
		   {
		   window.plugins = {};
		   }		   
		   if (!window.Cordova) {
		   window.Cordova = cordova;
		   };
		   
		   window.plugins.share = new Share();
	});