import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestroService {
  url="http://localhost:3000/Restaurant"

  constructor(private http:HttpClient) { }
  getList() {
    return this.http.get(this.url);
  }

  saveResto(data:any)
  {
    
    return this.http.post(this.url,data)
  }
  deleteResto(id:any)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentResto(id:any)
  {
    return this.http.get((`${this.url}/${id}`))
  }
  updateResto(id:any,data:any)
  {
    return this.http.get(`${this.url}/${id}`,data)
  }
}