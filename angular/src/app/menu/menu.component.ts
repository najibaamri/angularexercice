import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menu = [
    {
      name: 'link 1',
      submenus: [{ name: 'submenu 1' }],
    },
    {
      name: 'link 2',
      submenus: [
        {
          name: 'submenu 2',
          submenus: [
            {
              name: 'submenu 3',
            },
          ],
        },
      ],
    },
  ];
  getMenu() {
    return this.menu;
  }
  constructor() {
    this.getMenu();
  }

  ngOnInit(): void {}
}
