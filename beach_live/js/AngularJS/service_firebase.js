var month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN','JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];

beachLiveApp.service('AngFirebase', function($window) {


    var user                = firebase.auth().currentUser;
    var anno_message        = null;
    var schedule            = null;
    var time                = null;
    var mentor_request_list = {};

    var anno_callbacks      = [];
    var schedule_callbacks  = [];
    var mentor_callbacks    = [];

    var encoded_schedule_json = "";



    var login = function(_userName, _password, _callback){

        firebase.auth().signInWithEmailAndPassword(_userName+"@beachlive.com", _password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          logout();
        }).then(function(){
            user = firebase.auth().currentUser;
            _callback(user);
        });
    }

    var writeAnnouncement = function(_message){
        var curTimestamp = Math.floor(Date.now());

        var update = {};

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
              user = null;
            }, function(error) {
              // An error happened.
            }
        );
    }


    var getAnnouncement = function(){
        if(anno_message == null){
            return 'default'
        } else {
            return anno_message;
        }
    }

    var deleteAnnouncement = function(_key){
        firebase.database().ref('/announcement/'+ _key).remove();
    }

    var updateSchedule = function(_schedule){
        console.log("update")
        var obj = {
            schedule: _schedule
        }
        firebase.database().ref("/schedule").update(obj);
    }

    var getSchedule = function(){
        return schedule;
    }

    var getEncodedSchedule = function(){
        return encoded_schedule_json;
    }

    var getRequestList = function(){
        return mentor_request_list;
    }

    var writeRequestMentor = function(_request){

        var curTimestamp = Math.floor(Date.now());

        var jsonObj = {
            time: curTimestamp,
            request : _request
        }

        return firebase.database().ref("/mentor/request").push(jsonObj);
    }

    var acceptRequest = function(_key, _mentor){
        // console.log(mentor_request_list[_key]);
        firebase.database().ref("/mentor/request/"+ _key + "/request").update({"status": true});
        firebase.database().ref("/mentor/request/"+ _key + "/request").update({"mentor": _mentor});
        firebase.database().ref("/mentor/request/"+ _key).update({"time_accepted": Math.floor(Date.now())});

    }

    var deleteRequest = function(_key){
        firebase.database().ref("/mentor/request/"+_key).remove();
    }

    var forceRefresh = function(){
        firebase.database().ref("/refresh").update({"timestamp" : Math.floor(Date.now())});
    }

    var getTopAccepted = function(_numTop){

        var _list = mentor_request_list;
        var list = [];
        for( var key in _list){
            if(_list[key].request.status){
                list.push({
                    k : key,
                    time : _list[key].time_accepted
                });
            }
        }

        var recentList = [];
        // Sort the most recent
        var max_length = list.length;
        for(var i = 0; i < max_length; i++){
            var high = list[i].time;
            var index = i;
            for(var ii = i; ii < max_length; ii++){
                if(list[ii].time > high){
                    index = ii;
                    high = list[ii];
                }
            }
            var temp = list[i];
            list[i] = high;
            list[index] = temp;
        }

        // console.log(list);
        for(var i = 0; i < list.length && i < _numTop; i++){
                recentList.push(list[i].k);
        }
        return recentList;
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

    // EventListenner for when schedule changed
    // Will Trigger callback to whom ever registered
    firebase.database().ref('/schedule').on('value', function(snapshot){
        var snapshotContent = snapshot.val();
        schedule = JSON.parse(snapshotContent.schedule);
        encoded_schedule_json = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(schedule, undefined, 2));
        // Trigger callbacks
        for(var i = 0; i < schedule_callbacks.length; i++){
            schedule_callbacks[i]();
        }
    });

    firebase.database().ref('/mentor/request').on('value', function(snapshot){
        mentor_request_list = snapshot.val();

        // Trigger callbacks
        for(var i = 0; i < mentor_callbacks.length; i++){
            mentor_callbacks[i]();
        }
    });

    // Listener for forcing refresh
    firebase.database().ref('/refresh').on('value', function(snapshot){

        if(time == null){
            time = snapshot.val();
        } else {
           $window.location.reload(); 
        }
        
    });

    var service = {
        login               : login,
        checkLogin          : checkLogin,
        writeAnnouncement   : writeAnnouncement,
        getAnnouncement     : getAnnouncement,
        deleteAnnouncement  : deleteAnnouncement,
        onAnnouncement      : function(_callback){ anno_callbacks.push(_callback);},
        onScheduleChange    : function(_callback){ schedule_callbacks.push(_callback)},
        onMentorChange      : function(_callback){ mentor_callbacks.push(_callback)},
        logout              : logout,
        updateSchedule      : updateSchedule,
        getSchedule         : getSchedule,
        getEncodedSchedule  : getEncodedSchedule,
        writeRequestMentor  : writeRequestMentor,
        getRequestList      : getRequestList,
        acceptRequest       : acceptRequest,
        deleteRequest       : deleteRequest,
        forceRefresh        : forceRefresh,
        getTopAccepted      : getTopAccepted
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

