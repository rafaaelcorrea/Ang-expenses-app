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

  constructor(private _router: Router){}

  ngOnInit() {
    debugger;
    this.expenses = ExpensiveService.expenses;
  }

  deleteExpense(id: number){
    ExpensiveService.deleteExpense(id);
  }

getExpenseById(id: number){
  debugger;
  this._router.navigate(['/expense/' + id]);
  ExpensiveService.getExpenseById(id);
}
}
