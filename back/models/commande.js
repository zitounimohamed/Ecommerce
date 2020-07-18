const mongoose = require("mongoose") ;

const Infoclient = new mongoose.Schema ({
    address: { 
        type: String,
        required: true },
    city: { 
        type: String,
        required: true },
    postalCode: {
        type: String,
        required: true },
    nom: { 
        type: String,
        required: true },
    })
const commandeItems = new mongoose.Schema({
    nom: {
        type: String,
        required: true 
    },
    qty: { 
        type: Number,
        required: true 
    },
    file: {
        type: String,
        required: true 
    },
    prix: {
        type: String,
        required: true 
    },
    pieces: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'piece',
      required: true
    },
})
const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
    },
    orderItems: [commandeItems],
    shipping: Infoclient,
    itemsPrice: {
        type: Number
    },
    shippingPrice: {
        type: Number 
    },
    totalPrice: {
        type: Number 
    },
    isDelivered: {
        type: Boolean, default: false 
    },
    deliveredAt: {type: Date 
    }
  
})

const Commande = mongoose.model("Commande", orderSchema);
module.exports= Commande