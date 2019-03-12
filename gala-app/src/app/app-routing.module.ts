import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from './pages/data/data.component';
import { ActionsComponent } from './pages/actions/actions.component';

const routes: Routes = [
  { path: '', redirectTo: '/action', pathMatch: 'full' },
  { path: 'action', component: ActionsComponent },
  { path: 'data', component: DataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
