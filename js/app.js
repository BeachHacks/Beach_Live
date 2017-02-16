
/** Initialize Firebase SDK **/
// Need to config to firebase server config
  // Initialize the Firebase SDK
  var config = {
    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    storageBucket: '<your-storage-bucket>'
  };
  firebase.initializeApp(config);



var beachLiveApp = angular.module("beachLive", ["firebase", "ui.router"]);

beachLiveApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');


	$stateProvider
		.state("main", {
			url: '/',
			templateUrl: "view/main.html",
			controller: "main_controller"

		})
	// var helloState = {
 //    name: 'hello',
 //    url: '/',
 //    template: '<h3>hello world!</h3>'
 //  }

 //  $stateProvider.state(helloState);
});