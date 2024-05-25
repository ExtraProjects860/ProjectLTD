const ConnectionDatabase = require("./ConnectionDatabase");
const RouteToFactory = require("./RouteToFactory");

class RouteBackFactory extends RouteToFactory {
    // se não puder herdar é só fazer o mesmo que RouteToFactory
    constructor(stops) {
        super(stops);
        this.db = new ConnectionDatabase();
    }

    async insertDataBackFactory(tripId) {
        try {
            await this.db.connect();

            const sql = `INSERT INTO Parada_Volta 
            (id_viagem, tipo, inicio, fim) 
            VALUES (?, ?, ?, ?)`;

            for (let i = 1; i <= 4; i++) {
                const stop = this.getStopTimesBack(i);
                if (stop) {
                    const values = [tripId, stop.type, stop.start, stop.end];
                    console.log("Valores volta fábrica " + values);
                    await this.db.query(sql, values);
                }
            }

            return true;
        } catch (error) {
            throw error;
        } finally {
            await this.db.close();
        }
    }
}

module.exports = RouteBackFactory;