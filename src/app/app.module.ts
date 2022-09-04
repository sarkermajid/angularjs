import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { FirstAComponent } from './first-a/first-a.component';
import { FirstBComponent } from './first-b/first-b.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes:Routes = [
  {
    path:'', component: FirstcomponentComponent,
    children: [
      {path:'firstA', component: FirstAComponent},
      {path:'firstB', component: FirstBComponent}
  ]
  },
  {path:'second', component: SecondcomponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    SecondcomponentComponent,
    FirstAComponent,
    FirstBComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // for route
    ReactiveFormsModule, // for form
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
