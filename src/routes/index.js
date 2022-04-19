const { Router } = require('express');
const router = Router();

const { getInvitados, saveInvitado, getInvitadoByName, deleteInvitado, updateInvitado } = require('../controllers/index.controller')

router.get('/invitados', getInvitados);
router.get('/invitados/:param', getInvitadoByName);
router.post('/invitados', saveInvitado);
router.put('/invitados', updateInvitado);
router.delete('/invitados/:id', deleteInvitado);

module.exports = router;