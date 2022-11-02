import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  value = 'Clear me';

  constructor(private router: Router) { }

  ngOnInit(): void {}

  public navegar(rota: string){
    this.router.navigate([rota]);
  }

}
