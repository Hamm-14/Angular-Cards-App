import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './Components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { Card } from '../Types/Card';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HttpService } from './Services/HttpService';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CardComponent,
    NavbarComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public httpService: HttpService) {}

  cards: Card[] | undefined = [];
  currentPage: number = 1;
  loading: boolean = true;
  searchedCards: boolean = false;

  ngOnInit(): void {
    this.httpService.fetchData(this.currentPage).subscribe((cards) => {
      this.cards = cards;
      this.loading = false;
    });
  }

  loadMore(): void {
    this.httpService.fetchData(this.currentPage + 1).subscribe((newCards) => {
      this.cards = [...(this.cards || []), ...newCards];
      this.currentPage += 1;
      this.loading = false;
    });
  }

  cardsSearch(cardName: string): void {
    this.loading = true;
    this.searchedCards = true;
    this.httpService.searchCards(cardName).subscribe((cards) => {
      this.cards = cards;
      this.currentPage = 1;
      this.loading = false;
    });
  }
}
