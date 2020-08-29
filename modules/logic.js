class Logic {

    // ctor
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

    // props
    getTeams = function () {
        return this.teams;
    }
    setTeams = function (v) {
        this.teams = v;
    }


    getGames = function () {
        return this.games;
    }
    setGames = function (v) {
        this.games = v;
    }


    getPlayers = function () {
        return this.players;
    }
    setPlayers = function (v) {
        this.players = v;
    }


    async searchPlayersAsync(detail) {
        const res = await this.players.find(player => player.team.id == detail);
        console.log('found searched player:\n' + res);
        return res;

    }
}

export { Logic };
