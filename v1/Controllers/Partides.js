const client = require("../../Database/Connection.js");
const { v4: uuid } = require("uuid");
const DATE = new Date().toLocaleString("es-ES", { timeZone: "UTC" });

const InsertNewPartida =   (req, res) => {
   
    const value = [
        req.body.id = uuid(),
        req.body.white_player,
        req.body.black_player,
        req.body.winner,
        req.body.date = DATE,
        req.body.createdAt = DATE,
        req.body.updatedAt = DATE,

    ];
    console.log(value);

    const query = `INSERT INTO "Game" ("id", "white_player", "black_player", "winner", "date", "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5, $6, $7)`;

        client.query(query, value, (err) => {
            if (err) {
                res.status(404).json({ error: "No s'ha pogut afegir la Partida" ,err });
            } else {
                res.status(200).json({ message: "La Partida esta afegida correctament" });
            }
        });
};
const GetPartides = (req, res) => {
    const query = `SELECT * FROM "Game"`;
    client.query(query, (err, result) => {
        if (err) {
            res.status(404).json({ error: "No s'ha pogut obtenir les Partides" });
        } else {
            res.status(200).json(result.rows);
        }
    });
};
const GetIDPartida = (req, res) => {
    const value = [req.params.id];
    const query = `SELECT * FROM "Game" WHERE "id" = $1`;
    client.query(query, value, (err, result) => {
        if (err) {
            res.status(404).json({ error: "No s'ha pogut obtenir la Partida" });
        } else {
            res.status(200).json(result.rows);
        }
    });
};
const UpdatePartida = (req, res) => {
    const value = [
        req.body.white_player,
        req.body.black_player,
        req.body.winner,
        req.body.updatedAt = DATE,
        req.body.id
    ]
    console.log(value);
    const query = `UPDATE "Game" SET "white_player" = $1, "black_player" = $2, "winner" = $3,  "updatedAt" = $4 WHERE "id" = $5`;
    client.query(query, value, (err) => {
        if (err) {
            res.status(404).json({ error: "No s'ha pogut actualitzar la Partida" + err});
        } else {
            res.status(200).json({ message: "Partida actualitada correctament" });
        }
    });
}
const DeletePartida = (req, res) => {
    const value = [req.params.id];
    const query = `DELETE FROM "Game" WHERE "id" = $1`;
    client.query(query, value, (err) => {
        if (err) {
            res.status(404).json({ error: "No s'ha pogut eliminar la Partida" });
        } else {
            res.status(200).json({ message: "Partida eliminada correctament" });
        }
    });
}
const GetPartidesJugador = (req, res) => {
    const value = [req.params.id];
    console.log(value);
    const query = `SELECT * FROM "Game" WHERE "white_player" = $1 OR "black_player" = $1`;
    client.query(query, value, (err, result) => {
        if (err) {
            res.status(404).json({ error: "No s'ha pogut obtenir les partides del jugador" +err });
        } else {
            res.status(200).json(result.rows);
        }
    });
}
const GetPartidesJugadorPosicio = (req, res) => {
    const value = [req.params.id, req.params.winner];
    console.log(value);
    const query = `SELECT * FROM "Game" WHERE "white_player" = $1 OR "black_player" = $1 AND "winner" = $2`;
    client.query(query, value, (err, result) => {
        if (err) {
            res.status(404).json({ error: "No s'ha pogut obtenir les partides del jugador" +err });
        } else {
            res.status(200).json(result.rows);
        }
    });
};
const GetPartidesJugadorDate = (req, res) => {
    const value = [req.params.id, req.params.date];
    console.log(value);
    const query = `SELECT * FROM "Game" WHERE "white_player" = $1 OR "black_player" = $1 AND "date" = $2`;
    client.query(query, value, (err, result) => {
        if (err) {
            res.status(404).json({ error: "No s'ha pogut obtenir les partides del jugador" +err });
        } else {
            res.status(200).json(result.rows);
        }
    })
}
const GetPartidesJugadorPosicioDate = (req, res) => {
    const value = [req.params.id, req.params.winner, req.params.date];
    console.log(value);
    const query = `SELECT * FROM "Game" WHERE "white_player" = $1 OR "black_player" = $1 AND "winner" = $2 AND "date" = $3`;
    client.query(query, value, (err, result) => {
        if (err) {
            res.status(404).json({ error: "No s'ha pogut obtenir les partides del jugador" +err });
        } else {
            res.status(200).json(result.rows);
        }
    })
    
}
module.exports = {
    InsertNewPartida,
    GetPartides,
    GetIDPartida,
    UpdatePartida,
    DeletePartida,
    GetPartidesJugador,
    GetPartidesJugadorPosicio,
    GetPartidesJugadorDate,
    GetPartidesJugadorPosicioDate
}

