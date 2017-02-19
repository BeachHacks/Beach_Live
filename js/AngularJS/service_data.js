beachLiveApp.service('data', function() {
    
    //Temporay Data holder, will be move to firebase
    var data = {
    	test: "test String",
    	tab: {
    		ANNOUCEMENTS	: "anouncement",
    		MAP				: "map",
    		MENTOR			: "mentor",
    		HARDWARE		: "test",
    		SONG			: "test",
    		DEVPOST			: "test"
    	},
    	anouncement_content : ["Content 1", "Content 2", "Content 3"]
    };

    return data;
});




// function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }