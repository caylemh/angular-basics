import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  getAuhtors = () => ['author1', 'author2', 'author3'];
  getAuthorsLength = () => this.getAuhtors().length;

  constructor() { }
}
