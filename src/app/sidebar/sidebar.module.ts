import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarPageComponent } from './pages/sidebar-page.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SidebarPageComponent,
    SidebarItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    SidebarPageComponent,
    SidebarItemComponent
  ]
})
export class SidebarModule { }
