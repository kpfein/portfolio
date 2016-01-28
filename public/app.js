angular.module("myPortfolio", ["ui.router"]).config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/");

	$stateProvider


		.state("main", {
			url: "/",
			controller: "mainCtrl",
			templateUrl: "main.html",
		})

});