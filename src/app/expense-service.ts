import { Injectable } from "@angular/core";
import { Expense } from "./expense-form/shared/expense-model";



@Injectable({
  providedIn: 'root'
})
export class ExpensiveService {

    public  expenses: Expense[] =[] ;

    constructor(){
      console.log("Iniciou");
    }

    //retorna uma lista de todas as despesas:
     getExpenses(): Expense[]{
        return this.expenses;
    }
    //retorna uma despesa com base em seu ID:
     getExpenseById(id: number) : Expense | undefined{
        return this.expenses.find(expense => expense.id === id);
    }


    //adiciona uma nova despesa à lista:
     addExpense( data: Expense){
        this.expenses.push(data);
         console.log(this.expenses);
         this.expenses.forEach((element , index) => {data.id = index});
    }
    //remove uma despesa da lista com base em seu ID:

     deleteExpense(id: number){
        this.expenses.splice(id);
    }

    //atualiza uma despesa existente com base em seu ID:
    /*
    updateExpense(expense: Expense){

    }*/

}11
