let providedInput;
function logSubmit(event) {
    
    providedInput =  document.querySelector(".labelled").value;
    console.log(providedInput);
    document.querySelector(".labelled").value = "";
    event.preventDefault();

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1879196cb0msha21c9c10f0a5493p1552e0jsne5aa2c930959',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };
    
    var cityInput = providedInput;
    
    fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix='+cityInput, options)
        .then(response => response.json())
        .then(
            response => 
            {
                var x = response.data;
                console.log(x);

                for(let num=0; num<x.length; num++){
                    console.log(x[num].city);
                    console.log(x[num].country);
                    
                    document.querySelectorAll(".row")[num].children[0].innerHTML = num+1;
                    document.querySelectorAll(".row")[num].children[1].innerHTML = x[num].city;
                    document.querySelectorAll(".row")[num].children[2].innerHTML = x[num].country;
                }

                
            }
        )
        .catch(err => console.error(err)); 

        document.querySelector(".BigTable").style.display = "block";
    }
    
    const form = document.getElementById('form');
    form.addEventListener('submit', logSubmit);




