"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var electron_2 = require("electron");
var fs = require("fs");
var request = require("request");
function start() {
    electron_2.ipcMain.on('asynchronous-message', function (event, arg) {
        request(arg, function (err, response, body) {
            var url = electron_1.app.getPath('temp') + '\\' + (new Date()).getTime() + '.html';
            fs.writeFileSync(url, body, { encoding: 'utf8' });
            console.log(url);
            event.reply('asynchronous-reply', { err: err, response: response, url: url });
        });
    });
}
exports.start = start;
//# sourceMappingURL=request.js.map