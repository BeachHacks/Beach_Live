beachLiveApp.service('data', ['AngFirebase', function(AngFirebase) {
    


    var data = {
    	tab: {
    		ANNOUNCEMENT	: "announcement",
            SCHEDULE        : "schedule",
    		MAP				: "map",
    		MENTOR			: "mentor",
    		HARDWARE		: "https://hardware.mlh.io/events/beach-hacks",
            DEVPOST         : "https://beachhacks-2.devpost.com/",
    		SONG			: "song"
    	},
        media : {
            map_campus  : "https://i.imgur.com/prN5SMC.png", // Campus img
            map_venue   : "https://i.imgur.com/m949vC0.png",  // venue img
            pyramid     : "https://i.imgur.com/yHASg5C.png"
        }
    };

    return data;
}]);

beachLiveApp.service('notification', ['AngFirebase', function(AngFirebase){



    var notificationEnabled = false;

    var notify = function(_announcement){

        var index = -1;
        var max_time = 0;
        for(var i = 0; i < _announcement.length; i++){
            if(max_time < _announcement[i].time){
                max_time = _announcement[i].time;
                index = i;
            }
        }

        // Check time of the announcement
        var currentTime = Math.floor(Date.now());
        var notification = null;
        if(notificationEnabled && (max_time >= currentTime - 20000 && max_time <= currentTime + 20000)){
            // Send notify
            if(!Notification){
                alert('Desktop notifications not available in your browser. Try Chromium.');
                return;
            } else if(Notification.permission === "granted"){
                notification = new Notification('BeachHacks', {
                    icon: 'https://i.imgur.com/yHASg5C.png',
                    body: _announcement[index].message,
                });
            }

            notification.onClick = function(){
                window.open("https://live.beachhacks.com");
            }
        }
    }

    var enableNotification = function(){
        // console.log("enabled");
        notificationEnabled = !notificationEnabled;

        if(!Notification){
            alert('Desktop notifications not available is your browser. Try Chromium.')
            return ;
        }

        if(Notification.permission !== "granted"){
            Notification.requestPermission();
        }
    }

    var checkEnabled = function(){

        return notificationEnabled;
    }

    var service = {
        enableNotification  : enableNotification,
        checkEnabled        : checkEnabled
    };

    // Listening on Announcement
    AngFirebase.onAnnouncement(function(){
        notify(AngFirebase.getAnnouncement());
    })

    return service;
}]);




// function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }
