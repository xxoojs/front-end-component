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
      redirectTo: 'datepicker',
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
    },
    {
        path: 'tooltip',
        loadChildren: './tooltip/tooltip.beta.module#TooltipModule'
    },
    {
        path: 'table',
        loadChildren: './table/demo.table.module#DemoTableModule'
    },
    {
        path: 'pagination',
        loadChildren: './pagination/pagination.beta.module#PaginationModule'
    },
    {
        path: 'button',
        loadChildren: './button/button.beta.module#ButtonModule'
    },
    {
        path: 'tag',
        loadChildren: './tag/tag.beta.module#TagModule'
    },
    {
        path: 'progress',
        loadChildren: './progress/progress.beta.module#ProgressModule'
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