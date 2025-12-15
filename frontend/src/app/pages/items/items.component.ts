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

  loadItems() {
  this.api.getItems().subscribe(data => this.items = data);
}

ngOnInit() {
  this.loadItems();
}
}
