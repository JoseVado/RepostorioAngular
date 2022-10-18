import { Component } from "@angular/core";


@Component({
    selector: "app-personas",
    templateUrl: "./personas.component.html",
    styleUrls: ["./personas.component.css"]
    //styles: [`h1{color:blue; }`]
})
export class PersonasComponent{
    deshabilitar = false;

    mensaje = "No se ha agregado una persona";
    titulo = "default";

    agregarPersona() {
        this.mensaje = "Persona agregada";
    }
    /*
    modificarTitulo(event: Event) {
        this.titulo = (<HTMLInputElement>event.target).value;
    }*/
}