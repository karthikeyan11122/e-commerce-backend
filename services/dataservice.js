
const db = require('./db')

//all-products
const allproducts = ()=>{
    return db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"No data is present"
                }
            }
        }
    )
}

module.exports = {
    allproducts
}