import { app } from 'electron';
import { ipcMain } from 'electron';
import * as fs from 'fs'
import * as request from 'request';
export function start() {
  ipcMain.on('asynchronous-message', (event, arg) => {
    request(arg, function (err, response, body) {
      const url = app.getPath('temp') + '\\' + (new Date()).getTime() + '.html'
      fs.writeFileSync(url, body, { encoding: 'utf8' })
      console.log(url)
      event.reply('asynchronous-reply', { err, response, url })
    })
  })
}
