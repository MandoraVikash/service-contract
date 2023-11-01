import { Injectable, OnDestroy } from "@angular/core";
import { Subject, BehaviorSubject, fromEvent } from "rxjs";
import { takeUntil, debounceTime } from "rxjs/operators";
import { Router } from "@angular/router";

// Menu
export interface Menu {
  headTitle1?: string;
  headTitle2?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
}

@Injectable({
  providedIn: "root",
})
export class NavService implements OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

  // Search Box
  public search: boolean = false;

  // Language
  public language: boolean = false;

  // Mega Menu
  public megaMenu: boolean = false;
  public levelMenu: boolean = false;
  public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

  // Collapse Sidebar
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth < 991 ? false : true;

  // Full screen
  public fullScreen: boolean = false;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, "resize")
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
          this.megaMenu = false;
          this.levelMenu = false;
        }
        if (evt.target.innerWidth < 1199) {
          this.megaMenuColapse = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
        this.megaMenu = false;
        this.levelMenu = false;
      });
    }
  }

  ngOnDestroy() {
    // this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    // {
    //   headTitle1: "Master",
    // },
    { path: "/dashboard", title: "Dashboards", icon: "home", type: "link" },

    {
      title: "Master",
      icon: "widget",
      type: "sub",
      badgeType: "light-primary",
      // badgeValue: "5",
      active: false,
      children: [
        { path: "/master/user", title: "User", type: "link" },
        { path: "/master/roles", title: "Roles", type: "link" },
        {
          title: "General",
          type: "sub",
          active: false,
          children: [
            { path: "/general/area", title: "Area", type: "link" },
            { path: "/general/city", title: "City", type: "link" },
            { path: "/general/state", title: "State", type: "link" },
            { path: "/general/make", title: "Make", type: "link" },
            { path: "/general/model", title: "Model", type: "link" },
            { path: "/general/capacity", title: "Capacity", type: "link" },
          ]
        },
        {
          title: "Item & Service",
          type: "sub",
          active: false,
          children: [
            { path: "/item-services/group", title: "Group", type: "link" },
            { path: "/item-services/sub-group", title: "Sub Group", type: "link" },
            { path: "/item-services/category", title: "Category", type: "link" },
            { path: "/item-services/brand", title: "Brand", type: "link" },
            { path: "/item-services/tax-zone", title: "Tax Zone", type: "link" },
            { path: "/item-services/tax-rate", title: "Tax Rate", type: "link" },
            { path: "/item-services/hsn-code", title: "HSN Code", type: "link" },
            { path: "/item-services/item", title: "Item", type: "link" },
            { path: "/item-services/duration-type", title: "Duration Type", type: "link" },
            { path: "/item-services/warranty", title: "Warranty", type: "link" },
          ]
        },
        {
          title: "Accounts",
          type: "sub",
          active: false,
          children: [
            { path: "/accounts/engine", title: "Engine", type: "link" },
            { path: "/accounts/account", title: "account", type: "link" },
            { path: "/accounts/warehouse", title: "Warehouse", type: "link" },
          ]
        },


      ],
    },
    {
      title: "Stock",
      icon: "boxes",
      type: "sub",
      badgeType: "light-primary",
      // badgeValue: "5",
      active: false,
      children: [
        { path: "/stock/mrn-entry", title: "MRN Entry", type: "link" },
        { path: "/stock/mrn-return", title: "MRN Return", type: "link" },
        { path: "/stock/stock-transfer", title: "Stock Transfer", type: "link" },
      ]
    },

  ];

  // Array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
