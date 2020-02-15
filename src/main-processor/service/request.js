"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { ipcMain } = require('electron')
var electron_1 = require("electron");
var electron_2 = require("electron");
var request = require("request");
function start() {
    electron_2.ipcMain.on('asynchronous-message', function (event, arg) {
        request(arg, function (err, response, body) {
            console.log('temp', electron_1.app.getPath('temp'));
            event.reply('asynchronous-reply', { err: err, response: response, body: body });
        });
    });
    // ipcMain.on('synchronous-message', (event, arg) => {
    //   setTimeout(() => {
    //     console.log(arg)
    //     event.returnValue = ''
    //   }, 1000)
    // })
}
exports.start = start;
//# sourceMappingURL=request.js.map