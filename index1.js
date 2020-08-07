
(function main(window) {
    const UI_target = window.document.body;

    window.document.addEventListener("DOMContentLoaded", () => {
        const btnEl = window.document.getElementById("resBTN");
        btnEl.addEventListener("click", getResponse, false);
    });

    function getResponse() {
        const inputEl = window.document.getElementById("teamName");
        console.log(inputEl.value);
        //#region 
        //     fetch("https://free-nba.p.rapidapi.com/teams/"+inputEl.value, {
        //         "method": "GET",
        //         "headers": {
        //             "x-rapidapi-host": "free-nba.p.rapidapi.com",
        //             "x-rapidapi-key": "8a84a6d322msh003aff95e915e9fp161216jsn3196639c0c6d"
        //         }
        //     })
        //         .then(response => response.json())
        //         .then(data => {
        //             relayResponse(data);
        //         })
        //         .catch(err => {
        //             console.log(err);
        //         });
        // }
        //#endregion

        const response = async () => {
            const theResponse = await fetch("https://free-nba.p.rapidapi.com/teams/" + inputEl.value, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "free-nba.p.rapidapi.com",
                    "x-rapidapi-key": "8a84a6d322msh003aff95e915e9fp161216jsn3196639c0c6d"
                }
            });
            const resJson = await theResponse.json()
                .catch(err => {
                    console.log(err);
                });
            relayResponse(resJson);
        };
        response();
    }

        function relayResponse(data) {
            console.log(data);
            let contentArr = Object.entries(data);
            // send contentArr to be filtered at this point
            displayResults(contentArr);
        }

        function displayResults(filteredResults) {
            const resContEL = window.document.getElementById("contentEl");

            if (!Array.isArray(filteredResults) || filteredResults.length === 0) {
                console.log('response is empty');
                resContEL.innerHTML = 'Item Not Found';
            }
            else if (Array.isArray(filteredResults) && filteredResults.length > 0) {
                let listElement = window.document.createElement("ul");
                for (let i = 0; i < filteredResults.length; i++) {

                    let listItemElement = window.document.createElement("li");
                    console.log('response property is: ' + filteredResults[i]);
                    listItemElement.innerHTML = filteredResults[i];
                    listElement.appendChild(listItemElement);
                }
                resContEL.appendChild(listElement);
            }
        }
    }) (this);



