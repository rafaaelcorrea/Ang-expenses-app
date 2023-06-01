import { Component , Input , } from '@angular/core';
import {  ExpensiveService } from '../expense-service';
import { Expense } from './shared/expense-model';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent{

    expensesStorageInput!: Expense[];
    id?:number;
    selectedExpenseType!: string;
    expenseValue!: number;
    comments!: string;

    constructor(private expenseService: ExpensiveService){ }

  pushExpensives(){
    ExpensiveService.addExpense( new Expense( this.id ,this.selectedExpenseType ,this.expenseValue ,
      this.comments));
  }
}
