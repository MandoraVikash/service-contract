import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import { DragulaModule } from "ng2-dragula";
import { TranslateModule } from "@ngx-translate/core";
// Components
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { CustomizerComponent } from "./components/customizer/customizer.component";
import { FeatherIconsComponent } from "./components/feather-icons/feather-icons.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { ContentComponent } from "./components/layout/content/content.component";
import { FullComponent } from "./components/layout/full/full.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { TapToTopComponent } from "./components/tap-to-top/tap-to-top.component";
// Header Elements Components
import { SearchComponent } from "./components/header/elements/search/search.component";
import { MegaMenuComponent } from "./components/header/elements/mega-menu/mega-menu.component";
import { LanguagesComponent } from "./components/header/elements/languages/languages.component";
import { NotificationComponent } from "./components/header/elements/notification/notification.component";
import { BookmarkComponent } from "./components/header/elements/bookmark/bookmark.component";
import { CartComponent } from "./components/header/elements/cart/cart.component";
import { MessageBoxComponent } from "./components/header/elements/message-box/message-box.component";
import { MyAccountComponent } from "./components/header/elements/my-account/my-account.component";
// Directives
import { DisableKeyPressDirective } from "./directives/disable-key-press.directive";
import { OnlyAlphabetsDirective } from "./directives/only-alphabets.directive";
import { OnlyNumbersDirective } from "./directives/only-numbers.directive";
import { ShowOptionsDirective } from "./directives/show-options.directive";
// Services
import { ChatService } from "./services/chat.service";
import { LayoutService } from "./services/layout.service";
import { NavService } from "./services/nav.service";
import { TableService } from "./services/table.service";
import { NgbdSortableHeader } from "./directives/NgbdSortableHeader";
import { DecimalPipe } from "@angular/common";
import { SvgIconComponent } from "./components/svg-icon/svg-icon.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { SwiperModule } from "swiper/angular";
import { SwiperComponent } from './components/header/elements/swiper/swiper.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { MakeDropdownComponent } from './components/make-dropdown/make-dropdown.component';
import { BrandDropdownComponent } from './components/brand-dropdown/brand-dropdown.component';
import { BasicInputFieldComponent } from './components/basic-input-field/basic-input-field.component';
import { ActiveSwitchComponent } from './components/active-switch/active-switch.component';
import { MakeIdComponent } from './components/make-id/make-id.component';
import { BrandIdComponent } from './components/brand-id/brand-id.component';
import { ItemGroupComponent } from './components/item-group/item-group.component';
import { SubItemGroupComponent } from './components/sub-item-group/sub-item-group.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { DescriptionComponent } from './components/description/description.component';
import { NumberInputFieldComponent } from './components/number-input-field/number-input-field.component';
import { UppercaseInputFieldComponent } from './components/uppercase-input-field/uppercase-input-field.component';
import { RequiredStarIconComponent } from './components/required-star-icon/required-star-icon.component';
import { BasicDropdownComponent } from './components/basic-dropdown/basic-dropdown.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    BreadcrumbComponent,
    CustomizerComponent,
    FeatherIconsComponent,
    FullComponent,
    ShowOptionsDirective,
    DisableKeyPressDirective,
    OnlyAlphabetsDirective,
    OnlyNumbersDirective,
    LoaderComponent,
    TapToTopComponent,
    SearchComponent,
    MegaMenuComponent,
    LanguagesComponent,
    NotificationComponent,
    BookmarkComponent,
    CartComponent,
    MessageBoxComponent,
    MyAccountComponent,
    NgbdSortableHeader,
    SvgIconComponent,
    SwiperComponent,
    SplashScreenComponent,
    MakeDropdownComponent,
    BrandDropdownComponent,
    BasicInputFieldComponent,
    ActiveSwitchComponent,
    MakeIdComponent,
    BrandIdComponent,
    ItemGroupComponent,
    SubItemGroupComponent,
    WarehouseComponent,
    DescriptionComponent,
    NumberInputFieldComponent,
    UppercaseInputFieldComponent,
    RequiredStarIconComponent,
    BasicDropdownComponent,
  ],

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
 
    // DragulaModule.forRoot(),
    TranslateModule.forRoot(),
    CarouselModule,
    SwiperModule],

  providers: [NavService, ChatService, LayoutService, TableService, DecimalPipe],

  exports: [NgbModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    LoaderComponent,
    BreadcrumbComponent,
    FeatherIconsComponent,
    TapToTopComponent,
    DisableKeyPressDirective,
    OnlyAlphabetsDirective,
    OnlyNumbersDirective,
    NgbdSortableHeader,
    SvgIconComponent,
    SwiperModule,
    SplashScreenComponent,
    MakeDropdownComponent,
    BrandDropdownComponent,
    BasicInputFieldComponent,
    ActiveSwitchComponent,
    MakeIdComponent,
    BrandIdComponent,
    ItemGroupComponent,
    SubItemGroupComponent,
    WarehouseComponent,
    DescriptionComponent,
    NumberInputFieldComponent,
    UppercaseInputFieldComponent,
    RequiredStarIconComponent,
    BasicDropdownComponent,

  ],
})
export class SharedModule { }
