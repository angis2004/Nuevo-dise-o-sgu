import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  /***dark */
  toggleDarkMode(event: Event): void {
    console.log('Modo oscuro activado/desactivado');
    const body = document.body;  
    body.classList.toggle('dark-mode'); 
    const circulo = document.querySelector('.circulo') as HTMLElement;  
    circulo?.classList.toggle('prendido');
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

