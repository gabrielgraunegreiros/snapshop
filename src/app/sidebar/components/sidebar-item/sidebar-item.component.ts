import { Component, Input } from '@angular/core';
import { Product } from '../../../products/interfaces/product.interface';

@Component({
  selector: 'sidebar-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.css'
})
export class SidebarItemComponent {
  @Input()
  public item: Product | null= null;

  // {
  //   categoria: 'Tecnología',
  //   descripcion: 'Hola',
  //   imagen: 'https://cdn.idealo.com/folder/Product/202182/3/202182321/s11_produktbild_gross_3/sony-dualsense-edge-wireless-controller.jpg',
  //   nombre: 'Dualsense PS5',
  //   precio: 1500
  // };
}
