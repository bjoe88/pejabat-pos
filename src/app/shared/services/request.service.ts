import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const { ipcRenderer } = require('electron')
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  test(requestData) {
    return new Promise((resolve, reject) => {
      ipcRenderer.on('asynchronous-reply', (event, arg) => {
        // console.log(arg) // prints "pong"
        // console.log(arg.body) // prints "pong"
        // console.log(arg.response.headers) // prints "pong"
        resolve(arg)
      })
      ipcRenderer.send('asynchronous-message', requestData)
    })
  }
}
