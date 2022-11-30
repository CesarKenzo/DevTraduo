export class PostResponse {
    public id: string;
    public identificador_origin: string;
    public texto_response: string;
    public idioma: string;
    public tipo: string[];
    public identificador_post: string[];
    public tipo_post: string;

    constructor(id: string, identificador_origin: string, texto_response: string, idioma: string,
        tipo: string[], identificador_post: string[], tipo_post: string){

       this.id = id;
       this.identificador_origin = identificador_origin;
       this.texto_response = texto_response;
       this.idioma = idioma;
       this.tipo = tipo;
       this.identificador_post = identificador_post;
       this.tipo_post = tipo_post;
   }
}