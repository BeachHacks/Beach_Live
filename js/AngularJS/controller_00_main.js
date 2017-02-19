beachLiveApp.controller('main_controller', function($scope, data){
	$scope.tab = data.tab;
	$scope.data = data;



/** Admin Login **/

	$scope.adminAccess = false; // I know..., client still need authentication to firebase in order to access database.

	// Need to connect to firebase and authenticate for admin user only
	// for now, fake login
	$scope.failed = false;

	var admin_auth = {
		user: "admin",
		password: "1234"
	}

	$scope.admin = {
		user: "userName",
		password: "password"
	}

	$scope.login = function(){
		// console.log($scope.admin.user);
		// console.log($scope.admin.password);
		if($scope.admin.user == admin_auth.user && $scope.admin.password == admin_auth.password){
			console.log("Logged In");
			$scope.adminAccess = true;
			$scope.failed = false;
			$('#loginModal').modal('toggle') 
		} else {
			$scope.failed = true;
			console.log("Failed Login");
		}
	}
});