var app = angular.module("app1", []);

	app.controller("controller1", function($scope){

		$scope.openNav = function(){
			if( !angular.element(document.getElementById("nav-icon")).hasClass('open') ){
				angular.element(document.getElementsByClassName("linkType1")).css('right', '65%');
				angular.element(document.getElementsByClassName("linkType2")).css('opacity', '1');
				angular.element(document.getElementById("overlay")).removeClass("closeOverlay");
				angular.element(document.getElementById("overlay")).css('width', '100%');
//				angular.element(document.getElementById("overlay")).css('height', '100%');
				angular.element(document.getElementById("nav-icon")).addClass("open");
				angular.element(document.getElementById("linkType1Header1")).css('top','20%');
				angular.element(document.getElementById("linkType1Header1")).css('opacity','1');
				angular.element(document.getElementById("linkType2Header1")).css('opacity','1');
				angular.element(document.getElementById("piece1")).css('right','-100%');
				angular.element(document.getElementById("piece2")).css('right','0%');
			}
			else{
				angular.element(document.getElementsByClassName("linkType1")).css('right', '100%');
				angular.element(document.getElementsByClassName("linkType2")).css('opacity', '0');
				angular.element(document.getElementById("overlay")).addClass("closeOverlay");
				angular.element(document.getElementById("overlay")).css('width', '0');
//				angular.element(document.getElementById("overlay")).css('height', '0');
				angular.element(document.getElementById("nav-icon")).removeClass("open");
				angular.element(document.getElementById("linkType1Header1")).css('top','0%');
				angular.element(document.getElementById("linkType1Header1")).css('opacity','0');
				angular.element(document.getElementById("linkType2Header1")).css('opacity','0');
				angular.element(document.getElementById("piece1")).css('right','100%');
				angular.element(document.getElementById("piece2")).css('right','200%');
			}
		};
	});
