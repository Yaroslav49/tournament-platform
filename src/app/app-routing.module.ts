import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatingTournamentComponent } from "./creating-tournament.component";
import { StartPageComponent } from "./start-page.component";

const routes: Routes = [
	{
		path: 'home',
		component: StartPageComponent,
	},
	{
		path: 'create',
		component: CreatingTournamentComponent,
	},
	{ path: '**', component: StartPageComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
