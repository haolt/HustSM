import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from '../core/cookie.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
      private router: Router,
      private cookieService: CookieService
  ) { }

  canActivate (
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): boolean {
      const cookieToken = this.cookieService.getCookie('token');
      if (cookieToken) {
        alert('có token');
        return true;
      }
      // this.router.navigate(['login']);
      // alert('Ko có token');
      return false;
  }
}
