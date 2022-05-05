import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  // ------------------
  private loggedInTest = new BehaviorSubject<boolean>(false);
  public loggedInTest$ = this.loggedInTest.asObservable(); // con el dolar y asi no
  //acceder a todo sino solo al observable

  constructor(private router: Router){
  }

  logIn(value: string){
    sessionStorage.setItem('key', value);
    this.loggedInTest.next(true);
    this.redirectToProductos();

  }

  logOut(){
    this.loggedInTest.next(false);
    this.redirectToProductos();
  }

  private redirectToProductos(): void{
    this.router.navigate(['/productos']);
  }

  // ------------------

  private _myData$ = new BehaviorSubject<Boolean>(false)
  public myData$ = this._myData$.asObservable()

  private logger = new Subject<boolean>();
  public loggedIn: boolean = false;


  public subject = new BehaviorSubject <string> ('datos predeterminados');

  setMessage(value: string): void {
    this.subject.next(value);
  }

  isLoggedIn(): Observable<boolean> {
    return this.logger.asObservable();
  }



  guardarDatoSession(value: string):  void{
    sessionStorage.setItem('key', value);
    this._myData$.next(true)
  }

  clearAllLocalStorage() {
    sessionStorage.removeItem('key');
    this._myData$.next(false)
 }

  // logIn(provider: string, providerResponse: string) {
  //   localStorage.setItem('authParams', providerResponse);
  //   this.loggedIn = true;
  //   this.logger.next(this.loggedIn);
  // }

  // logOut() {
  //   localStorage.removeItem('authParams');
  //   this.loggedIn = false;
  //   this.logger.next(this.loggedIn);
  // }

}
