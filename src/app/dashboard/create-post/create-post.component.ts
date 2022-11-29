import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router) {
    this.form = this.formBuilder.group({
      categoria: [''],
      idioma: [''],
      texto: ['']
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem("Usuario") == null) this.router.navigate(['login']);
  }

  public publicar(){}

}
