import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../catalog/productitem/productitem.component';
import { ProductListComponent } from '../catalog/productlist/productlist.component';


@NgModule({
  declarations: [
    ProductItemComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent,
    ProductItemComponent
  ]
})
export class CatalogModule { }
