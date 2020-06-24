import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  projectName: string;

  constructor() {
    this.projectName = "Petshop Girls";
  }

  ngOnInit(): void {
  }

}
