const { response, request } = require('express');
const express = require('express');
const { getUser } = require('./controller');
const router = express.Router();

router.get('/:username', async (req = request, resp = response, next) => {
  const result = await getUser(req.params.username);
  if(result.message=="no existe username"){
    resp.json(result);
    resp.status(404);
  }else{
    resp.json(result);
    resp.status(200);
  }
  
});

module.exports = router;
