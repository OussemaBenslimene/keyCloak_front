import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/secure.guard';
import { AccessoireComponent } from './accessoire/accessoire.component';


const routes: Routes = [
  {path: "accessoire", component : AccessoireComponent , canActivate:[AuthGuard], data : {roles:['ADMIN']} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
