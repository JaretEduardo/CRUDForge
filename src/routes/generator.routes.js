const express = require('express');
const router = express.Router();

// Ruta temporal para probar
router.get('/', (req, res) => {
    res.json({ message: 'Generador de CRUD funcionando' });
});

module.exports = router;