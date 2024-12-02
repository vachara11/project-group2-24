import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor(public http:HttpClient) { }

  //ฟังก์ชันเชื่อมต่อ api สำหรับบันทึกข้อมูล
  addmanu(data:any) {
    return this.http.post('http://localhost/api/insert.php', data);
  }

  showorder(){
    return this.http.get('http://localhost/api/showorder.php');
  }
}
