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
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule }  from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    ExpenseFormComponent,
    ExpenseListComponent,
    HeaderComponent,
    ExpenseDetailComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [ExpensiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
