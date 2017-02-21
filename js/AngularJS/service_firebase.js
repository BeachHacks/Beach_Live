beachLiveApp.service('AngFirebase', function() {

    var database = firebase.database();

    var user = firebase.auth().currentUser;

    var login = function(_userName, _password){

        firebase.auth().signInWithEmailAndPassword(_userName+"@beachlive.com", _password).catch(function(error) {
          // Handle Errors here.
          // var errorCode = error.code;
          // var errorMessage = error.message;
        });

        user = firebase.auth().currentUser;
        if(user){
            return true;
        } else {
            return false;
        }



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
        // if(_userName == "admin" && _password == "1234"){
        //     user = 1;
        //     return true;
        // } else {
        //     return false;
        // }
    }

    var writeAnnouncement = function(_message){
        var timeStamp = Math.floor(Date.now());
        console.log(timeStamp);
        console.log(_message);

    }

    var checkLogin = function(){
        if(user){
            // Logged In
            return true;
        } else {
            return false;
        }
    }

    var logout = function(){
        firebase.auth().signOut().then(function() {
          // Sign-out successful.
        }, function(error) {
          // An error happened.
        });
    }
    
    var service = {
        login               : login,
        checkLogin          : checkLogin,
        writeAnnouncement   : writeAnnouncement,
        logout              : logout
    };

    return service;
});