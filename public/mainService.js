angular.module("myPortfolio").service("mainService", function($http, $q){

	this.submitMessage = function(contact){
		var dfd = $q.defer();
		$http({
			method: "POST",
			url: "/api/contact",
			data: contact
		}).then(function(){
			dfd.resolve();
		})
		return dfd.promise;
	}

});