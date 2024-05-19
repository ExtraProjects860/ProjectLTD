
class RouteToFactory {
    constructor() {
        this.stops = {
            stop1: { type: null, start: null, end: null },
            stop2: { type: null, start: null, end: null },
            stop3: { type: null, start: null, end: null },
            stop4: { type: null, start: null, end: null },
        };
    }

    getStopTimes(stopNumber) {
        return this.stops[`stop${stopNumber}`] || null;
    }

}