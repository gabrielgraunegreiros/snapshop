import { NgModule } from '@angular/core';
import { DetailsHomeComponent } from './pages/details-home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'by/:nombre',
        component: DetailsHomeComponent
    }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductDetailsRoutingModule { }
