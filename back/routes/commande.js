const express = require("express");
const Order = require("../models/commande");
const router =express.Router();

router.get("/orderAlluser",  async (req, res) => {
    const orders = await Order.find({}).populate('user');
    res.send(orders);
});

/*router.get("/", async(req, res)=>{
    const orders= await Order.find({user: req.user._id})
    res.send(orders) ;
})
*/
//get all pieces
router.get('/numComm', async (req, res) => {
    try {
        const orders = await Order.find().count();
        res.json(orders);
     } catch (error) {
         res.json({ message : error });
     }
  });
  
  router.get('/limitcom', async (req, res) => {
    try {
        const orders = await Order.find().limit(5);
        res.json(orders);
     } catch (error) {
         res.json({ message : error });
     }
  });
  

router.get('/:id',async(req, res)=>{
   try {
        const order = await Order.findById(req.params.id)
        res.json(order)
   } catch (error) {
       res.json({message : error});
   }
});

//delete facture
router.delete('/:factureId', async (req, res) => {
    try {
        const removedfacture = await Order.remove({ _id: req.params.factureId });
        res.json(removedfacture);
     } catch (error) {
         res.json({ message : error });
     }
  });

router.post('/neworder', async (req, res)=>{
    const newOrder = new Order({
        orderItems : req.body.orderItems,
        shipping : req.body.shipping,
        itemsPrice : req.body.itemsPrice,
        totalPrice : req.body.totalPrice,

    })
    const newOrderCreated = await newOrder.save();
    res.status(200).send({message : "New order created", data : newOrderCreated})

})

router.post('/allord', async (req, res) => {
    const ship = req.body.shipping;
    var condition = ship ? {ship : {$regex : new RegExp(ship), $options : "i"} } :{} ;
    Order.find(condition.nom).
    then(data =>{
      res.send(data)
    })
    .catch(err =>{
      res.status(500).send({ message :
        err.message || "some error"
      });
    });
   });

router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
     } catch (error) {
         res.json({ message : error });
     }
  });






module.exports = router