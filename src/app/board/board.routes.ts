import { Routes } from "@angular/router";
import { BoardListComponent } from "./components/board-list/board-list.component";

export const board_routes: Routes = [
    {
        path: 'board',
        loadComponent: () => import('./components/board-list/board-list.component').then(m => m.BoardListComponent),
    }
];