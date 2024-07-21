import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

import { ProductService } from '../../core/services/product.service';
import { Product } from '../../shared/models/product.model';
import { PrimengModule } from '../../shared/modules/primeng.module';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-consultar-imoveis',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, RippleModule, StyleClassModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './consultar-imoveis.component.html',
  styleUrl: './consultar-imoveis.component.scss',
  providers: [ProductService]
})
export class ConsultarImoveisComponent {
  products: Product[] = [];

  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsSmall().then((products) => {
          this.products = products;
      });

      this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }

  getSeverity(status: string) {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warning';
          case 'OUTOFSTOCK':
              return 'danger';
          default:
            return undefined
      }
  }
}