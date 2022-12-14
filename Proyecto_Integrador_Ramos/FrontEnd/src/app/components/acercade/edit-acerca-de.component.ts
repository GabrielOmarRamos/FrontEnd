import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona: persona = null;

  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router: Router, public imgService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imgService.url;
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']).then(()=>{window.location.reload()});
      }, err => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }

  uploadImg1($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "Perfil_" + id;
    this.imgService.uploadImg($event, name)
  }

  uploadImg2($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "Portada_" + id;
    this.imgService.uploadImg($event, name)
  }
}
