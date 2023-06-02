import { Component , OnInit } from '@angular/core';
import { ExpensiveService } from '../expense-service';
import { Expense } from '../expense-form/shared/expense-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent  implements OnInit {

  expenses!: Expense[];
  selectedExpenseIdV2!:number;
  constructor(private _router: Router ,  private expenseService: ExpensiveService){}

  ngOnInit() {

    //this.expenses = ExpensiveService.expenses;
    this.expenses = this.expenseService.getExpenses();
  }

  deleteExpense(id: number){
    //ExpensiveService.deleteExpense(id);
    this.expenseService.deleteExpense(id);
  }

 showDetails(id: number){
  
  //this._router.navigate(['/expense/' + id]);
  //ExpensiveService.getExpenseById(id);
    this.expenseService.getExpenseById(id);
    this.selectedExpenseIdV2 = id;
    console.log(this.selectedExpenseIdV2);
}
}
