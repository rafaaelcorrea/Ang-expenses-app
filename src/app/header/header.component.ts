import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  @Output() optionSelected = new EventEmitter<string>();
  
  onSelect( optionMenu: string){
    this.optionSelected.emit(optionMenu);
  }
}
