import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../model/User";

@Pipe({
    name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform{

    transform(users: User[], searchTerm: string) : User[]{
        console.log('searchTerm : ' , searchTerm);
        if(!users || !searchTerm){
            return users;
        }
        return users.filter( item => item.country.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }

}