class Data {

    constructor() {
        // field
        this.teams = [];
        this.games = [];
        this.players = [];
    }
    // properties
    // an example of a get prop that return a promise
    // getJsonValue = function () {
    //    return new Promise((res, rej) => {
    //         res(this.resJson);
    //     });
    // }
    getTeamsValue = function () {
        return this.teams;
    }
    setTeamsValue = function (v) {
        this.teams =  v.data;
    }


    getGamesValue = function () {
        return this.games;
    }
    setGamesValue = function (v) {
        this.games =  v.data;
    }


    getPlayersValue = function () {
        return this.players;
    }
    setPlayersValue = function (v) {
        this.players = v.data;
    }
 
}

export { Data };
