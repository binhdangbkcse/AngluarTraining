import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface ICanComponentDeactivate {
    canDeactive: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<ICanComponentDeactivate>{
    canDeactivate(component: ICanComponentDeactivate, currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
            return component.canDeactive();
    }
}