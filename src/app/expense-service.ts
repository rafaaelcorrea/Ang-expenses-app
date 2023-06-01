import { Injectable } from "@angular/core";
import { Expense } from "./expense-form/shared/expense-model";
import { Observable } from "rxjs";

@Injectable()
export class ExpensiveService {

    public expenses: Expense[] =[] ;

    constructor(){}

    //retorna uma lista de todas as despesas:
    getExpenses( ): Expense[]{
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
         /*
         for ( let i = data.id ; i < this.expenses.length; i++) {
            data.id = i;
         }
         */
    }
    //remove uma despesa da lista com base em seu ID:
    deleteExpense(id: number){
        this.expenses.splice(id);
    }

    //atualiza uma despesa existente com base em seu ID:
    /*
    updateExpense(expense: Expense){

    }*/

}