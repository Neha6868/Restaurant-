import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {RestroService} from '../restro.service'


@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.scss']
})
export class AddRestoComponent implements OnInit {
alert:boolean=false
  addResto=new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  address: new FormControl('')
})
  constructor(private resto:RestroService) { }

  ngOnInit(): void {
  }
collectResto()
{
  //console.warn(this.addResto.value)
  this.resto.saveResto(this.addResto.value).subscribe((result:any)=>{
    console.warn("result is here",result)
    this.alert=true
  this.addResto.reset({})
  })
  
}
closeAlert()
{
  this.alert=false
}
}
