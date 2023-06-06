import { Component , OnInit , } from '@angular/core';
import {  ExpensiveService } from '../expense-service';
import { Expense } from './shared/expense-model';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit{

    expensesStorageInput!: Expense[];
    id?:number;
    selectedExpenseType!: string;
    expenseValue!: number;
    comments!: string;
    expenseDate!: Date;
    registerDay: Date = new Date();
    activeMessageError!: boolean;
    currentDate!: string;

    constructor(private expenseService: ExpensiveService){ }

  pushExpensives(){
  if (this.expenseValue <= 0){
      this.activeMessageError = true;
   }else{
    this.expenseService.addExpense( new Expense( this.id ,this.selectedExpenseType ,this.expenseValue ,
      this.comments, this.expenseDate ,this.registerDay ));
   }
  }

   closeMessageError(){
    this.activeMessageError = false;
  }

  ngOnInit(){
    const today = new Date();
    this.currentDate = today.toISOString().split('T')[0];
  }

}
