import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {ThirdComponentComponent} from '../third-component/third-component.component';
import {FirstComponentComponent} from '../first-component/first-component.component';
import {SecoundComponentComponent} from '../secound-component/secound-component.component';

const routes: Routes=[
  {path:'',pathMatch:'full',redirectTo:'first'},
  {path:'first',component:FirstComponentComponent},
  {path:'secound',component:SecoundComponentComponent},
  {path:'third',component:ThirdComponentComponent}
  
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports:[RouterModule]
})


export class AppRoutingModuleModule { }

export const RoutingComponent = [FirstComponentComponent,SecoundComponentComponent,ThirdComponentComponent]