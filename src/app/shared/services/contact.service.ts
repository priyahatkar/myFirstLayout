import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public baseUrls : string = `${environment.baseUrl}.json`;
  // public contArray : Icontact[] = workArray
  constructor(private _http : HttpClient) { }

  // getAllData(){
  //   return this.contArray;
  // }

  // getAllPostData(post :Icontact){
  //   return this._http.post(this.baseUrls, post)
  // }
}
