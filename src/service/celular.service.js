import { pool } from "../database/db.js";

class CelularService {

    async listarTodos() {
        const apple = await pool.query(
            "SELECT * FROM celulares"
        )
        return apple.rows;
    }

    async creats(modelo, marca, preco, quantidade_estoque) 
 {
        const res = await pool.query("INSERT INTO celulares (modelo, marca, preco, quantidade_estoque) VALUES ($1, $2, $3, $4);", [modelo, marca, preco, quantidade_estoque]);
        return res.rows[0];
    }
}

export const celularService = new CelularService()