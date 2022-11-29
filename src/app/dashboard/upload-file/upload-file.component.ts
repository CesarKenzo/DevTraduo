import { HttpClient, HttpEventType, HttpProgressEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  mensagem: string = '';
  nomeArquivo: string = '';


  constructor(private httpClient: HttpClient, private router:Router) { }

  ngOnInit(): void { 
    if(localStorage.getItem("Usuario") == null) this.router.navigate(['login']);
  }

  // @ts-ignore
  onFileSelected(event) {
    const arquivoSelecionado: File = <File>event.target.files[0];

    if (arquivoSelecionado) {
      //this.uploadArquivo(arquivoSelecionado);
    }
  }


  private uploadArquivo(arquivoSelecionado: File) {
    const formData = new FormData();
    formData.append("file", arquivoSelecionado);
    this.httpClient.post('environment.url', formData, {

      reportProgress: true,
      observe: 'events'
    })

      .subscribe(event => {
        this.nomeArquivo = arquivoSelecionado.name;
        if (event.type === HttpEventType.UploadProgress) {
          this.atualizarProgresso(event);
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
          this.mensagem = '';
        }
      }

        /*
        res => { 
          console.log(res);
        }
        */
      );
  }

  private atualizarProgresso(evento: HttpProgressEvent) {

    try {
      // @ts-ignore
      const mensagemProgresso = 'Progresso do Upload: ' + Math.round(evento.loaded / evento.total * 100) + '%';

      console.log(mensagemProgresso);
      this.mensagem = mensagemProgresso;

    } catch (error) {
      console.warn('erro', error);
    }

  }
}