import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Output() searchCard: EventEmitter<string> = new EventEmitter();
  search: string = '';

  onSubmit() {
    this.searchCard.emit(this.search);
  }

  reload() {
    window.location.reload();
  }
}
