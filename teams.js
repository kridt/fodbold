let url = new URLSearchParams(window.location.search);
let api_token = "EbcDwnt2X2QCUF9OeXvVJvToNFwWbYaIN6kb4gOfcrT0ygwS3zuciGbLjXeP";
let include = "&include=squad.player,coach";


function fetchTeam() {

    if (url.has("id")) {
        fetch(`https://soccer.sportmonks.com/api/v2.0/teams/${url.get("id")}?api_token=${api_token}${include}`)
            .then(res => res.json())
            .then(function (data) {
                /* console.log(data.data); */


                let teamData = data.data;
                let nameTitle = document.querySelector(".mainTeamName");
                let coachName = document.querySelector(".coachName");
                let coachAge = document.querySelector(".coachAge");
                let coachImg = document.querySelector(".coachImg");
                let coachNation = document.querySelector(".coachNation");
                let bigLogo = document.querySelector(".bigLogo");
                let teamList = teamData.squad.data;
           /*      lav en foreach på teamlist i commonname */
                


                nameTitle.innerHTML = teamData.name;
                coachName.innerHTML = teamData.coach.data.fullname;
                coachAge.innerHTML = teamData.coach.data.birthdate;
                coachNation.innerHTML = teamData.coach.data.nationality;
                coachImg.src = teamData.coach.data.image_path;
                bigLogo.src = teamData.logo_path;
                console.log(teamData); 
               
                /* teamList.forEach(function (players) {
                    let playerList = document.querySelector(".mainCompetition");
                    const playerName = document.createElement('div');
                    playerName.classList.add('playerName');
                    playerName.innerHTML = `
                   <p>hej</p>
                   
                   `
                    playerList.appendChild(playerName)
    
                })  */


                })
            }



    }

fetchTeam()