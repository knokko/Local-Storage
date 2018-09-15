function createLocalStorageOutput(key){
	if(canUseLocalStorage){
		return new LocalStorageBitOutput(key);
	}
	else {
		return null;
	}
}

function LocalStorageBitOutput(key){
	this.key = key;
	this.string = '';
	this.boolIndex = 0;
	this.currentBools = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
}

extendProtoType(BitHelper.StringBitOutput, LocalStorageBitOutput);

LocalStorageBitOutput.prototype.onTerminate = function(){
	localStorage.setItem(this.key, this.string);
};