import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { faTrash, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { RequestService } from '../../services/request.service';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent implements OnInit, AfterViewInit {
  requestUrl: string = 'https://www.skorbase.com';
  requestTabButtonClassData = {
    header: {
      button: true,
      selected: true
    },
    params: {
      button: true,
      selected: false
    },
    body: {
      button: true,
      selected: false
    },
    cookie: {
      button: true,
      selected: false
    }
  };
  responseTabButtonClassData = {
    body: {
      button: true,
      selected: true
    },
    header: {
      button: true,
      selected: false
    },
    cookie: {
      button: true,
      selected: false
    }
  };
  requestSelectedHeader: string = 'header';
  responseSelectedHeader: string = 'body';
  responseBodyData: string = '';
  trash = faTrash;
  toggleOn = faToggleOn;
  toggleOff = faToggleOff;
  data = {
    request: {
      method: 'get',
      url: 'https://wallet.iflix.com',
      header: [{
        enable: true,
        key: 'Key1',
        value: 'Value2'
      },
      {}],
      params: [{
        enable: true,
        key: '',
        value: ''
      }],
      body: [{
        enable: true,
        key: '',
        value: ''
      }],
      cookie: [{
        enable: true,
        key: '',
        value: ''
      }],
    },
    response: {}
  }
  responseUrl: SafeResourceUrl = '';

  @ViewChild('requestUrlContainer', { static: false }) requestUrlEV: ElementRef;
  @ViewChild('requestContainer', { static: false }) requestEV: ElementRef;
  @ViewChild('responseContainer', { static: false }) responseEV: ElementRef;
  responseHeight = 0;
  constructor(private request: RequestService, private sanitizer: DomSanitizer) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeEvent()
  }

  resizeEvent() {
    const parentHeight = this.responseEV.nativeElement.parentNode.offsetHeight
    const requestHeight = this.requestEV.nativeElement.offsetHeight
    const requestUrlHeight = this.requestUrlEV.nativeElement.offsetHeight
    const newHeight = (parentHeight - requestHeight - requestUrlHeight - 2)
    if(newHeight !== this.responseHeight) {
      this.responseHeight = newHeight
      this.responseEV.nativeElement.style.height = newHeight + 'px'
    }
  }

  ngOnInit() {
    setInterval(() => {
      this.resizeEvent()
    }, 50)
  }

  ngAfterViewInit() {
    this.resizeEvent()
  }

  pickRequest(header: string) {
    this.deselectAllRequest();
    this.requestTabButtonClassData[header].selected = true;
    this.requestSelectedHeader = header;
  }

  pickResponse(header: string) {
    this.deselectAllResponse();
    this.responseTabButtonClassData[header].selected = true;
    this.responseSelectedHeader = header;
  }

  deselectAllRequest() {
    this.requestTabButtonClassData.header.selected = false;
    this.requestTabButtonClassData.params.selected = false;
    this.requestTabButtonClassData.body.selected = false;
    this.requestTabButtonClassData.cookie.selected = false;
  }

  deselectAllResponse() {
    this.responseTabButtonClassData.body.selected = false;
    this.responseTabButtonClassData.header.selected = false;
    this.responseTabButtonClassData.cookie.selected = false;
  }

  requestTabButtonClass(header: string) {
    return this.requestTabButtonClassData[header];
  }

  responseTabButtonClass(header: string) {
    return this.responseTabButtonClassData[header];
  }

  getRequestData() {
    return this.data.request[this.requestSelectedHeader];
  }

  addRequestElement() {
    let requestData = this.getRequestData();
    requestData.push({
      enable: true,
      key: '',
      value: ''
    });
  }

  removeElement(arr, element) {
    const index = arr.indexOf(element, 0);
    if (index > -1) {
      arr.splice(index, 1);
    }

  }

  async sendRequest() {
    console.log(this.requestUrl);
    let data: any = await this.request.test(this.requestUrl)
    console.log({ data });
    // this.sanitizer.sanitize(SecurityContext.URL, url)
    this.responseUrl = this.sanitizer.bypassSecurityTrustResourceUrl('file:\\\\' + data.url);
    // this.responseBodyData = data.body;
    // console.log(data.body);
    // .subscribe((data) => {
    //   console.log({ data })
    // });
  }
}

// file://C:\Users\bjoe88\AppData\Local\Temp/1581783907382.html
// file://C:\Users\bjoe88\AppData\Local\Temp\7b195b8f-e3c7-4a9c-a343-dc0990f01d4d-response.html
