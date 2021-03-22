import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  authors;

  authorsLength;

  title = ' Authors';

  constructor(service: AuthorsService) {
    this.authors = service.getAuhtors();
    this.authorsLength = service.getAuthorsLength();
   }

  ngOnInit(): void {
  }

}
