let canUseLocalStorage = false;

(function(){
	try {
		const uid = 'Date: ' + new Date().getTime();
		localStorage.setItem(uid, uid);
		if(localStorage.getItem(uid) === uid){
			localStorage.removeItem(uid);
			canUseLocalStorage = true;
		}
	} catch(ex){}
}());