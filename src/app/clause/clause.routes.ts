import { Routes } from "@angular/router";
import { ClauseServiceComponent } from "./page/service/clause-service/clause-service.component";
import { ClausePolicyComponent } from "./page/policy/clause-policy.component";

export const clause_routes: Routes = [
    {
        path: 'clause',
        loadComponent: () => import('./page/clause.component').then(m => m.ClauseComponent),
        data: { showNavbar: true },
        children: [
            {
                path: '',
                redirectTo: 'service',
                pathMatch: 'full',
            },
            {
                path: 'service',
                component: ClauseServiceComponent,
                title: 'My BanPick 마이밴픽 | 롤 모의 밴픽',                                
            },
            {
                path: 'policy',
                component: ClausePolicyComponent,
                title: 'My BanPick 마이밴픽 | 롤 모의 밴픽'                
            }

        ]
    }
]