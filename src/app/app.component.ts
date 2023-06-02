import { Component , OnInit} from '@angular/core';
import { ExpensiveService } from './expense-service';
import { Expense } from './expense-form/shared/expense-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  expensiveStorageApp!: Expense[];
  loadedOptionMenu: string = 'home';
  id!:number;
  constructor(  private expenseService: ExpensiveService){

  }

  ngOnInit(){
   debugger;
    this.expensiveStorageApp = this.expenseService.getExpenses();
  }

}
