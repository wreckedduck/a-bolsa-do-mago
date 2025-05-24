import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, map } from 'rxjs'
import { environment } from '../../environments/environment'

export interface Product {
    id: string
    title: string
    soldCount: number
    price: number
    discount: number
    isInStock: boolean
    stars: number
    highlight: boolean
    img: {
        url: string
        fileName: string
        mimeType: string
    }
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private endpoint = environment.hygraphEndpoint
  private token = environment.hygraphToken

  constructor(private http: HttpClient) {}

  getHighlightedProducts(): Observable<Product[]> {
    const query = `
      query {
        shopItems(where: { highlight: true }) {
          id
          title
          soldCount
          price
          discount
          isInStock
          stars
          highlight
          img {
            url
            fileName
            mimeType
          }
        }
      }
    `

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    })

    return this.http
      .post<any>(
        this.endpoint,
        { query },
        { headers }
      )
      .pipe(map(res => res.data.shopItems))
  }

  getAllProducts(): Observable<Product[]> {
    const query = `
      query {
        shopItems(where: { highlight: false }) {
            id
            title
            soldCount
            price
            discount
            isInStock
            stars
            highlight
            img {
            url
            fileName
            mimeType
            }
        }
        }
    `
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`
    })

    return this.http
      .post<any>(
        this.endpoint,
        { query },
        { headers }
      )
      .pipe(map(res => res.data.shopItems))
  }
}
