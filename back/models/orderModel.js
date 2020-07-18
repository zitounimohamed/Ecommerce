import mongoose from 'mongoose';

const shippingSchema = {
  nom: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  
};

const orderItemSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  qty: { type: Number, required: true },
 // image: { type: String, required: true },
  prix: { type: String, required: true },
  piece: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
});




const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},// relation 
  orderItems: [orderItemSchema],
  shipping: shippingSchema,
  payment: paymentSchema,
  itemsPrice: { type: Number },
  taxPrice: { type: Number },
  shippingPrice: { type: Number },
  totalPrice: { type: Number },
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date },
  isDelivered: { type: Boolean, default: false },
  deliveredAt: { type: Date },
}, {
  timestamps: true
});

const orderModel = mongoose.model("Order", orderSchema);
export default orderModel;