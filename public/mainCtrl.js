angular.module("myPortfolio").controller("mainCtrl", function($scope, mainService){

	$scope.submitMessage = function(){
		mainService.submitMessage($scope.contact).then(function(){
			$scope.contact = "";
			Materialize.toast('Thank you for the message! I\'ll get back in contact with you ASAP', 8000);
		});
	};

});