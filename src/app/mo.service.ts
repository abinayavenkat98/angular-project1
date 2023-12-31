import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from 'src/model';
@Injectable({
  providedIn: 'root'
})
export class MoService {

  constructor(private http:HttpClient) { }


//add employee
addemployee(data:datamodel) {
  
return this.http.post<datamodel>("http://localhost:3000/posts",data)

}
//get employee
getemployee(){
  return this.http.get<datamodel[]>(" http://localhost:3000/posts")
}

deleteemployee(id:number){
   return this.http.delete<datamodel>("http://localhost:3000/posts/"+ id);
}


//fetch data
fetchdata(id:number){
  return this.http.get<datamodel>("http://localhost:3000/posts/"+ id);
}



//update
updateemployee(data:datamodel,id:number){
  return this.http.put<datamodel>("http://localhost:3000/posts/"+id,data);
}
}



