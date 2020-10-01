let url = new URLSearchParams(window.location.search);
let api_token = "EbcDwnt2X2QCUF9OeXvVJvToNFwWbYaIN6kb4gOfcrT0ygwS3zuciGbLjXeP";
let include = "&include=squad,coach,transfers,trophies";

function fetchTeam() {

    if (url.has("id")) {
        fetch(`https://soccer.sportmonks.com/api/v2.0/teams/${url.get("id")}?api_token=${api_token}${include}`)
            .then(res => res.json())
            .then(function (data) {
                console.log(data.data);


                let teamData = data.data;
                let nameTitle = document.querySelector(".mainTeamName");
                let coachName = document.querySelector(".coachName");


                nameTitle.innerHTML = teamData.name;
                coachName.innerHTML = teamData.coach.data.fullname;

                

                })
            }



    }

fetchTeam()