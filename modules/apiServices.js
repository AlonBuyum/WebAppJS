class NBAService {

    constructor() {
        // field
        this.resJson;
    }
 
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

    getSpecific(group, individual) {


        console.log(`in getSpecific - group is ${group}, individual is ${individual}`);
        const response = async () => {
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
        response();
    }
}

export { NBAService };