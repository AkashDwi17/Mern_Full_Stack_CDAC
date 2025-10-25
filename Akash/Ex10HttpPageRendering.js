// this examples covers rendering of fileds of html types in the server.

const http = require("http");
const fs = require("fs");

const pno = 1234;
const root = _dirname;

function renderPage(fileName, res) {
  const file = root + fileName;
  fs.createReadStream(file).pipe(res);
}

function processRequest(req, res) {
  if (req.url == "favicon.io") {
    return;
  }
  const inputs = parse(req.url, true).query;
  if (inputs.txtName != undefined) {
    const msg = `<h1> Registration Suscessfull</h1> <p>Welcome Mr.${input.txtName} </p>` 
    
     ${inputs.txtEmail}
     ;
  }
}
http.createServer((req, res) => {}).listen(pno);
