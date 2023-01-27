import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { PageForgotPasswordComponent } from './login/pages/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './login/pages/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './login/pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './login/pages/page-sign-up/page-sign-up.component';

const routes: Routes = [
  /* // ici on va définir les routes
  // route sign-in
  {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  {path: 'sign-in', component: PageSignInComponent},
  // route sign-up
  {path: 'sign-up', component: PageSignUpComponent},
  // route reset-password
  {path: 'reset-password', component: PageResetPasswordComponent},
  // route forgot-password
  {path: 'forgot-password', component: PageForgotPasswordComponent}, */
  // Mise en place du lazy loading
    {
      path: '',
      loadChildren: () =>
      import('./login/login.module').then(m => m.LoginModule),
    },
    {
      path: 'orders',
      loadChildren: () =>
      import('./orders/orders.module').then(m => m.OrdersModule),
    },
    {
      path: 'clients',
      loadChildren: () =>
      import('./clients/clients.module').then(m => m.ClientsModule),
    },
    {
      path: '**',
      loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
    },


  ];

// Avec PreloandingStrategy tout les modules se chargent dés que le navigateur le peut
@NgModule({
  imports: [RouterModule.forRoot(routes,
    {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // console.log des routes [routes]
  constructor (private router : Router){
    //console.log(this.router.config, 'tableau de routes')
  }
 }
