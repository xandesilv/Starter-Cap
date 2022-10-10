import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './beneficios/coupens.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './certponto/media.component';
import { PagesComponent } from './ensino/pages.component';
import { ProductsComponent } from './jornada/products.component';
import { SettingsComponent } from './mycareer/settings.component';
import { StatisticsComponent } from './rh/statistics.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'statistics', component: StatisticsComponent},
  {
    path: 'coupens',
    loadChildren: () => import('./beneficios/coupens.module').then(m => m.CoupensModule)
  },
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
