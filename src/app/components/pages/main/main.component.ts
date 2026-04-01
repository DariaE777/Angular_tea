import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, timer} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  showModal = false;
  private timerPopup!: Subscription;
    constructor(private router: Router) {}
  ngOnInit() {
    this.timerPopup = timer(10000).subscribe(() => {
      this.showModal = true;
    });
  }


  ngOnDestroy() {
    if (this.timerPopup) {
      this.timerPopup.unsubscribe();
    }
  }

    goToCatalogue(): void {
        this.showModal = false;
        this.router.navigate(['/catalogue']);
    }
    closeModal() {
        this.showModal = false;
    }
}

