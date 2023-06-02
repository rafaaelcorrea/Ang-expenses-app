import { Component , OnInit} from '@angular/core';
import { ExpensiveService } from './expense-service';
import { Expense } from './expense-form/shared/expense-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  expensiveStorageApp!: Expense[];
  loadedOptionMenu: string = 'home';
  id!:number;
  constructor(  private expenseService: ExpensiveService){

  }

  onNavigate( optionMenu: string){
    this.loadedOptionMenu = optionMenu;
  }

}
