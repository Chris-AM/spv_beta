const { Router } = require('express');

const router = Router();

router.get("/", ()=> {
  console.log('Products works');
});
module.exports = router;