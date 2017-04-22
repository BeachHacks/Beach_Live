beachLiveApp.service('data', ['AngFirebase', function(AngFirebase) {



    var data = {
    	test: "test String",
    	tab: {
    		ANNOUCEMENTS	: "announcement",
            SCHEDULE        : "schedule",
    		MAP				: "map",
    		MENTOR			: "mentor",
        HARDWARE    :  "hardware",
    		SONG			: "song"
    	}
    	// announcement_content : getAnnouncement
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
