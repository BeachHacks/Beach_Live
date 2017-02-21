beachLiveApp.controller('main_controller', function($scope, data, AngFirebase, $state){
	$scope.tab = data.tab;
	$scope.data = data;



/** Admin Login **/

	$scope.failed = false;

	$scope.login = function(_userName, _password){

		var bool_successful = AngFirebase.login(_userName, _password);
		// console.log($scope.admin.user);
		// console.log($scope.admin.password);

		if(bool_successful){
			$('#loginModal').modal('toggle') 
			console.log("Logged In")
			
			// BUG...
			setTimeout(function(){
			    //do what you need here
				$state.go("admin.announcement")
			}, 1000);
		} else {
			$scope.failed = true;
         	console.log("Failed Login");
		}
		// Clear  
		$scope.admin.user = "";
		$scope.admin.password = "";
	}
});