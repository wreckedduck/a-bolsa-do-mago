import { Component, Input } from '@angular/core';
import { Product } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() product?: Product
  inCart = false
  inWishlist = false

  stars = [1, 2, 3, 4, 5]
}
