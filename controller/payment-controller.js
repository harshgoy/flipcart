import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const stripe = require('stripe')('sk_test_51NvnFCSFdBIjz8ZMsJD6iY0EYegUvA3vFiIwWIRJnp3w0b3ukC4HLulltNVTfL2RUwqnkQFICeDVVPbJHGF3AsAv00a2mZiz5B');

export const addPaymentGateway=async (request,response)=>{
    try{

    const {products} = request.body;
    console.log(products);
    const lineItems=products.map((product)=>({
        price_data:{
            currency:'inr',
            product_data:{
                name:product.title.longTitle
            },
            unit_amount:product.price.cost*100
        },
        quantity:1
    }))
    console.log(stripe);
    const session = await stripe.checkout.sessions.create({
        payment_method_types:['card'],
        line_items:lineItems,
        mode:'payment',
        success_url: `success`,
        cancel_url: `cancel`,


    })
    response.json({id:session.id})
}
catch(error){
console.log(error);
}
    

}

