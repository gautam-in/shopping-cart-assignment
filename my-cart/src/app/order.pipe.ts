import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'order'
})

export class OrderPipe implements PipeTransform{
    transform(inputArray:any[],key:string){
        inputArray = inputArray.sort((value1,value2)=>{
            return value1[key] > value2[key] ? 1 : ((value1[key] < value2[key]) ? -1 : 0);
        })

        return inputArray;
    }
}