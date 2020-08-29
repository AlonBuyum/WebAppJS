import { NBAService, dataService } from './modules/services.js';
import {Data} from  './modules/DAL.js';
import {Logic} from './modules/logic.js';

(function main(window) {
    const nbaServ = new NBAService();
    const dataServ = new dataService();
    const DB = new Data();
    const BL = new Logic();

    document.addEventListener("DOMContentLoaded", () => {
        const btnEl = document.getElementById("resBTN");
        btnEl.addEventListener("click", getResponseAsync, false);
        getDataAsync();

    });
    //#region 
    // function getResponse() {
    //     const inputEl = window.document.getElementById("teamName");
    //     console.log(inputEl.value);
    //     //#region 
    //     //     fetch("https://free-nba.p.rapidapi.com/teams/"+inputEl.value, {
    //     //         "method": "GET",
    //     //         "headers": {
    //     //             "x-rapidapi-host": "free-nba.p.rapidapi.com",
    //     //             "x-rapidapi-key": "8a84a6d322msh003aff95e915e9fp161216jsn3196639c0c6d"
    //     //         }
    //     //     })
    //     //         .then(response => response.json())
    //     //         .then(data => {
    //     //             relayResponse(data);
    //     //         })
    //     //         .catch(err => {
    //     //             console.log(err);
    //     //         });
    //     // }
    //     //#endregion

    //     const response = async () => {                                 /* replace teams with another category name */
    //         const theResponse = await fetch("https://free-nba.p.rapidapi.com/teams/" + inputEl.value, {
    //             "method": "GET",
    //             "headers": {
    //                 "x-rapidapi-host": "free-nba.p.rapidapi.com",
    //                 "x-rapidapi-key": "8a84a6d322msh003aff95e915e9fp161216jsn3196639c0c6d"
    //             }
    //         });
    //         const resJson = await theResponse.json()
    //             .catch(err => {
    //                 console.log(err);
    //             });
    //         relayResponse(resJson);
    //     };
    //     response();
    // }
    //#endregion
   
     async function getDataAsync(){
        await dataServ.getTeamsAsync();
        await dataServ.getGamesAsync();
        await dataServ.getPlayersAsync();
        let teams = dataServ.getTeamsJson();
        let games = dataServ.getGamesJson();
        let players = dataServ.getPlayersJson();
        DB.setTeamsValue(teams);
        DB.setGamesValue(games);
        DB.setPlayersValue(players);
        BL.setTeams(DB.getTeamsValue());
        BL.setGames(DB.getGamesValue());
        BL.setPlayers(DB.getPlayersValue());


        console.log(DB.getTeamsValue());
        console.log(DB.getGamesValue());
        console.log(DB.getPlayersValue());
        // לחזור על הפעולות פה גם עם השחקנים והמשחקים
    };
   
    async function getResponseAsync() {
        const inputGroup = document.getElementById("group");
        const inputSpecific = document.getElementById("specific");
        console.log(`entered group: ${inputGroup.value} | entered specific: ${inputSpecific.value}`);
        await nbaServ.getSpecificAsync(inputGroup.value, inputSpecific.value);
        let res = nbaServ.getJsonValue();
        relayResponse(res);
        let playerSearch = await BL.searchPlayersAsync(inputSpecific.value);
        relayResponse(playerSearch);
        console.log('end of getResponse');
    }


    function relayResponse(data) {
        console.log(data);
        let contentArr = Object.entries(data);
        // send contentArr to be filtered at this point
        displayResults(contentArr);
    }


    function displayResults(filteredResults) {
        const resContEL = document.getElementById("contentEl");

        if (!Array.isArray(filteredResults) || filteredResults.length === 0) {
            console.log('response is empty');
            resContEL.innerHTML = 'Item Not Found';
        }
        else if (Array.isArray(filteredResults) && filteredResults.length > 0) {
            let listElement = document.createElement("ul");
            for (let i = 0; i < filteredResults.length; i++) {

                let listItemElement = document.createElement("li");
                console.log('response property is: ' + filteredResults[i]);
                listItemElement.innerHTML = filteredResults[i];
                listElement.appendChild(listItemElement);
            }
            resContEL.appendChild(listElement);
        }
    }
})(this);






