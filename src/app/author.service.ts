import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  getAuthors(){
    return ["Virkar", "Dan brown", "Dev Dutt","Valmiki"];
  }
}
