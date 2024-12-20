import { Routes } from "@angular/router";
import { ClauseServiceComponent } from "./page/service/clause-service/clause-service.component";
import { ClausePolicyComponent } from "./page/policy/clause-policy.component";

export const clause_routes: Routes = [
    {
        path: 'clause',
        loadComponent: () => import('./page/clause.component').then(m => m.ClauseComponent),
        children: [
            {
                path: '',
                redirectTo: 'service',
                pathMatch: 'full',
            },
            {
                path: 'service',
                component: ClauseServiceComponent,
                data: { showNavbar: false },                   
            },
            {
                path: 'policy',
                component: ClausePolicyComponent,
                data: { showNavbar: false },
            }

        ]
    }
]