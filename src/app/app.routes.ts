import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsPageComponent } from './Components/blogs-page/blogs-page.component';
import { BlogDetailComponent } from './Components/blog-detail/blog-detail.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component'; // Yeni 404 componenti
import { AdminComponent } from './Components/admin/admin.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './auth.guard';


export const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'blogs', component: BlogsPageComponent },
  { path: 'blogs/:id', component: BlogDetailComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
