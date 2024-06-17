import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarPageComponent } from './pages/sidebar-page.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';



@NgModule({
  declarations: [
    SidebarPageComponent,
    SidebarItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarPageComponent,
    SidebarItemComponent
  ]
})
export class SidebarModule { }
