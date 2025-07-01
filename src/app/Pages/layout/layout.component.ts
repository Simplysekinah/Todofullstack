import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import {bootstrapBellFill, bootstrapHeart, bootstrapHeartFill, bootstrapSearch, bootstrapSliders, bootstrapSuitHeart,bootstrapPersonFill,bootstrapHouseFill,bootstrapGear,bootstrapGearFill,bootstrapCollection,bootstrapHouse,bootstrapCollectionFill} from '@ng-icons/bootstrap-icons'
import { NgIcon, provideIcons } from '@ng-icons/core';


@Component({
  selector: 'app-layout',
  imports: [NgIcon,CommonModule,FormsModule,RouterLink,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
    viewProviders:[provideIcons({bootstrapSearch,bootstrapHeart,bootstrapSliders,bootstrapSuitHeart,bootstrapHeartFill,bootstrapGear,bootstrapBellFill,bootstrapPersonFill,bootstrapHouseFill,bootstrapGearFill,bootstrapCollection,bootstrapHouse,bootstrapCollectionFill})]

})
export class LayoutComponent {
  activeTab:string = ''
  toggleIcon(tab:string){
    this.activeTab =tab
  }
}
