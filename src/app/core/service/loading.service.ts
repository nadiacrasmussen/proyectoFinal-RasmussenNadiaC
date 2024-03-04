import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({providedIn:'root'})

export class loadingService{
   loadingTriggered$ = new Subject<boolean> ();

  public isLoading$ = this.loadingTriggered$.asObservable();

   setIsLoading(value :boolean ): void{
    if(value){
      this.loadingTriggered$.next(value);
    };

  }
}
