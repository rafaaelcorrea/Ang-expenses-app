import { Component , OnInit , } from '@angular/core';
import {  ExpensiveService } from '../expense-service';
import { Expense } from './shared/expense-model';
//import { createNumberMask } from 'ngx-mask';

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
    registerDay: Date= new Date();
    activeMessageError!: boolean;
    currentDate!: string;
    fortmattedNumber!: string;

    constructor(private expenseService: ExpensiveService){ }

  pushExpensives(){
  if (this.expenseValue <= 0 || isNaN(this.expenseValue) ){
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
    const today: Date = new Date();
    this.currentDate = today.toISOString().split('T')[0];
    /*
    //const regexPattern :any = /^(\d{1.3})(?=(\d{3})+(?!\d)(\.\d{2})?$)/
    //this.fortmattedNumber = this.expenseValue.toFixed(2).replace(regexPattern,'$2,');
     //money mask
    const formatted: any = new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency:'USD'
    }).format(this.expenseValue);

    this.expenseValue = formatted;
    console.log(this.expenseValue);
    */
  }
  
 }
