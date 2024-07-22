const{Router}= require('express');

const router= Router();

const empleadosCtrl= require('../controllers/empleados.controller');

router.get('/empleados/saludo',(req,res)=>res.send('hola, estuvo rica la comida!!'));
//consultar un empleado por su id
router.get('/empleados/:id', empleadosCtrl.getEmpleado);
//consultar todos los empleados
router.get('/empleados', empleadosCtrl.getEmpleados);

router.post('/empleados', empleadosCtrl.createEmpleado);

router.delete('/empleados/:id', empleadosCtrl.deleteEmpleado);

router.put('/empleados/:id', empleadosCtrl.updateEmpleado);

module.exports= router;
