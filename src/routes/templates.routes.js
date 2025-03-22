const express = require('express');
const router = express.Router();

// Ruta temporal para probar
router.get('/', (req, res) => {
    res.json({ message: 'Gestor de plantillas funcionando' });
});

module.exports = router;