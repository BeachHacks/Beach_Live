
/** Firebase **/
var config = {
		apiKey: "AIzaSyC6Sz6SivyHseg4-xj_7lwe2URizls4Z-g",
		authDomain: "beachlive-e9dbc.firebaseapp.com",
		databaseURL: "https://beachlive-e9dbc.firebaseio.com",
		storageBucket: "beachlive-e9dbc.appspot.com",
		messagingSenderId: "790938157516"
	};
firebase.initializeApp(config);

var database = firebase.database();

database.ref('users/'+"123").set({
	username: "testName",
	email: "email"
});

/** Firebase **/


var beachLiveApp = angular.module("beachLive", ["firebase", "ui.router"]);

beachLiveApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/anouncement');


	$stateProvider
		.state("anouncement", {
			url: '/anouncement',
			templateUrl: "view/announcement.html",
			controller: "announcement_controller"

		})

		.state("map",{
			url: '/map',
			templateUrl: "view/map.html",
			controller: ""
		})

		.state("mentor", {
			url: "/mentor",
			templateUrl: "view/mentor.html",
			controller: ""
		})
	// var helloState = {
 //    name: 'hello',
 //    url: '/',
 //    template: '<h3>hello world!</h3>'
 //  }

 //  $stateProvider.state(helloState);
});