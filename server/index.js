const express = require('express')
const app = express()
const port = 3000
const cors=require('cors')

app.use(express.json());
app.use(cors());

const users=[
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "janesmith@example.com"
  },
  {
    "id": 3,
    "name": "Michael Johnson",
    "email": "michael.johnson@example.com"
  },
  {
    "id": 4,
    "name": "Emily Davis",
    "email": "emily.davis@example.com"
  },
  {
    "id": 5,
    "name": "Chris Brown",
    "email": "chris.brown@example.com"
  }
]


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/users',(req,res)=>{
  res.send(users)
})

app.post('/',(req,res)=>{

    console.log(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})