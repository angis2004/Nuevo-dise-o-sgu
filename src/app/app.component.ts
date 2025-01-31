import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IconosService } from './services/iconos.service';
//import { Title } from '@angular/platform-browser';
import {Breadcrumb, BreadcrumbService} from "angular-crumbs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent  implements OnInit{
  title = 'umc';//custom icon
sidebar: string|undefined;

constructor(
 // private titleService : Title,
  private iconService : IconosService,
  //private breadcrumbService : BreadcrumbService
){
  this.iconService.globalIcons();

}
  ngOnInit(): void {
    //this.breadcrumbService.breadcrumbChanged.subscribe( crumbs => {
   // this.titleService.setTitle(this.createTitle(crumbs));
  

  // private createTitle(routesCollection: Breadcrumb[]){
  //   const title = 'umc';
  //   const titles = routesCollection.filter( (route) => route.displayName);

  //   if (!titles.length){ return title; }

  //   const routeTitle  = this.titlesToString(titles);
  //   return `${routeTitle} ${title}`


  // }


  // private titlesToString(titles:any){
  //   return titles.reduce((prev:any, curr:any) =>{
  //     return `${curr.displayName} - ${prev}`;
  //   }, '');
  // }
}

}





