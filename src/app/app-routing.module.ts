import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent,
  },
  {
    path: "about",
    loadComponent: () =>
      import("../app/about/about.component").then(
        (comp) => comp.AboutComponent
      ),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("../app/dashboard/routes").then((r) => r.DASHBOARD_ROUTES),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
