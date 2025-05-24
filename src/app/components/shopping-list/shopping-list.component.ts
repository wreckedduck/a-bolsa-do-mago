import { Component, Input } from '@angular/core';
import { Product } from '../../services/products.service';
import { ProductItemComponent } from "../product-item/product-item.component";

export interface ShoppingListItem {
  id: string
  imgUrl: string
  title: string
  soldCount: number
  price: number
  discount: number
  isInStock: boolean
  stars: number
}

@Component({
  selector: 'app-shopping-list',
  imports: [ProductItemComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {
  @Input() title?: string
  @Input() items: Product[] = []
}
