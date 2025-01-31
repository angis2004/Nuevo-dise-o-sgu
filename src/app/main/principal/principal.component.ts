import { Component, EventEmitter,Output, Input } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  
  @Input() sidebar?: string;

  @Output() sidebarChange = new EventEmitter<string>();

  emitTiTleChange(){
    this.sidebarChange.emit(this.sidebar);
    console.log(this.sidebar)
    //DISPARAR UN OBJETO
  }

}

