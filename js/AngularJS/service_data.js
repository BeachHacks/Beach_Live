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
    	anouncement_content : [{timestamp : "10 pm", message: "Totally did not copy HackUCI"}, {timestamp : "11 pm", message: "Sure Sure"},{timestamp : "12 pm", message: "message content"},
    	{timestamp : "11 pm", message: "Lorem ipsum dolor sit amet, duis similique in mei, no mea ullum vituperata, ius eu vocent reprimique. Ne erat quas concludaturque mei, suas graece quodsi pro an. Omnis salutatus accommodare sea ex, cum commodo blandit disputationi in. Quidam graecis accommodare his ea, in inani temporibus vis. Id mel melius scripserit.Has alia expetenda an, et quod platonem adipiscing duo, qui mundi invidunt sadipscing in. In cum modo consul causae. Eu quidam aeterno pro. Eos te impedit scaevola fabellas, vix et alia denique postulant. Ex quo eleifend forensibus referrentur, pri ex eius recusabo. At verear nostrum duo, partem meliore verterem ne pro.Mel quod mucius epicurei cu, atqui possim ne has. Nam legere persius id. An error patrioque mea, cu veri altera admodum mel. Has invenire definitionem ut. At cum nullam maluisset repudiare.Eu errem delectus oporteat qui. Nam modo facer latine ad, ut vim mollis perpetua suscipiantur. His ad wisi prodesset pertinacia, ferri facer ei mea, no utinam equidem has. His an regione labitur oportere. Vis etiam accusam vivendum te.Homero fastidii ut eos. Doctus neglegentur has no, id vis invidunt urbanitas assueverit. Te clita congue consequat mei, sea an utinam primis necessitatibus. Rebum doctus timeam eu pro."},
    	{timestamp : "10 pm", message: "message content"},{timestamp : "10 pm", message: "message content"},{timestamp : "10 pm", message: "message content"},{timestamp : "10 pm", message: "message content"},{timestamp : "10 pm", message: "message content"}]
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