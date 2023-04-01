import { Component, Input } from '@angular/core';
import { IProductModel } from './item-card.model'

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input() product!: IProductModel
}
