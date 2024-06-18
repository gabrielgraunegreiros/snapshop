import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarPageComponent } from './pages/sidebar-page.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { RouterModule } from '@angular/router';
import { MainButtonModule } from '../shared/main-button.module';



@NgModule({
  declarations: [
    SidebarPageComponent,
    SidebarItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainButtonModule
  ],
  exports: [
    SidebarPageComponent,
    SidebarItemComponent
  ]
})
export class SidebarModule { }
