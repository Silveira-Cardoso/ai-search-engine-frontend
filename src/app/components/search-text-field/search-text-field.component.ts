import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-text-field',
  templateUrl: './search-text-field.component.html',
  styleUrls: ['./search-text-field.component.scss']
})
export class SearchTextFieldComponent {
  @ViewChild('inputFile') inputFileField!: ElementRef<HTMLInputElement>;
  _fileDragging = false;
  _searchValue = '';


  @HostListener('document:dragover', ['$event'])
  dragOverGlobal(event: DragEvent) {
    event.preventDefault();
    this._fileDragging = true;
  }

  @HostListener('document:drop', ['$event'])
  fileDroppedGlobal(event: DragEvent) {
    event.preventDefault();
    this._fileDragging = false;
  }

  fileDropped(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    if (file) {
      this.inputFileField.nativeElement.files = event.dataTransfer?.files;
      this._searchValue = file.name;
    }
  }

  fileSearch() {
    this.inputFileField.nativeElement.click();
  }

  clearSearch() {
    this._searchValue = '';
    this.inputFileField.nativeElement.files = null;
  };
}
