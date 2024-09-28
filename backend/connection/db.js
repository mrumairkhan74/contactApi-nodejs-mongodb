const { default: mongoose } = require("mongoose")

mongoose.connect('mongodb://localhost:27017/simple')
.then(()=>{
    console.log('Database  Connected.....!!!!!')
})
.catch((error)=>{
    console.log(error);
})