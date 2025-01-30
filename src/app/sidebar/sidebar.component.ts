import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  isDarkMode: boolean = false;

  /***dark */
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle("dark-mode");

    const circulo = document.querySelector(".circulo");
    if (circulo) {
      circulo.classList.toggle("prendido");
    }
  }



/**** SIDEBAR */

  toggleList(event:Event):void{
 const target = event.currentTarget as HTMLElement;
 const menu = target.nextElementSibling as HTMLElement;

if (menu){

  target.classList.toggle('arrow');
   const isOpen = menu.style.height && menu.style.height !== '0px';
   menu.style.height = isOpen ? '0px' : `${menu.scrollHeight}px`;
}


  }
  toggleMiniList(): void {
    const list = document.querySelector('.list');
    const span = document.querySelector('.nombre-pagina span');

    if (list) {
      list.classList.toggle('mini-list');
      
      
       if (list.classList.contains('mini-list')) {
      span?.classList.add('oculto');
    } else {
    span?.classList.remove('oculto');
}
}
}
}

