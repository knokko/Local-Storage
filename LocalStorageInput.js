function createLocalStorageInput(key){
	if(canUseLocalStorage){
		const value = localStorage.getItem(key);
		if(value !== null){
			return new BitHelper.CharArrayBitInput(BitHelper.uint16ArrayFromString(value));
		}
		else {
			return undefined;
		}
	}
	else {
		return null;
	}
}