import { app } from 'electron';
import { ipcMain } from 'electron';
import * as fs from 'fs'
import got from 'got'
export function start() {
  ipcMain.on('asynchronous-message', async (event, arg) => {
    let response = await got(arg)
    const prettyPath = app.getPath('temp') + '\\' + (new Date()).getTime() + '.html'
    fs.writeFileSync(prettyPath, response.body, { encoding: 'utf8' })
    // console.log(prettyPath)
    event.reply('asynchronous-reply', { response, prettyPath, body: response.body })
  })
}
