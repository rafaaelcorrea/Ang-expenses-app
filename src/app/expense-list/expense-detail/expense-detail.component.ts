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
export class ExpenseDetailComponent {

  //expenses!: Expense | undefined;
  //expense!: {id:number, expenseType: string , value: number, comments: string}
  //expense:any;
  //paramsSubscription!: Subscription;

  @Input() selectedExpenseId!: number;
  selectedExpense!: any;

  constructor(
    private route: ActivatedRoute,
    private expenseService: ExpensiveService){
  }

  ngOnChanges() {
    if (this.selectedExpenseId) {
      this.expenseService.getExpenseById(this.selectedExpenseId);
    }
  }
}
