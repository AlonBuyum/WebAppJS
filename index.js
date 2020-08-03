
(function main(window)
{
   // const UI_target = window.document.body;

    fetch("https://spotifystefan-skliarovv1.p.rapidapi.com/search", {
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "Spotifystefan-skliarovV1.p.rapidapi.com",
            "x-rapidapi-key": "insert your key so we wont expose our keys online",
            "content-type": "application/x-www-form-urlencoded"
        },
        "body": {
            "q": "john",
            "accessToken": "a"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });


})(this);
