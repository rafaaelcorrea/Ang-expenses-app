import { Component , OnInit } from '@angular/core';
import { ExpensiveService } from '../expense-service';
import { Expense } from '../expense-form/shared/expense-model';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent  implements OnInit {

  expenses!: Expense[];

  constructor(  private expenseService: ExpensiveService){}

  ngOnInit() {
    
    this.expenses = this.expenseService.expenses;
  }

  deleteExpense(id: number){
    this.expenseService.deleteExpense(id);
  }

getExpenseById(id: number){
  this.expenseService.getExpenseById(id);
}
}
