import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello.component';
import { ComponentTwoComponent } from './component-two/component-two.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HelloComponent,
  },
  {
    path: 'two',
    component: ComponentTwoComponent,
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
