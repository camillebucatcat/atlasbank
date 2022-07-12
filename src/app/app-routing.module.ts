import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'registration/enter-mobile-number',
    loadChildren: () => import('./pages/registration/enter-mobile-number/enter-mobile-number.module').then( m => m.EnterMobileNumberPageModule)
  },
  {
    path: 'registration/enter-name',
    loadChildren: () => import('./pages/registration/enter-name/enter-name.module').then( m => m.EnterNamePageModule)
  },
  {
    path: 'registration/verify-mobile-number',
    loadChildren: () => import('./pages/registration/verify-mobile-number/verify-mobile-number.module').then( m => m.VerifyMobileNumberPageModule)
  },
  {
    path: 'registration/set-password',
    loadChildren: () => import('./pages/registration/set-password/set-password.module').then( m => m.SetPasswordPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
