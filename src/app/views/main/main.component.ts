import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, timer} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  showModal:boolean = false;
  private timerPopup!: Subscription;
    constructor(private router: Router) {}
  ngOnInit():void {
    this.timerPopup = timer(10000).subscribe(() => {
      this.showModal = true;
    });
  }


  ngOnDestroy():void {
    if (this.timerPopup) {
      this.timerPopup.unsubscribe();
    }
  }

    goToCatalogue(): void {
        this.showModal = false;
        this.router.navigate(['/catalogue']).then();
    }
    closeModal() {
        this.showModal = false;
    }
}

