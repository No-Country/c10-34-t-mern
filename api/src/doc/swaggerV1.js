import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition:{
    openapi:"3.0.0",
    info:{
      title:"api Figaro",
      version:"1.0.0"
    },
    servers:[
      {
        url:"http://localhost:3000/api/v1"
      }
    ]
  },
  apis:[`${path.join(__dirname,"../routes/*.js")}`]
}

export {options}