const empleadosCtrl={};

//Consultar un empleado por su id
empleadosCtrl.getEmpleado= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM empleado WHERE id = ?',[id], (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows[0]);
        })
    })
}

empleadosCtrl.getEmpleados= (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM empleado', (err, rows) => {
            if(err){
                console.log(err);
            }
            res.json(rows);
        })
    })
}

empleadosCtrl.createEmpleado= (req, res) => {
    const data = req.body;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO empleado SET ?',[data], (err, empleado) => {
            res.redirect('/empleados');
        })
    })
}

empleadosCtrl.deleteEmpleado= (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) =>{
        conn.query('DELETE FROM empleado WHERE id = ?',[id], (err, rows) => {
            res.json(rows);
        })
    })
}


empleadosCtrl.updateEmpleado= (req, res) => {
    const data = req.body;
    const {id}= req.params;
    console.log(data);
    req.getConnection((err, conn) =>{
        conn.query('UPDATE empleado SET ? WHERE id = ?',[data, id], (err, empleado) => {
            this.getEmpleados
        })
    })
}


module.exports=empleadosCtrl;