let url = new URLSearchParams(window.location.search);
let api_token = "EbcDwnt2X2QCUF9OeXvVJvToNFwWbYaIN6kb4gOfcrT0ygwS3zuciGbLjXeP";


function fetchCompetition() {

    if (url.has("id")) {
        fetch(`https://soccer.sportmonks.com/api/v2.0/teams/season/${url.get("id")}?api_token=${api_token}`)
            .then(res => res.json())
            .then(function (data) {
                console.log(data);
                data.data.forEach(function (league) {
    
                    let leagueTitle = document.querySelector(".mainCompetition");
                    const leagueName = document.createElement('div');
                    leagueName.classList.add('leagueName');
                    leagueName.innerHTML = `
                   <img src="${league.logo_path}">
                    <a href="teams.html?id=${league.id}">${league.name}</a>
                   
                   `
                    leagueTitle.appendChild(leagueName)
    
                })
            })
    
    
    
    }
     }

     fetchCompetition()