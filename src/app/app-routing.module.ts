import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/views/index/index.component';
import { BelieverComponent } from './components/views/believer/believer.component';
import { BePartOfItComponent } from './components/views/be-part-of-it/be-part-of-it.component';
import { ContactComponent } from './components/views/contact/contact.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'projetobeliever', component: BelieverComponent },
  { path: 'fazerparte', component: BePartOfItComponent },
  { path: 'contatos', component:  ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
