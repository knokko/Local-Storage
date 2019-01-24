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
	this.array = new Uint16Array(100);
	this.boolIndex = 0;
	this.index = 0;
	this.currentBools = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
}

extendProtoType(BitHelper.CharArrayBitOutput, LocalStorageBitOutput);

LocalStorageBitOutput.prototype.onTerminate = function(){
	localStorage.setItem(this.key, this.toString());
};