beachLiveApp.service('AngFirebase', function() {

    var user = null;

    var login = function(_userName, _password){

        // firebase.auth().signInWithEmailAndPassword(_userName+"@beachlive.com", _password).catch(function(error) {
        //   // Handle Errors here.
        //   // var errorCode = error.code;
        //   // var errorMessage = error.message;
        // });

        // user = firebase.auth().currentUser;



        /** Fake Login **/
                // if($scope.admin.user == admin_auth.user && $scope.admin.password == admin_auth.password){
        //  console.log("Logged In");
        //  $scope.adminAccess = true;
        //  $scope.failed = false;
        //  $('#loginModal').modal('toggle') 
        // } else {
        //  $scope.failed = true;
        //  console.log("Failed Login");
        // }
        if(_userName == "admin" && _password == "1234"){
            user = 1;
            return true;
        } else {
            return false;
        }
    }

    var checkLogin = function(){

        if(user){
            // Logged In
            return true;
        } else {
            return false;
        }
    }
    
    var service = {
        login : login,
        checkLogin: checkLogin
    };

    return service;
});