import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  innerWidht: any;

  constructor() { }

  ngOnInit(): void {
    this.innerWidht = window.innerWidth;
  }
@HostListener('window:resize', ['$event'])
onResize(event: any){
  this.innerWidht = window.innerWidth
}

getClass() {
  return this.innerWidht < 925 ? 'row-md' : 'row';
}

}
