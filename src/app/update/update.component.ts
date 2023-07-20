 import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { datamodel } from 'src/model';
import { MoService } from '../mo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public detaid!:number;
  public item!: datamodel;
  constructor(private activatedroute:ActivatedRoute,private router:Router,private mo:MoService){}
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param:Params)=>{
      this.detaid=param['get']("id");
     console.log("data id is",this.detaid)

    })
  
    this.mo.fetchdata(this.detaid).subscribe((data:datamodel)=>{
      this.item=data;
      console.log("this.item")
    }
    )

  }
  
  update(){
    this.mo.updateemployee(this.item,this.detaid).subscribe((res:datamodel)=>{
      this.router.navigate(["/"])
    })
  }
  // item(_item: any, detaid: number) {
  //   throw new Error('Method not implemented.');
  // }
  // employee(_employee: any, dataid: number) {
  //   throw new Error('Method not implemented.');
  // }

}
