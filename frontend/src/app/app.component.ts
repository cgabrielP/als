import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { ItemsComponent } from './pages/items/items.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemsComponent ],
  templateUrl: './app.component.html'
})

export class AppComponent {
@ViewChild(ItemsComponent) itemsComponent!: ItemsComponent;

  productName = '';
  selectedFile: File | null = null;

  constructor(private http: HttpClient) { }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  submitProduct() {
    const formData = new FormData();

    formData.append('nombre', this.productName);
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];

    formData.append('fecha', formattedDate);
    if (this.selectedFile) {
      formData.append('imagen', this.selectedFile);
    }

    this.http.post(`${environment.apiUrl}/productos/`, formData)
      .subscribe({
        next: res => {
          console.log('Producto creado', res);
          this.productName = '';
          this.selectedFile = null;
          this.itemsComponent.loadItems();
        },
        error: err => console.error('Error', err)
      });
  }
}
