const express = require('express');
const router = express.Router();
//Require the conroller that exports Skills crud functions
const skillsCtrl = require('../controllers/skills')

//All actual paths begin with "/skills"
//Get /skills
router.get('/', skillsCtrl.index)
// /skills/new
router.get('/new', skillsCtrl.new);
//get /skills/id
router.get('/:id', skillsCtrl.show);

router.get('/:id/edit', skillsCtrl.edit);

router.post('/', skillsCtrl.create);

router.delete('/:id', skillsCtrl.delete);

router.put('/:id', skillsCtrl.update);

module.exports = router;
