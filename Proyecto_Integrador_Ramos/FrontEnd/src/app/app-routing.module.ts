import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acercade/edit-acerca-de.component';
import { EditEducacionComponent } from './components/education/edit-educacion.component';
import { NewEducacionComponent } from './components/education/new-educacion.component';
import { EditExperienciaComponent } from './components/experience/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path: 'nuevaexp',component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},  
  {path: 'nuevaeducacion', component: NewEducacionComponent},
  {path: 'editeducacion/:id', component: EditEducacionComponent},
  {path: 'editacercade/:id', component: EditAcercaDeComponent},
  /**{ path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent}**/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
