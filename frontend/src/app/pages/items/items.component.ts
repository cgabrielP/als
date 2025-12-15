import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {

  items: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getItems().subscribe({
      next: data => this.items = data,
      error: err => console.error('Error API', err)
    });
  }
}
