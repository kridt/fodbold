let api_token = "EbcDwnt2X2QCUF9OeXvVJvToNFwWbYaIN6kb4gOfcrT0ygwS3zuciGbLjXeP";



    fetch(`https://soccer.sportmonks.com/api/v2.0/leagues?api_token=` + api_token)
        .then(res => res.json())
        .then(function (data) {


            
            let allContainer = document.querySelector(".mainIndex")
            
            data.data.forEach(function (competition) {
                
                const container = document.createElement('div');
                container.classList.add('people');
                container.innerHTML = `
                <img class="logo" src="${competition.logo_path}" alt="logo">
                <a href="competition.html?id=${competition.current_season_id}">${competition.name}</a>
                `
                allContainer.appendChild(container)
                
            });
        })
        
