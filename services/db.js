const mongooose = require('mongoose')

mongooose.connect('mongodb://localhost:27017/e-commerce',()=>{
    console.log("mongo db connection successfull!!!!!!");
})

const Product = mongooose.model('Product',
{

    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
      rate:Number,
      count: Number
    }
  }
)


module.exports = {
    Product
}