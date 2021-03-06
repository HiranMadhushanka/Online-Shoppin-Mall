import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapComponent} from '../app/components/map/map.component'
import {ShopsComponent} from '../app/components/shops/shops.component';

const routes: Routes = [
  {path:'',redirectTo:'shops',pathMatch:'full'},
  {path:'map',component:MapComponent},
  {path:'shops',component:ShopsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
