const connection = require("../database");

// TODO: funciones para las flores
const obtenerFlores = (req,res) => {
    connection.query('SELECT * FROM flores',(error,results) => {
        if (error){
            console.error("Error al obtener las flores",error);
            res.status(500).json({
                error: "Error al obtener las flores",
            })
        }else {
            res.json(results);
        }
    });
};

const obtenerFloresPorId = (req,res) => {
    const id = req.params.id_flor;
    connection.query('SELECT * FROM flores WHERE id_flor= ?',[id],(error,results) => {
        if (error){
            console.error("Error al obtener la flor",error)
            res.status(500).json({error :"Ocurrio un error al obtener la flor"});
        }else if(results.length === 0){
            res.status(500).json({error: "La flor no fue encontrando"});
        }else{
            res.json(results[0]);
        }
    });
}

const crearFlores = (req,res) => {
    const {nombre,descripcion,imagen} = req.body;

    //console.log(`${nombre} ${descripcion} ${imagen}`)
    connection.query('INSERT INTO flores (nombre, descripcion, imagen) VALUES (?,?,?)',
    [nombre,descripcion,imagen], (error,results) => {
        if (error){
            console.error("Error al agregar La flor",error);
            res.status(500).json({error:"Error al agregar la flor"})
        }else{
        res.json({message: "Flor agregado"});
        }
    })
}

const actualizarFloresPorId =(req,res) => {
    const id = req.params.id_flor;
    const {nombre,descripcion, imagen} = req.body;

    connection.query('UPDATE flores SET nombre = ?, descripcion = ?, imagen = ? WHERE id_flor = ?',
    [nombre,descripcion,imagen,id],(error,results) => {
        if (error){
            res.status(500).json({error :"Ocurrio un error al actualizar la flor"});
        }else{
            res.status(200).json({message:"La flor fue actualizado correctamente"});
        }
    })
}

const eliminarFloresPorId = (req,res) => {
    const id = req.params.id_flor;

    connection.query('DELETE FROM flores WHERE id_flor = ?',[id],(error,results) => {
        
        if (error){
            console.error("Error al eliminar la flor",error);
            res.status(500).json({error :"Ocurrio un error al eliminar la flor"});
        }else{
            res.json({message:"La flor fue elimanado correctamente"});
        }
    });
}


const buscarFloresPorNombre = (req,res) => {
    const nombre = req.params.nombre_flor;
    connection.query('SELECT flores.id_flor AS id_flor, flores.nombre AS nombre, flores.descripcion AS descripcion, flores.imagen AS imagen FROM flores WHERE flores.nombre LIKE ?',[`%${nombre}%`],(error,results) => {
        if (error){
            console.error("Error al obtener la flor",error)
            res.status(500).json({error :"Ocurrio un error al obtener la flor"});
        }else if(results.length === 0){
            res.status(500).json({error: "La flor no fue encontrando"});
        }else{
            res.json(results[0]);
        }
    });
}




module.exports = {
    obtenerFlores,
    obtenerFloresPorId,
    crearFlores,
    eliminarFloresPorId,
    actualizarFloresPorId,
    buscarFloresPorNombre,
};