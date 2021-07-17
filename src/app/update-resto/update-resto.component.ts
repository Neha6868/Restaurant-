import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {ActivatedRoute} from '@angular/router'
import { RestroService } from '../restro.service'
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.scss'],
})
export class UpdateRestoComponent implements OnInit {
  alert:boolean=false;
  // editResto = new FormControl({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   address: new FormControl(''),
  // });
  editResto: any = FormGroup;
  constructor(public formBuilder: FormBuilder,private router:ActivatedRoute,private resto:RestroService) {}

  ngOnInit(): void {
    this.EditForm();

    console.warn(this.router.snapshot.params.id)
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result: any)=>{
      this.editResto = this.formBuilder.group({
        name: new FormControl(result['name']),
        email: new FormControl(result['name']),
        address: new FormControl(result['address']),
      })
    })
  }

  /*--collection()
  {
    console.warn(this.editResto.value);
  }*/
 
  EditForm() {
    this.editResto = this.formBuilder.group({
      name: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
    });
  }

  collection()
  {
    console.warn(this.editResto.value);
    this.resto.updateResto(this.router.snapshot.params.id,
      this.editResto.value).subscribe((result:any)=>{
        console.warn(result)
        this.alert=true;
      })
  }
  closeAlert()
  {
    this.alert=false;
  }
}
