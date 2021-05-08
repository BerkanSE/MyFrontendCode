import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NaviComponent {

  @Output()
  readonly darkModeSwitched = new EventEmitter<boolean>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private router:Router,
    private breakpointObserver:BreakpointObserver) { }

    onDarkModeSwitched({checked}: MatSlideToggleChange){
      this.darkModeSwitched.emit(checked);
    }

  // ngOnInit(): void {

  // }

  isHomePage(){
    return this.router.url=="" || this.router.url =="/" ? true :false;
  }

}
