import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

declare const $: any;

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormUploadComponent implements OnInit {

    public config: DropzoneConfigInterface = {
        url: 'https://httpbin.org/post',
        maxFiles: 10,
        clickable: true,
        uploadMultiple: true,
        acceptedFiles: 'image/*',
        createImageThumbnails: true
    };
  constructor() { }
  ngOnInit() {
      $('.boxs-close').on('click', function() {
          $(this).parents('.card').addClass('closed').fadeOut();
      });
  }

}
