import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private _router:Router) { }



  canActivate() {


    
     if(document.cookie.search("jwt")) {
      return true;
     } else {
       this._router.navigateByUrl('/login');
    }
   }
}
