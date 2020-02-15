// const { ipcMain } = require('electron')
import { app } from 'electron';
import { ipcMain } from 'electron';
import * as request from 'request';
export function start() {
  ipcMain.on('asynchronous-message', (event, arg) => {
    request(arg, function (err, response, body) {
      console.log('temp', app.getPath('temp'));
      event.reply('asynchronous-reply', { err, response, body })
    })
  })

  // ipcMain.on('synchronous-message', (event, arg) => {
  //   setTimeout(() => {
  //     console.log(arg)
  //     event.returnValue = ''
  //   }, 1000)
  // })
}

