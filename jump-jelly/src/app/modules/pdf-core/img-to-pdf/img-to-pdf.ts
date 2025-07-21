import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { jsPDF } from 'jspdf';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-img-to-pdf',
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './img-to-pdf.html',
  styleUrl: './img-to-pdf.scss',
})
export class ImgToPdf {
  imageFiles: File[] = [];
  imagePreviews: string[] = [];

  constructor (private cdr: ChangeDetectorRef) {

  }

async onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (!input.files) return;

  this.imageFiles = Array.from(input.files);
  const previews: string[] = [];

  for (const file of this.imageFiles) {
    const preview = await this.readFileAsDataURL(file);
    previews.push(preview);
    console.log(preview, ": loaded")
  }
  
  this.imagePreviews = previews;
  this.cdr.detectChanges();

  // Manually trigger change detection
}


  private readFileAsDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  removeImage(image: any) {
    this.imagePreviews.filter(img => img === image);
    console.log(image, this.imagePreviews)
  }


  convertToPdf() {
    const pdf = new jsPDF();

    this.imagePreviews.forEach((image,index) => {
      const imgProps = pdf.getImageProperties(image);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
      if (index > 0) {
        pdf.addPage();
      }

      pdf.addImage(image, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    })

    pdf.save('saved-images');
  }
}
