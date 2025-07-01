import { Component } from '@angular/core';
import { AuthService } from '../../Service/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // message:string=''
  // constructor(private service:AuthService,private router:Router){}
  // NgOnInit(){
  //   this.service.getUserData().subscribe((response)=>{
  //     console.log(response);
  //     this.message = localStorage.getItem('message')
  //   },
  //   (error)=>{

  //   }
  // )
  // }
}
