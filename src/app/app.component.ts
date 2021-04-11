import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Component Declaration
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string = 'MyReCapProject';
  user: string ="Berkan Senger";
  //Tek tırnak veya çift tırnak farketmez
  constructor(private router:Router){ }

  ngOnInit(): void {

  }

}
//Datayı yönettiğimiz yer