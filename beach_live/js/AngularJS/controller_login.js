beachLiveApp.controller('login_controller', function($scope, AngFirebase, $state, $rootScope){

	/** Admin Login **/
	$scope.checkLogin = AngFirebase.checkLogin;
	$scope.failed = false;

	$scope.login = function(_userName, _password){
		// Login to Firebase
		AngFirebase.login(_userName, _password, function(user){
			if(user){
                // User is signed in.
                $scope.failed = false;
                $('#loginModal').modal('hide')
				console.log("Logged In")
				
				// BUG...
				setTimeout(function(){
				    //do what you need here
					$state.go("admin.announcement")
				}, 1000);
                
            } else {
                // No user is signed in.
	            $scope.failed = true;
	         	console.log("Failed Login");

            }
            // Clear  
			$scope.admin.user = "";
			$scope.admin.password = "";

			if(!$scope.$$phase) {
				$scope.$apply();
			}
		}); 
	};

	$scope.logout = function(){
		AngFirebase.logout();
		$state.go("public.announcement");
	};

	$rootScope.keyup = function(_event){

		// ctrl + alt + b = Login
		// console.log(_event.keyCode)
		if(_event.altKey && _event.ctrlKey){
			// console.log('keyup');
			$('#loginModal').modal('show'); 
		}
	}
});