import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  
    {path: 'user',component:UserDashboardComponent},
    {path: 'admin',canActivate:[AuthGuardService],component:AdminDashboardComponent},
    {path: 'forbidden',component:ForbiddenComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
