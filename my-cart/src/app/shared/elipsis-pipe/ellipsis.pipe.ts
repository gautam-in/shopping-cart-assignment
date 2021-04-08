import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name : 'ellipsis'  
})

export class EllipsisPipe implements PipeTransform{
    transform(inputString:string,wordLength:number){
        return inputString.length > wordLength ? inputString.slice(0,wordLength)+ '...' : inputString
    }
}