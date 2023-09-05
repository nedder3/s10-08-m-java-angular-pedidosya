import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {ProductCardComponent} from "@root/restaurant/components/product-card/product-card.component";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MenuButtonComponent} from "@root/restaurant/components/menu-button/menu-button.component";
import {Menu} from "@models/menu.model";
import {ButtonNavBackComponent} from "@shared/components/button-nav-back/button-nav-back.component";

@Component({
  selector: 'app-restaurant-details-main',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatButtonToggleModule, MatIconModule, ProductCardComponent, FormsModule, MenuButtonComponent, ButtonNavBackComponent],
  templateUrl: './restaurant-details-main.component.html',
  styleUrls: ['./restaurant-details-main.component.scss']
})
export class RestaurantDetailsMainComponent {
  @Input() menusTopSelling!: Menu | null;
  @Input() menusDiscount!: Menu | null;
  @Input() menus!: Menu[] | null;

  /**/
}
