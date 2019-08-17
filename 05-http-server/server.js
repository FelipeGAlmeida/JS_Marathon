const http = require('http')
const fs = require('fs')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000

function requestHandler(request, response){
    if(request.url === '/'){
        fs.readFile('05-http-server/index.html' , 'utf-8', (error, fileContent) => {
            if(error){
                response.statusCode = 502
                response.end(JSON.stringify({error: 502, msg: "Internal server error"}))
            } 
            else{
                response.statusCode = 200
                response.end(fileContent)
            }
        })
    }else if(request.url === '/digaoi'){
        response.statusCode = 200
        response.end(JSON.stringify({msg: "Oi!"}))
    }else {
        response.statusCode = 404
        response.end(JSON.stringify({error: 404, msg: "Not Found"}))
    }
}

http.createServer(requestHandler).listen(port, () => {
    console.log(`Server up on http://${host}:${port}`);
});
 