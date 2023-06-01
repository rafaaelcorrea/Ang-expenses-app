import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import {  ExpensiveService } from './expense-service';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { HeaderComponent } from './header/header.component';
import { ExpenseDetailComponent } from './expense-list/expense-detail/expense-detail.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [

  {path:'expenses' , component: ExpenseListComponent},
  {path:'expenses/:id' , component: ExpenseDetailComponent},
 ];
 
@NgModule({
  declarations: [
    AppComponent,
    ExpenseFormComponent,
    ExpenseListComponent,
    HeaderComponent,
    ExpenseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ExpensiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
