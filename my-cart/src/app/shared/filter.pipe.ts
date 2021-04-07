import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'filter'
})
export class FilterPipe implements PipeTransform{
    constructor(){

    }
    transform(inputArray:Array<any>,filterKey:string,filterValue:string){
        return filterValue ? inputArray.filter(arrayElement => arrayElement[filterKey] === filterValue) : inputArray;
    }
}