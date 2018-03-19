function isEmpty(value) {
    if(value == null) {
        return true;
    }
    if(Array.isArray(value) || typeof value== 'string' || 
    typeof value.splice == 'function') {
        return value.lenght;
    }
    for(const key in value){
        if(hasOwnProperty.call(value,key)){
            return false;
        }
    }
    return true;
}