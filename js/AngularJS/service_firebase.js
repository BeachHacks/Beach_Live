beachLiveApp.service('AngFirebase', function() {

    var database = firebase.database();

    var user = firebase.auth().currentUser;

    var anno_message = [];

    var anno_callbacks = [];

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
        var curTimestamp = Math.floor(Date.now()/1000);

        // var newPostKey = firebase.database().ref().child('posts').push().key;

        var update = {};

        // update[newPostKey] = {
        //     "timeStamp"     : curTimeStamp,
        //         "message"       : _message
        // }

        // firebase.database().ref("/announcement").update(update);
        firebase.database().ref("/announcement").push({
            "timestamp"     : curTimestamp,
                "message"       : _message
        })
    }

    var checkLogin = function(){
        if(user){
            // Logged In
            return true;
        } else {
            return false;
        }
    }

    // var getAnnouncement = function(){
    //     var announcement = [{
    //         timestamp: "holder",
    //         message: "holder"
    //     }]
    //     // console.log(content);

    //     // ref.child('users').orderByKey()
    //     // firebase.database().ref('/announcement').on('value', function(snapshot){
    //     //     // console.log(snapshot.val())
    //     //     var updateMsg = [];
    //     //     var snapshotContent = snapshot.val();
    //     //     for (var key in snapshotContent){
    //     //         var msg = {
    //     //             timestamp : snapshotContent[key].timestamp,
    //     //             message : snapshotContent[key].message
    //     //         };
    //     //         updateMsg.unshift(msg);
    //     //     }
    //     //     console.log(updateMsg);
    //     //     announcement = updateMsg;
    //     // });

    //     firebase.database().ref('/announcement').once('value').then(function(snapshot) {
    //         var snapshotContent = snapshot.val();
    //         console.log(snapshotContent); 
    //     })
    //     return announcement;

    // }

    var logout = function(){
        firebase.auth().signOut().then(function() {
          // Sign-out successful.
        }, function(error) {
          // An error happened.
        });
    }

    firebase.database().ref('/announcement').on('value', function(snapshot){
        // console.log(snapshot.val())
        var updateMsg = [];
        var snapshotContent = snapshot.val();
        for (var key in snapshotContent){
            var msg = {
                timestamp : snapshotContent[key].timestamp,
                message : snapshotContent[key].message
            };
            updateMsg.unshift(msg);
        }

        anno_message = updateMsg;
        
        for(var i = 0; i < anno_callbacks.length; i++){
            anno_callbacks[i]();
        }
    });

    var getAnnouncement = function(){
        return anno_message;
    }
    
    var service = {
        login               : login,
        checkLogin          : checkLogin,
        writeAnnouncement   : writeAnnouncement,
        getAnnouncement     : getAnnouncement,
        onAnnouncement      : function(_callback){ anno_callbacks.push(_callback);},
        logout              : logout
    };

    return service;
});