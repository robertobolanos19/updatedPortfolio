const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://robertob:${password}@portfolio.fur9xw6.mongodb.net/?retryWrites=true&w=majority&appName=Portfolio`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  dateCreated: String,
  image:String,
  model: String,
})

const Project = mongoose.model('Project', projectSchema)

const project = new Project({
    title: "project7", 
    description: "s euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi  euismod ipsum, sit amet dictum purus hendrerit ut. Ut consequat nisi ut metus malesuada, in eleifend ipsum accumsan.",
    category: "Exploration",
    dateCreated: "year - 2021",
    image: "/imgs/whiteStill.png",
    model: "/dummyModels/test.glb" 
})

project.save().then(result => {
  console.log('project saved!')
  mongoose.connection.close()
})