var month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN','JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];

beachLiveApp.service('AngFirebase', function() {


    var database = firebase.database();

    var user = firebase.auth().currentUser;

    var anno_message = [];

    var anno_callbacks = [];

    var login = function(_userName, _password, _callback){

        firebase.auth().signInWithEmailAndPassword(_userName+"@beachlive.com", _password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          logout();
          // console.log(errorMessage);
        });

        // user = firebase.auth().currentUser;
        // if(user){
        //     return true;
        // } else {
        //     return false;
        // }

        firebase.auth().onAuthStateChanged(function(user){
            _callback(user);
        });


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
        var curTimestamp = Math.floor(Date.now());

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

    var logout = function(){
        firebase.auth().signOut().then(function() {
          // Sign-out successful.
        }, function(error) {
          // An error happened.
        });
    }

    // EventListenner for when announcement data changed
    // Will Trigger callback to whom ever registered
    firebase.database().ref('/announcement').on('value', function(snapshot){
        var updateMsg = [];
        var snapshotContent = snapshot.val();
        for (var key in snapshotContent){
            var msg = {
                timestamp : convertTime(snapshotContent[key].timestamp),
                message : snapshotContent[key].message,
                "key"   : key
            };
            updateMsg.unshift(msg);
        }

        anno_message = updateMsg;
        // Trigger callbacks
        for(var i = 0; i < anno_callbacks.length; i++){
            anno_callbacks[i]();
        }
    });

    var getAnnouncement = function(){
        return anno_message;
    }

    var deleteAnnouncement = function(_key){
        firebase.database().ref('/announcement/'+ _key).remove();
    }
    
    var service = {
        login               : login,
        checkLogin          : checkLogin,
        writeAnnouncement   : writeAnnouncement,
        getAnnouncement     : getAnnouncement,
        deleteAnnouncement  : deleteAnnouncement,
        onAnnouncement      : function(_callback){ anno_callbacks.push(_callback);},
        logout              : logout
    };

    return service;
});




function convertTime(_date){
    var date = new Date(_date);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    // var time =  month[date.getMonth()] + ' ' + date.getDate() + ', ' + hours + ':' + minutes + ' ' + ampm;
    var timeStamp = {
        date: month[date.getMonth()] + ' ' + date.getDate(),
        time: hours + ':' + minutes + ' ' + ampm
    }
    // console.log(time);
    // console.log(date);
    // console.log(date.getMonth());
    return timeStamp;
}

