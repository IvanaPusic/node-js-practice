import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

// If we want to use asynchronous readFile or write file we import fs from fs/promises
const port = process.env.PORT;
// with es modules we don't have an access to __filename or __dirname so we have to create our own
// url.fileURLToPath will give us a path of this file
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Filename: ${__filename}, Dirname: ${__dirname}`);
console.log('import mta url', import.meta.url)
const server = http.createServer( async(req,res) => {
    // Send response to client
    // res.write("Hello world");

    // Setting header
    // res.setHeader("Content-Type", "text/html");
    // res.statusCode = 404;
    // if(res.statusCode === 404){
    //     res.end("<h1>Ooops, Page not found! </h1>");
    // }

    // res.writeHead(500, { 'Content-Type': 'application/json'});
    // res.end(JSON.stringify({ message: 'Server Error'}));
    // console.log(req.url, req.method)

    try {
      // Check if GET request 
      if(req.method === 'GET'){
        let filePath;
        if(req.url === '/') {
          filePath = path.join(__dirname, 'public', 'index.html');
        } else if(req.url ='/about'){
          filePath = path.join(__dirname, 'public', 'about.html');
        } else {
          throw new Error("Not Found")
          // res.writeHead(404, { 'Content-Type': 'text/html'});
          // res.end('<h1>Not Found!</h1>');
        }
        const data = await fs.readFile(filePath);
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
      } else{
        throw new Error("Method not allowed");
      }
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error');
    }
   
});
server.listen(port, () => console.log(`Server listening on port ${port}`));