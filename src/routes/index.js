const { Router } = require('express');
const router = Router();

const { getInvitados, saveInvitado, getInvitadoByName, deleteInvitado, updateInvitado, getInvitadoByConfirm } = require('../controllers/index.controller')

router.get('/invitados', getInvitados);
router.get('/invitados/:param', getInvitadoByName);
router.get('/invitados/guestManager/:param', getInvitadoByConfirm);
router.post('/invitados', saveInvitado);
router.put('/invitados', updateInvitado);
router.delete('/invitados/:id', deleteInvitado);

module.exports = router;