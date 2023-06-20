import { Injectable, OnInit } from "@angular/core";
import { Expense } from "./expense-form/shared/expense-model";



@Injectable({
  providedIn: 'root'
})
export class ExpensiveService implements OnInit{

    
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
         this.saveDataLocStorage();
    }
    //remove uma despesa da lista com base em seu ID:

     deleteExpense(id: number){
        this.expenses.splice(id ,1);
        this.loadDataLocStorage();
      }

     loadDataLocStorage() {
      const storedData = localStorage.getItem('expanses');
      if (storedData) this.expenses = JSON.parse(storedData); 
     }

     saveDataLocStorage() {
      localStorage.setItem('expanses', JSON.stringify(this.expenses));
     }

     setDataLocStorage( data: Expense[] =[]){
      this.expenses = data;
     }

    ngOnInit(): void {
      this.loadDataLocStorage();
    }

}