import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) {

   }

   private apiUrl = 'https://your-backend-api.com/contacts';

  //method should be here so that the ts fiel will access this method
  addContact(acontact:Contact):Observable<Contact>{
    return this.http.post<Contact>(this.apiUrl,acontact);
  }
  
}
