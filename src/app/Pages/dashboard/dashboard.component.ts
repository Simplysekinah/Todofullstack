import { Component } from '@angular/core';
import { AuthService } from '../../Service/Auth/auth.service';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapBagPlusFill,bootstrapPlusCircleFill } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-dashboard',
  imports: [NgIcon],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  viewProviders:[provideIcons({bootstrapBagPlusFill,bootstrapPlusCircleFill})]
})
export class DashboardComponent {
  
}
