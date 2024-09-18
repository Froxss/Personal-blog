import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsPageComponent } from './Components/blogs-page/blogs-page.component';
import { BlogDetailComponent } from './Components/blog-detail/blog-detail.component'; // Yeni detay componenti
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
  { path: 'blog', component: BlogsPageComponent },
  { path: 'blog/:id', component: BlogDetailComponent }, // Detay sayfası için yol
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
