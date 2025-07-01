import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { bootstrapBellFill, bootstrapHeart, bootstrapHeartFill, bootstrapSearch, bootstrapSliders, bootstrapSuitHeart, bootstrapPersonFill, bootstrapHouseFill, bootstrapGear, bootstrapGearFill, bootstrapCollection, bootstrapHouse, bootstrapCollectionFill } from '@ng-icons/bootstrap-icons'
import { NgIcon, provideIcons } from '@ng-icons/core';
import { AuthService } from '../../Service/Auth/auth.service';


@Component({
  selector: 'app-layout',
  imports: [NgIcon, CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  viewProviders: [provideIcons({ bootstrapSearch, bootstrapHeart, bootstrapSliders, bootstrapSuitHeart, bootstrapHeartFill, bootstrapGear, bootstrapBellFill, bootstrapPersonFill, bootstrapHouseFill, bootstrapGearFill, bootstrapCollection, bootstrapHouse, bootstrapCollectionFill })]

})
export class LayoutComponent {
  activeTab: string = ''
  message!: string | null;
  constructor(private service: AuthService, private router: Router) { }
  ngOnInit() {
    this.service.getUserData().subscribe((response) => {
      console.log(response,'res');
      console.log(localStorage.getItem('message'));
      const mes = localStorage.getItem('message')
      console.log(mes,'mmmmm');
      this.message = mes
      console.log(this.message);
    },
      (error) => {
        if (error.status === 500) {
          this.router.navigate(['/signup'])
        }
      }
    )
  }
  toggleIcon(tab: string) {
    this.activeTab = tab
  }
}
