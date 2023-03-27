import mongoose from "mongoose";

const URI=`${process.env.MONGO_URI}`

const connectDB = async() => {
  mongoose.set('strictQuery', false)
  const conn = await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
  }).then(() => console.log(`**** RUNING DATABASES ****`))
    .catch(err => console.log('ERRRO EN LA BASE DE DATOS >>>>> ', err));
}


export default connectDB