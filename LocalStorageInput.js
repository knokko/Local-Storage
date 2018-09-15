function createLocalStorageInput(key){
	if(canUseLocalStorage){
		const value = localStorage.getItem(key);
		if(value !== null){
			return new BitHelper.StringBitInput(value);
		}
		else {
			return undefined;
		}
	}
	else {
		return null;
	}
}