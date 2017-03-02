
/** Firebase **/
var config = {
		apiKey: "AIzaSyC6Sz6SivyHseg4-xj_7lwe2URizls4Z-g",
		authDomain: "beachlive-e9dbc.firebaseapp.com",
		databaseURL: "https://beachlive-e9dbc.firebaseio.com",
		storageBucket: "beachlive-e9dbc.appspot.com",
		messagingSenderId: "790938157516"
	};
firebase.initializeApp(config);


// var database = firebase.database();

// database.ref('users/'+"123").set({
// 	username: "testName",
// 	email: "email"
// });

/** Firebase **/


var beachLiveApp = angular.module("beachLive", ["firebase", "ui.router"]);

beachLiveApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/announcement');



	$stateProvider

		.state("public", {
			url:"/",
			templateUrl: "view/main.html",
			controller: "main_controller"		
		})

		.state("public.announcement", {
			url: 'announcement',
			templateUrl: "view/announcement.html",
			controller: "announcement_controller"

		})

		.state("public.schedule", {
			url: "schedule",
			templateUrl: "view/schedule.html",
			controller: "schedule_controller"
		})

		.state("public.map",{
			url: 'map',
			templateUrl: "view/map.html",
			controller: ""
		})

		.state("public.mentor", {
			url: "mentor",
			templateUrl: "view/mentor.html",
			controller: "mentor_controller"
		})

		.state("admin", {
			url: "/admin",
			templateUrl: "view/admin/admin_main.html",
			controller: "admin_controller"
		})

		.state("admin.announcement", {
			url: "/announcement",
			templateUrl: "view/admin/admin_announcement.html",
			controller: "admin_controller"
		})

	// var helloState = {
 //    name: 'hello',
 //    url: '/',
 //    template: '<h3>hello world!</h3>'
 //  }

 //  $stateProvider.state(helloState);
});