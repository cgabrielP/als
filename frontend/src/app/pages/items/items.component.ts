import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {

  items: any[] = [];
  apiBaseUrl = environment.apiUrl.replace('/api', '');


  constructor(private api: ApiService) { }

  loadItems() {
    this.api.getItems().subscribe(data => this.items = data);
  }

  ngOnInit() {
    this.loadItems();
  }
   getImageUrl(imagePath: string | null): string {
    if (!imagePath) return 'assets/placeholder-no-image.png';    
    return `${this.apiBaseUrl}${imagePath}`;
  }
}
