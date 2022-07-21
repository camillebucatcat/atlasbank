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
  {
    path: 'registration/status',
    loadChildren: () => import('./pages/registration/status/status.module').then(m => m.StatusPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login-password-only',
    loadChildren: () => import('./pages/login/login-password-only/login-password-only.module').then( m => m.LoginPasswordOnlyPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/apply-for-cards/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'apply-for-cards',
    loadChildren: () => import('./pages/apply-for-cards/apply-for-cards/apply-for-cards.module').then( m => m.ApplyForCardsPageModule)
  },
  {
    path: 'about-the-account',
    loadChildren: () => import('./pages/apply-for-cards/about-the-account/about-the-account.module').then( m => m.AboutTheAccountPageModule)
  },
  {
    path: 'citizen',
    loadChildren: () => import('./pages/apply-for-cards/citizen/citizen.module').then( m => m.CitizenPageModule)
  },
  {
    path: 'personal-info',
    loadChildren: () => import('./pages/apply-for-cards/personal-info/personal-info.module').then( m => m.PersonalInfoPageModule)
  },
  {
    path: 'mailing-address',
    loadChildren: () => import('./pages/apply-for-cards/mailing-address/mailing-address.module').then( m => m.MailingAddressPageModule)
  },
  {
    path: 'govt-id',
    loadChildren: () => import('./pages/apply-for-cards/govt-id/govt-id.module').then( m => m.GovtIdPageModule)
  },
  {
    path: 'take-selfie',
    loadChildren: () => import('./pages/apply-for-cards/take-selfie/take-selfie.module').then( m => m.TakeSelfiePageModule)
  },
  {
    path: 'status',
    loadChildren: () => import('./pages/apply-for-cards/status/status.module').then( m => m.StatusPageModule)
  },  {
    path: 'spinner',
    loadChildren: () => import('./pages/apply-for-cards/spinner/spinner.module').then( m => m.SpinnerPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
