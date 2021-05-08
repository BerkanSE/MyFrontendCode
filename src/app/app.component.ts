import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Component Declaration
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'MyReCapProject';
  user: string ="Berkan Senger";
 
  private isDark = false;
 
  //Tek tırnak veya çift tırnak farketmez
 
  constructor(private router:Router){ }

  // ngOnInit(): void {

  // }

  @HostBinding('class')
  get themeMode() {
    return this.isDark? 'theme-dark' : 'theme-light';
  }

  switchMode(isDarkMode : boolean){
    this.isDark = isDarkMode;
  }

}
//Datayı yönettiğimiz yer