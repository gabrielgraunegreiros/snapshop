import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarPageComponent } from './pages/sidebar-page.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarPageComponent,
    SidebarItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarPageComponent,
    SidebarItemComponent
  ]
})
export class SidebarModule { }
