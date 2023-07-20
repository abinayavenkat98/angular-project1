import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { MoService } from '../mo.service';
import { datamodel } from 'src/model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
employeeform!:FormGroup;
data:undefined|datamodel[];
  item: any;
  constructor(private formbuilder:FormBuilder,private mo:MoService){}
  
ngOnInit(): void{
  this.employeeform=this.formbuilder.group({
    name:['',Validators.required],
    email:['',Validators.required],
    address:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required],
    phonenumber:['',Validators.required],

  })
this.getemployee();
}
addemployee(data:datamodel){
  //console.log(data)
  this.mo.addemployee(data).subscribe((_res=>{
   this.employeeform.reset();
  }))
  this.getemployee();
}
getemployee(){
  this.mo.getemployee().subscribe(res=>{
    this.data= res;
  })
  }
  deleteemployee(id:number){
    this.mo.deleteemployee(id).subscribe((result:any)=>{
      alert("Deleted successfully")  
    }
    )
    this.getemployee();
    }

}


