import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy  {
  username: boolean = false;

  private userServiceSubscription: Subscription | undefined;

  public msg: string = 'Valor inicial';

   // -----
  isUserLoggedIn: boolean = false;
  private subscription!: Subscription; // para poder cerrar el observable

  constructor(
    private _sessionStorageService: SessionStorageService
    ) {
    }

  ngOnInit(): void {

    this.subscription = this._sessionStorageService.loggedInTest$.subscribe(

      (loggedIn) => {
        this.isUserLoggedIn = loggedIn;
      console.log("call ..." + this.isUserLoggedIn);

      },
      (err => console.error('Observer got an error: ' + err)),
       () => console.log('You have used up all the vowels.')

      // {next: x => console.log('The next vowel is: ', x),
      // error: err => console.error('An error occurred', err),
      // complete: () => console.log('There are no more vowels.') }

    );
    // if(sessionStorage.getItem('key') === null){
    //   this._sessionStorageService.guardarDatoSession('009541214eval');
    //   alert('Se almacenó el token 🎯!!');
    // }

    // this.userServiceSubscription = this._sessionStorageService
    // .guardarDatoSession('009541214eval')
    // .subscribe(
    //   currentUser => {
    //     this.username = currentUser.username;
    //   }
    // );
  }

  ngOnDestroy(): void {
    this.userServiceSubscription?.unsubscribe();
    this.subscription?.unsubscribe();
  }

  click() {
    this._sessionStorageService.setMessage('this.msg');
  }


  ejecutar(){
   // alert('Iniciando... ');
    this._sessionStorageService.logIn('009541214eval');
  }

  // https://programmerclick.com/article/61171742177/
  // https://stackoverflow.com/questions/40393703/rxjs-observable-angular-2-on-localstorage-change
  // https://blog.briebug.com/blog/managing-local-storage-in-angular
  // https://blog.briebug.com/blog/managing-local-storage-in-angular
}
