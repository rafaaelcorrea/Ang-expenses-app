import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Expense } from 'src/app/expense-form/shared/expense-model';
import { ExpensiveService } from 'src/app/expense-service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {
  expenses!: Expense | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private expenseService: ExpensiveService){
  }

  ngOnInit(): any {
    //get item id by url
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      this.expenses = this.expenseService.getExpenseById(Number(productId));
      this.expenseService.loadDataLocStorage();
    });

  }


}
