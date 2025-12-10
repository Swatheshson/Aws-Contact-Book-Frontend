import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) {

   }

  //method should be here so that the ts fiel will access this method
  addContact(acontact:Contact):Contact{
    return acontact;
  }
  
}
