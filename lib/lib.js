const arrayChunk = (array = [],chunk=4)=>{
    let chunkArr = [];
    for (let i=0,j=array.length; i<j; i+=chunk) {
         chunkArr.push(array.slice(i,i+chunk));
    }
    return chunkArr;
}

const isEven = (number)=>{
    if(typeof number === 'number'){
        if( (number%2) == 0)
            return true
        else
            return false    
    }else{
        return false;
    }
}

const subStr = (str,len) => {
    if(str.length > len ){
        return str.substr(0,len).concat("...")
    }else{
        return str
    }
}

export {
    arrayChunk,
    isEven,
    subStr
}