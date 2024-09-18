import { RouterModule, Routes } from '@angular/router';
import { BlogsPageComponent } from './Components/blogs-page/blogs-page.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
  { path: 'blog', component: BlogsPageComponent },
  { path: '', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
