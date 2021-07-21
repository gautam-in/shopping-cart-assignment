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

const mapArrayKey = (arr) => {
    console.log("arr",arr)
    if(arr.length > 0){
        const arrKey = arr.map((data)=>{
            let {id} = data ;
            let arObj = {}
            arObj[id] = data
            return arObj
        })
        return arrKey
    }else{
        return arr
    }
}

const isKeyExists = (arr,key)=>(arr.indexOf(key) > 0 ? true : false)

export {
    arrayChunk,
    isEven,
    subStr,
    mapArrayKey,
    isKeyExists
}