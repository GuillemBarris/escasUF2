const client = require("../../Database/Connection.js");
const { v4: uuid } = require("uuid");
const DATE = new Date().toLocaleString("es-ES", { timeZone: "UTC" });

const InsertNewJugador =   (req, res) => {



    const value = [
        req.body.ID = uuid(),
        req.body.username,
        req.body.fullname,
        req.body.createdAt = DATE,
        req.body.updatedAt = DATE
    ];
    console.log(value);

    const query = `INSERT INTO "Players" ("ID", "username", "fullname", "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5)`;

        client.query(query, value, (err) => {
            if (err) {
                res.status(404).json({ error: "No s'ha pogut afegir el Jugador" ,err });
            } else {
                res.status(200).json({ message: "Jugador afegit correctament" });
            }
        });
};
const GetJugadors = (req, res) => {
    const query = `SELECT * FROM "Players"`;
    client.query(query, (err, result) => {
        if (err) {
            res.status(404).json({ error: "No s'ha pogut obtenir els jugadors" });
        } else {
            res.status(200).json(result.rows);
        }
    });
}
const GetIDJugador = (req, res) => {
    const value = [req.params.id];
    const query = `SELECT * FROM "Players" WHERE "ID" = $1`;
    client.query(query, value, (err, result) => {
        if (err) {
            res.status(404).json({ error: "No s'ha pogut obtenir el jugador" });
        } else {
            res.status(200).json(result.rows);
        }
    });
}
const UpdateJugador = (req, res) => {
    const value = [
        req.body.username,
        req.body.fullname,
        req.body.updatedAt = DATE,
        req.params.id
    ];
    const query = `UPDATE "Players" SET "username" = $1, "fullname" = $2, "updatedAt" = $3 WHERE "ID" = $4`;
    client.query(query, value, (err) => {
        if (err) {
            res.status(404).json({ error: "No s'ha pogut actualitzar el jugador" + err });
        } else {
            res.status(200).json({ message: "Jugador actualitzat correctament" });
        }
    });
}
const DeleteJugador = (req, res) => {
    const value = [req.params.id];
    const query = `DELETE FROM "Players" WHERE "ID" = $1`;
    client.query(query, value, (err) => {
        if (err) {
            res.status(404).json({ error: "No s'ha pogut eliminar el jugador" });
        } else {
            res.status(200).json({ message: "Jugador eliminat correctament" });
        }
    });
    
}

        
    
    
    module.exports = {
        InsertNewJugador,
        GetJugadors,
        GetIDJugador,
        UpdateJugador,
        DeleteJugador,
     
        
    }