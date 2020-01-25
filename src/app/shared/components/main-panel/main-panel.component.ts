import { Component, OnInit } from '@angular/core';

import { faTrash, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent implements OnInit {
  requestHeaderButtonClassData = {
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
  requestSelectedHeader = 'header';
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

  constructor() { }

  ngOnInit() {
  }

  pickHeader(header:string) {
    this.deselectAllHeader();
    this.requestHeaderButtonClassData[header].selected = true;
    this.requestSelectedHeader = header;
  }

  deselectAllHeader() {
    this.requestHeaderButtonClassData.header.selected = false;
    this.requestHeaderButtonClassData.params.selected = false;
    this.requestHeaderButtonClassData.body.selected = false;
    this.requestHeaderButtonClassData.cookie.selected = false;
  }

  requestHeaderButtonClass(header: string) {
    return this.requestHeaderButtonClassData[header];
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
}
