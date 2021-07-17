import { Component, OnInit } from '@angular/core';
import { RestroService } from '../restro.service';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.scss'],
})
export class ListRestoComponent implements OnInit {
  constructor(private resto: RestroService) {}
  //collection = <any[]>([]);
  collection:any=[];
  ngOnInit(): void {
    this.resto.getList().subscribe((result: any) => {
      console.log(result);
      this.collection = result;
    });
  }
  deleteResto(item:any)
  {
    this.collection.splice(item-1,1)
    this.resto.deleteResto(item).subscribe((result:any)=>{
      console.warn("result",result)
    })
//api call
  }
}
