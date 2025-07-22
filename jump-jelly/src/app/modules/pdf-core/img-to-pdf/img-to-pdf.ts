import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { jsPDF } from 'jspdf';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-img-to-pdf',
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule, MatSelectModule],
  templateUrl: './img-to-pdf.html',
  styleUrl: './img-to-pdf.scss',
})
export class ImgToPdf {
  pdfName: string = "ImageToPdf"
  pageFormat: string = "a0";
  pageOrientation: "portrait" | "landscape" = "portrait"
  imageFiles: File[] = [];
  imagePreviews: string[] = [];

  constructor(private cdr: ChangeDetectorRef) {

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
    this.imagePreviews = this.imagePreviews.filter(img => img !== image);
  }

  clearSelected() {
    this.imagePreviews = [];
  }


  convertToPdf() {
    console.log(this.pageOrientation, this.pageFormat);

    const pdf = new jsPDF({
      orientation: this.pageOrientation,
      format: this.pageFormat,
      unit: 'mm'
    });

    this.imagePreviews.forEach((image, index) => {
      const imgProps = pdf.getImageProperties(image);
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const ratio = imgProps.width / imgProps.height;
      let imgWidth = pageWidth * 0.9;
      let imgHeight = imgWidth / ratio;

      if (imgHeight > pageHeight * 0.9) {
        imgHeight = pageHeight * 0.9;
        imgWidth = imgHeight * ratio;
      }

      const x = (pageWidth - imgWidth) / 2;
      const y = (pageHeight - imgHeight) / 2;

      if (index > 0) {
        pdf.addPage();
      }

      pdf.addImage(image, 'JPEG', x, y, imgWidth, imgHeight);
    });

    pdf.save((this.pdfName?.trim() || 'ImageToPdf') + '.pdf');
  }

}
