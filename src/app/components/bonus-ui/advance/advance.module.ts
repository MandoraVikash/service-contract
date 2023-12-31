import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { ImageCropperModule } from 'ngx-image-cropper';
import { JoyrideModule } from "ngx-joyride";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from '../../../shared/shared.module';
import { AdvanceRoutingModule } from './advance-routing.module';

import { DropzoneComponent } from './dropzone/dropzone.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { ScrollableComponent } from './scrollable/scrollable.component';
import { StickyComponent } from './sticky/sticky.component';
import { SweetAlert2Component } from './sweet-alert2/sweet-alert2.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'https://httpbin.org/post',
  acceptedFiles: 'image/*',
  createImageThumbnails: true
};

@NgModule({
  declarations: [
    ScrollableComponent,
    DropzoneComponent,
    SweetAlert2Component,
    StickyComponent,
    OwlCarouselComponent,
    ImageCropperComponent,
  ],
  imports: [
    CommonModule,
    AdvanceRoutingModule,
    NgxDropzoneModule,
    SweetAlert2Module,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    DropzoneModule,
    NgbModule,
    SharedModule,
    ImageCropperModule,
    JoyrideModule,
  ],
  providers: [
    { provide: DROPZONE_CONFIG, useValue: DEFAULT_DROPZONE_CONFIG },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AdvanceModule { }
