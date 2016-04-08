(function() {

    'use strict';
// ----------------------------------------------------------------------------
// 概要
// ----------------------------------------------------------------------------
// Loading Module


// ----------------------------------------------------------------------------
// loadingを表示させるelementをbodyに作る
// ----------------------------------------------------------------------------

  var wrapper = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
  var circleWrap = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
  $(wrapper).addClass('loadingComponent hidden');
  $(circleWrap).addClass('sk-circle');

  for (var i=1;i<13;i++) {
	  var circleChild = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
	  $(circleChild).addClass('sk-circle'+i+' sk-child');
  	$(circleWrap).append(circleChild)
  }
  
  $(wrapper).append(circleWrap)
	$('body').append(wrapper);

// ----------------------------------------------------------------------------
// Loading
// ----------------------------------------------------------------------------

  var Loading = {
  	start: function () {
  		$(wrapper).removeClass('hidden');
  	},

  	stop: function () {
  		$(wrapper).addClass('hidden');
  	}
  };

	window.Loading = Loading;

})();

