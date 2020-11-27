import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selected: string;
  constructor() { }

  ngOnInit(): void {
    this.menuToggle();
  }

  public menuToggle(): void {
    let navToggle = document.querySelector(".nav__toggle");
    let navWrapper = document.querySelector(".nav__wrapper");
    navToggle.addEventListener("click", function () {
      if (navWrapper.classList.contains("active")) {
        this.setAttribute("aria-expanded", "false");
        this.setAttribute("aria-label", "menu");
        navWrapper.classList.remove("active");
      } else {
        navWrapper.classList.add("active");
        this.setAttribute("aria-label", "close menu");
        this.setAttribute("aria-expanded", "true");
      }
    });
  }

}
