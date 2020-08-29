class NBAService {

    constructor() {
        // field
        this.resJson;
    }
    // properties
    // an example of a get prop that return a promise
    // getJsonValue = function () {
    //    return new Promise((res, rej) => {
    //         res(this.resJson);
    //     });
    // }
    getJsonValue = function () {
        return this.resJson;
    }
    setJsonValue = function (v) {
        this.resJson = v;
    }

    async getSpecificAsync(group, individual) {
        console.log(`in getSpecific - group is ${group}, individual is ${individual}`);
        const theResponse = await fetch("https://free-nba.p.rapidapi.com/" + group + "/" + individual, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": "8a84a6d322msh003aff95e915e9fp161216jsn3196639c0c6d"
            }
        });
        this.resJson = await theResponse.json()
            .catch(err => {
                console.log(err);
            });
    };
}


class dataService {

    constructor() {
        // field
        this.teamsJson;
        this.gamesJson;
        this.playersJson;
    }
    // properties
    // an example of a get prop that return a promise
    // getJsonValue = function () {
    //    return new Promise((res, rej) => {
    //         res(this.resJson);
    //     });
    // }

    //teams
    getTeamsJson = function () {
        return this.teamsJson;
    }
    setTeamsJson = function (v) {
        this.teamsJson = v;
    }

    // games
    getGamesJson = function () {
        return this.gamesJson;
    }
    setGamesJson = function (v) {
        this.gamesJson = v;
    }

    // players
    getPlayersJson = function () {
        return this.playersJson;
    }
    setPlayersJson = function (v) {
        this.playersJson = v;
    }


    async getTeamsAsync() {
        const theResponse = await fetch("https://free-nba.p.rapidapi.com/teams?page=0", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": "8a84a6d322msh003aff95e915e9fp161216jsn3196639c0c6d"
            }
        });
        this.teamsJson = await theResponse.json()
            .catch(err => {
                console.log(err);
            });

    };

    async getGamesAsync() {
        const theResponse = await fetch("https://free-nba.p.rapidapi.com/games?page=0&per_page=25", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": "8a84a6d322msh003aff95e915e9fp161216jsn3196639c0c6d"
            }
        });
        this.gamesJson = await theResponse.json()
            .catch(err => {
                console.log(err);
            });

    };


    async getPlayersAsync() {
        const theResponse = await fetch("https://free-nba.p.rapidapi.com/players?page=0&per_page=25", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": "8a84a6d322msh003aff95e915e9fp161216jsn3196639c0c6d"
            }
        });
        this.playersJson = await theResponse.json()
            .catch(err => {
                console.log(err);
            });

    };

    // לכל משחק יש שתי קבוצות
    // לכל שחקן יש קבוצה
    // לקבוצה אין שיוך מובנה לישויות האחרות
}




export { NBAService, dataService };