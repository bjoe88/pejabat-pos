import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const { ipcRenderer } = require('electron')
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  test(requestData) {
    ipcRenderer.on('asynchronous-reply', (event, arg) => {
      console.log(arg) // prints "pong"
      console.log(arg.body) // prints "pong"
      console.log(arg.response.headers) // prints "pong"
    })
    ipcRenderer.send('asynchronous-message', requestData)
  }
}
