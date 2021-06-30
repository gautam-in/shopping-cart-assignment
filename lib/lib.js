const arrayChunk = (array = [])=>{
    let chunk = 4;
    let chunkArr = [];
    for (let i=0,j=array.length; i<j; i+=chunk) {
         chunkArr.push(array.slice(i,i+chunk));
    }
    return chunkArr;
}

export {
    arrayChunk
}