import { Pipe , PipeTransform} from "@angular/core";

@Pipe({
    name:'filterByType',
    pure:false
})

export class FilterByType implements PipeTransform {
    transform(items:any[],filter:string):any{
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.field == filter);  
    }
}