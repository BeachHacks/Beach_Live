beachLiveApp.service('data', function() {
    
    //Temporay Data holder, will be move to firebase
    var data = {
    	test: "test String",
    	tab: {
    		ANNOUCEMENTS	: "test",
    		MAP				: "test",
    		MENTOR			: "test",
    		HARDWARE		: "test",
    		SONG			: "test",
    		DEVPOST			: "test"
    	}
    };

    return data;
});