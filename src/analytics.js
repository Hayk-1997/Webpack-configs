class Analytics {
    constructor() {
        this.count = 0;
    }
    countAnalytics () {
        this.count += Math.round(Math.random() * 10);
    }
}

const initializeAnalytics = new Analytics();

initializeAnalytics.countAnalytics();

console.log(initializeAnalytics.count);