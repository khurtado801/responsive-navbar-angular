// NOTE: AfterViewInit, ViewChild, ElementRef, HostListener - needed for onScroll event
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

// NOTE: Must import jquery into each component that uses it
import * as $ from 'jquery';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {
  // NOTE: Tell Angular to watch stickyMenu element and give us access to its DOM properties, create new element menuElement
  @ViewChild('stickyMenu') menuElement: ElementRef;

  isSticky = '';
  elementPosition: any;
  isAffix = '';

  // navbarOpen = false;
  // tslint:disable-next-line:typedef
  // toggleNavbar() {
  //   this.navbarOpen = !this.navbarOpen;

  // }
  constructor(private spinner: NgxSpinnerService) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {

      this.spinner.show();
      setTimeout(() => {
          this.spinner.hide();
      }, 800);

    // tslint:disable-next-line:typedef
      $('.navTrigger').click(function() {
        $(this).toggleClass('active');
        $('#mainListDiv').toggleClass('show_list');
        $('#mainListDiv').fadeIn();
    });
  }

  // NOTE: Use ngAfterViewInit so to be sure we execute code after the view has been rendered
  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  // NOTE: Listen to the window scroll event we use the @HotListener decorator
  @HostListener('window:scroll', ['$event'])
  // NOTE: That we use to decorate the function we want to execute when the scroll event occurs
  // tslint:disable-next-line:typedef
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if (windowScroll > 50){
      this.isAffix = 'affix';
      this.isSticky = 'sticky';
    } else {
      this.isAffix = '';
      this.isSticky = '';
    }
  }

}
