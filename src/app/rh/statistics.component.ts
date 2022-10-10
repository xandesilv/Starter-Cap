import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
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
