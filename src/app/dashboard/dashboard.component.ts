import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
