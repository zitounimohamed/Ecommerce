const express = require("express");
const router = express.Router();
const Piece = require("../models/piece");
const mongoose = require ('mongoose')
const multer = require("multer");


var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" || ext !== ".png") {
      return cb(res.status(400).end("only jpg, png are allowed"), false);
    }
    cb(null, true);
  }
});
var upload = multer({ storage: storage }).single("file"); //predifinit fl node

//=================================
//             Piece
//=================================
//add new piece
router.post("/newpiece", async (req, res) => {
  //console.log(req.file);
  const piece = new Piece(req.body);
  try {
    const savedpiece = await piece.save();
    res.send(savedpiece);
  } catch (error) {
    console.log(error.message);
    if (error.name === "ValidationError") {
      next(createError(422, error.message));
    }
    return res.json({ message: error });
  }
});
//uploading the image
router.post("/uploadimage", (req, res) => {
  upload(req, res, err => {
    if (err) {
      console.log(err);
      return res.json({ success: false, err });
    }    

    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename
    });
  });
});




//get all piece in landing Page
router.get("/getPieces", (req, res) => {
  const pageSize = 10;
  const page = +req.query.page;
  const query = req.query.query;

  let order = req.body.order ? req.body.order : "asc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  // let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  // let skip = parseInt(req.body.skip);

  Piece.find({
    nom: {
      $regex: new RegExp(query),
    },
  })
    .sort([[sortBy, order]])
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .exec((err, pieces) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ success: false, err });
      }
      res.status(200).json({ success: true, pieces, postSize: pieces.length });
    });
});

router.get('/allpiece', async (req, res) => {
  try {
      const pieces = await Piece.find();
      res.json(pieces);
   } catch (error) {
       res.json({ message : error });
   }
});
//get all pieces
router.get('/allpieces', async (req, res) => {
  try {
      const pieces = await Piece.find().limit(3);
      res.json(pieces);
   } catch (error) {
       res.json({ message : error });
   }
});

//get a piece
router.get('/:pieceId', async (req, res) => {
   try {
       const pieces = await Piece.findById(req.params.pieceId);
       res.json(pieces);
    } catch (error) {
        res.json({ message : error });
    }
});



//delete piece
router.delete('/:pieceId', async (req, res) => {
  try {
      const removedpieces = await Piece.remove({ _id: req.params.pieceId });
      res.json(removedpieces);
   } catch (error) {
       res.json({ message : error });
   }
});

//update piece 
router.put('/:pieceId',async  (req,res)=>{
  try {
      const Upiece = await Piece.findByIdAndUpdate({_id: req.params.pieceId },req.body)
          .then(function(){
              Piece.findOne({_id : req.params.pieceId}).then(function(){
                  res.send(Upiece)
              })
          })

   
  } catch (error) {
      res.json({message : error})

  }
})
//rechrche 
router.post('/all', async (req, res) => {
  const nom = req.body.nom;
  var condition = nom ? {nom : {$regex : new RegExp(nom), $options : "i"} } :{} ;
  Piece.find(condition).
  then(data =>{
    res.send(data)
  })
  .catch(err =>{
    res.status(500).send({ message :
      err.message || "some error"
    });
  });
 });

//

router.post('/allpiece', async (req, res) => {
  const categ = req.body.categ;
  const marque= req.body.marque;
  const modele = req.body.modele;
  var condition = categ ? {categ : {$regex : new RegExp(categ), $options : "i"} } :{} ;
  var marq = marq ? {marque : {$regex : new RegExp(marque), $options : "i"} } :{} ;
  var model = modele ? {modele : {$regex : new RegExp(modele), $options : "i"} } :{} ;

  Piece.find(condition,marq,model).
  then(data =>{
    res.send(data)
  })
  .catch(err =>{
    res.status(500).send({ message :
      err.message || "some error"
    });
  });
 });

module.exports = router;