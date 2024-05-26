class ArrivalDestination {
    constructor(formData) {
        this.meal = {
            type: formData.mealType,
            start: formData.mealStart,
            end: formData.mealEnd
        };
        this.waitingTime = {
            type: formData.waitingTimeType,
            start: formData.waitingTimeStart,
            end: formData.waitingTimeEnd
        };
        this.tripClosure = {
            retorno: formData.tripClosureRetorno,
            hour: formData.tripClosureHour
        };
        this.tripId = formData.tripId;
    }

    getMeal() {
        return this.meal;
    }

    getMealType() {
        return this.meal.type;
    }

    getMealStart() {
        return this.meal.start;
    }

    getMealEnd() {
        return this.meal.end;
    }

    getWaitingTime() {
        return this.waitingTime;
    }

    getWaitingTimeType() {
        return this.waitingTime.type;
    }

    getWaitingTimeStart() {
        return this.waitingTime.start;
    }

    getWaitingTimeEnd() {
        return this.waitingTime.end;
    }

    getTripClosure() {
        return this.tripClosure;
    }

    getTripClosureRetorno() {
        return this.tripClosure.retorno;
    }

    getTripClosureHour() {
        return this.tripClosure.hour;
    }

    getTripId() {
        return this.tripId;
    }

    async insertDataArrivalDestination(db) {
        try {
            const sql = `INSERT INTO Chegada_Destino 
            (id_viagem, refeicao_tipo, refeicao_inicio, refeicao_fim, tempo_espera_tipo, tempo_espera_inicio, tempo_espera_fim, retorno, hora) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`
            
            const values = [
                this.getTripId(),
                this.getMeal().type,
                this.getMeal().start,
                this.getMeal().end,
                this.getWaitingTime().type,
                this.getWaitingTime().start,
                this.getWaitingTime().end,
                this.getTripClosure().retorno,
                this.getTripClosure().hour
            ];

            console.log("Valores Chegada de Destino " + values);

            await db.query(sql, values);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ArrivalDestination;