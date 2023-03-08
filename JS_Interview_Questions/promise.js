const cart = ['Kurta' , 'Shirt' ,'Paint'];

const promise = getOrderId(cart);

promise.then(function(orderId){
    console.log(orderId)
})
.catch(function (err){
    console.log(err.message)
})


// Producer

function getOrderId(cart){
    const promise =  new Promise(function(resolve , reject){
        
        if(!validateCart(cart)){
            const err = new Error("Cart is empty");
            reject(err);
        }

        const orderId = 1234;
        if(orderId) resolve(orderId);
        else reject("Something went wrong")

    })

    return promise;
}

function validateCart(cart){
    return false;
}