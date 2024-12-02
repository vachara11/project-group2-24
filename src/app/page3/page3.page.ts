import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {




  constructor(
    public dataapi:DataapiService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  addmenu(orders:any){
    let data = {
      menu: orders.name,
      price: orders.price,

    }
    this.dataapi.addmanu(data).subscribe({
      next: (data:any) =>
        {
          console.log('บันทึกข้อมูลสำเร็จ', data)

        },
      error: (error) => {
        console.error('ไม่สามารถบันทึกข้อมูลได้', error)
      }
    });
  }

  gotoshoworder(){
    this.router.navigate(['/showorder']);
  }

  order =[
    {
      id:1,
      name: "ก๋วยเตี๋ยวต้มยำ",
      price: 45,
      img:"assets/icon/ก๋วยเตี๋ยวต้มยำ.png",
    },
    {
      id:2,
      name: "ก๋วยเตี๋ยวเย็นตาโฟ",
      price: 50,
      img:"assets/icon/ก๋วยเตี๋ยวเย็นตาโฟ.png",
    },
    {
      id:3,
      name: "ต้มเลือดหมู",
      price: 50,
      img:"assets/icon/ต้มเลือดหมู.png",
    },
    {
      id:4,
      name: "ข้าวเปล่า",
      price: 10,
      img:"assets/icon/ข้าวเปล่า.png",
    },
    {
      id:5,
      name: "แคปหมู",
      price: 10,
      img:"assets/icon/เเคป.png",
    },
    {
      id:6,
      name: "น้ำเปล่า",
      price: 10,
      img:"assets/icon/น้ำ.png",
    },
    {
      id:7,
      name: "ก๋วยเตี๋ยวต้มยำ",
      price: 20,
      img:"assets/icon/เก๊กฮวย.jpg",
    },
  ]





}
