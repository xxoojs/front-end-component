import { Routes, RouterModule, CanActivate, Router } from '@angular/router';
// import { UserService } from './user.service';
import { Injectable, ModuleWithProviders,NgModule } from '@angular/core';


@Injectable()
export class AuthGuard implements CanActivate {
    canActivate() {
        return false;
    }
}

const routes: Routes = [
    { path: '', 
      redirectTo: 'radio',
      pathMatch: 'full' 
    },
    {
      path: 'checkbox',
      loadChildren: './checkbox/checkbox.beta.module#CheckboxModule'
    },
    {
      path: 'radio',
      loadChildren: './radio/radio.beta.module#RadioModule'
    },
    {
      path: 'datepicker',
      loadChildren: './datepicker/datepicker.beta.module#DatepickerModule'
    },
    {
      path: 'select',
      loadChildren: './select/select.beta.module#SelectModule'
    },
    {
      path: 'switch',
      loadChildren: './switch/switch.beta.module#SwitchModule'
    },
    {
      path: 'cascader',
      loadChildren: './cascader/cascader.beta.module#CascaderModule'
    },
    {
      path: 'number',
      loadChildren: './number/number.beta.module#NumberModule'
    }


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}