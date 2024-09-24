import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuthenticated = this.checkLogin(); // Gerçek kimlik kontrolünüzle değiştirin

    if (!isAuthenticated) {
      this.router.navigate(['/login']); // Giriş yapılmamışsa login sayfasına yönlendir
      return false;
    }
    return true; // Giriş yapılmışsa erişime izin ver
  }

  private checkLogin(): boolean {
    // Giriş kontrolünüzü burada uygulayın
    return !!localStorage.getItem('currentUser'); // Örnek: Kullanıcının local storage'da var olup olmadığını kontrol et
  }
}
