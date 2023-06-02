import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseDetailComponent } from './expense-list/expense-detail/expense-detail.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';


const routes: Routes = [
  {
    path: 'expenses', component: ExpenseListComponent

  },
  { path: 'expenses/:id', component: ExpenseDetailComponent },
  {
    path: 'register', component: ExpenseFormComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
