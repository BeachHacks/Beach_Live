beachLiveApp.controller('admin_schedule_controller', function($scope, data, AngFirebase, $state){

	$scope.schedule = {
		"Saturday 04/22": {
			"3:00 pm" : {
							title: "Doors Open",
							description: "Hacker Registrion @ USU"
						},
			"3:30 pm" : {
							title: "Opening Ceremonies",
							description: "@ USU Ballroom"
						},
			"4:00 pm" : {
							title: "Hacking Begins",
							description: "@ USU Ballroom"
						},
			"4:30 pm" : {
							title: "Intro to Git Workshop",
							description: "@ USU "
						},
			"6:00 pm" : {
							title: "Dinner",
							description: "@ USU courtyard"
						},
			"7:00 pm" : {
							title: "Web Development Tools Workshop",
							description: "@ USU "
						},
			"8:30 pm" : {
							title: "Intro to Apache Lucene Workshop",
							description: "@ USU"
						},
			"9:45 pm" : {
							title: "Intro to iOS Development Workshop",
							description: "@ USU Ballroom"
						},
			"10:30 pm" :{
							title: "Intro to Cloud Hosting Workshop",
							description: "@ USU"
						}


		},
		"Sunday 04/23":{
			"12:00 am" : {
							title: "MLH Mini Event",
							description: "@ USU Ballroom"
						},
			"12:00 am" : {
							title: "Midnight Snack",
							description: "@ USU Ballroom"
						},
			"8:00 am" : {
							title: "Breakfast",
							description: "@ USU Ballroom"
						},
			"11:00 am" : {
							title: "Intro to Competitive Programming Talk",
							description: "@ USU Ballroom"
						},
			"01:00 pm" : {
							title: "Lunch",
							description: "@ USU Ballroom"
						},
			"03:00 pm" : {
							title: "Submission Deadline",
							description: "@ USU Ballroom"
						},
			"4:00 pm" : {
							title: "Hacking Ends",
							description: "@ USU Ballroom"
						},
			"4:00 pm" : {
							title: "Judging Expo",
							description: "@ USU Ballroom"
						},
			"5:00 pm" : {
							title: "Closing Ceremonies",
							description: "@ USU Ballroom"
						}
		}
	};

  var jsobObj = { name: 'Michelle', age: 1 };
  var jsonData = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsobObj));


  $scope.jsonUrl = 'data:' + jsonData;


	$scope.download = function(){
	}
});