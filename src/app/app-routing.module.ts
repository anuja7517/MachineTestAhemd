import { APP_INITIALIZER, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './shared/components/employee-dashboard/employee-dashboard.component';
import { SinglePostComponent } from './shared/components/single-post/single-post.component';
import { EmployeeformComponent } from './shared/components/employeeform/employeeform.component';
import { PagnotfoundComponent } from './shared/components/pagnotfound/pagnotfound.component';

export function appInitializerFn(router: Router) {
  return () => {
    router.navigate(['/home']);
  };
}


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: EmployeeDashboardComponent
  },

  {
    path: 'post/:postId',
    component: SinglePostComponent
  },
  {
    path: 'post/:postId/edit',
    component: EmployeeformComponent
  },
  {
    path: 'addpost',
    component: EmployeeformComponent
  },

  {
    path: '**',
    component: PagnotfoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      deps: [Router],
      multi: true,
    },
  ],
})
export class AppRoutingModule { }
