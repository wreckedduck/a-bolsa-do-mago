import { Component, inject, OnInit } from '@angular/core'
import { InventoryComponent } from "./components/inventory/inventory.component";
import { ShoppingListComponent } from "../../components/shopping-list/shopping-list.component";
import { ProductService, Product } from '../../services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InventoryComponent, ShoppingListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productService = inject(ProductService)

  highlightedProducts: Product[] = []
  shoppingListItems: Product[] = []


  ngOnInit(): void {
    this.productService.getHighlightedProducts().subscribe((products) => {
      console.log('getHighlightedProducts', products)
      this.highlightedProducts = products
    })

    this.productService.getAllProducts().subscribe((products) => {
      console.log('getAllProducts', products)
      this.shoppingListItems = products
    })

    console.log(this.highlightedProducts)
    console.log(this.shoppingListItems)
  }
}
