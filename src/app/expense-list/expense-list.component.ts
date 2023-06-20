import { Component, OnInit, Input } from '@angular/core';
import { ExpensiveService } from '../expense-service';
import { Expense } from '../expense-form/shared/expense-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  public expenses: Expense[] = [];
   @Input() iIndex!: number;
  constructor(private expenseService: ExpensiveService, private _router: Router) { }

  ngOnInit(){
    this.expenses = this.expenseService.getExpenses();
    this.expenseService.loadDataLocStorage();
  }

  deleteExpense(id: number) {
    this.expenseService.deleteExpense(id);
    this.expenseService.setDataLocStorage(this.expenses);
    this.expenseService.saveDataLocStorage();

  }

  getExpenseById(id: number) {
    this._router.navigate(['/expenses/' + id]);
    this.expenseService.saveDataLocStorage();
  }
}
