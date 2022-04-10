const { response } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgresDbBoda',
    database: 'boda',
    port:'5432'
});

const getInvitados = async (request, response) => {
    const result = await pool.query('SELECT * FROM invitados');
    console.table(result.rows);
    response.json(result.rows);
}

const getInvitadoByName = async (request, response) => {
    const param = request.params.param;
    const result = await pool.query(`SELECT * FROM invitados WHERE nombre iLIKE '%${param}%' OR apellido iLIKE '%${param}%'`)
    response.json(result.rows);
}

const saveInvitado = async (request, response) => {
    const {nombre, apellido, confirmar} = request.body;
    const result = await pool.query(`INSERT INTO invitados(nombre, apellido) VALUES ('${nombre}', '${apellido}', 'false')`);
    response.json({
        message: "Invitado ingresado con éxito",
        invitado: {
            nombre: nombre,
            apellido: apellido,
            confirmar: confirmar
        }
    });
}

const deleteInvitado = async (request, response) => {
    const result = pool.query(`DELETE FROM invitados WHERE id = ${request.params.id}`);
    console.log(result);
    response.json('Invitado eliminado exitosamente');
}

const updateInvitado = async (request, response) => {
    const {id, nombre, apellido, confirmar} = request.body;
    const result = await pool.query(`UPDATE invitados SET nombre = '${nombre}', apellido = '${apellido}', confirmar = '${confirmar}' WHERE id = ${id}`)
    response.json({
        message: "Invitado actualizado con éxito",
        ivitado: {
            nombre: nombre,
            apellido: apellido,
            confirmar: confirmar
        }
    });
}

module.exports = {
    getInvitados,
    getInvitadoByName,
    saveInvitado,
    updateInvitado,
    deleteInvitado
}