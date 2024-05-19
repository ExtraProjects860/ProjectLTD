class ArrivalDestination {
    constructor() {
        this.meal = { type: null, start: null, end: null };
        this.waitingTime = { type: null, start: null, end: null };
        this.tripClosure = { retorno: null, hour: null };
        this.tripId = null;
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
}