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

export {
    arrayChunk,
    isEven
}