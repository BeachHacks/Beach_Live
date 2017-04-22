beachLiveApp.service('data', ['AngFirebase', function(AngFirebase) {
    


    var data = {
    	tab: {
    		ANNOUNCEMENT	: "announcement",
            SCHEDULE        : "schedule",
    		MAP				: "map",
    		MENTOR			: "mentor",
    		HARDWARE		: "https://hardware.mlh.io/",
    		SONG			: "song"
    	},
        media : {
            map_campus  : "https://i.imgur.com/hgsFmwP.png", // Campus img
            map_venue   : "https://i.imgur.com/m949vC0.png",  // venue img
            pyramid     : "https://i.imgur.com/yHASg5C.png"
        }
    };

    return data;
}]);




// function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }
