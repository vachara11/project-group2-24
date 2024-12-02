import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';

@Component({
  selector: 'app-showorder',
  templateUrl: './showorder.page.html',
  styleUrls: ['./showorder.page.scss'],
})
export class ShoworderPage implements OnInit {

  showorder:any=[];

  constructor(public dataapi:DataapiService) { }

  ngOnInit() {
    this.show();
  }

  show(){
    this.dataapi.showorder().subscribe({
      next: data => {
        this.showorder = data;
      },
      error: error => {
        console.error('Error:', error);
      }
    });
  }

}
