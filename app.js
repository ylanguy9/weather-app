

let apiKey = '15b417fc0310b363a894126cf62996a6';






const informations = document.querySelector('.infos');
const images = document.querySelector('.img')
const geolocalisation = document.querySelector('.located')
const para = document.querySelector('.para')

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      para.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    let lat = position.coords.latitude 
    let lng = position.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`)

    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let temp = data.main.temp;
      let pays = data.sys.country;
      let ville = data.name;
      let icon = data.weather[0].icon
      
      

      let p = document.createElement('p');
      let h4 = document.createElement('h4');
      let h3 = document.createElement('h3');
      let img = document.createElement('img')
      

      h4.textContent = `Ville: ${ville}`;
      h3.textContent = `Pays: ${pays}`;
      p.textContent = `Température actuelle : ${temp}°C`;
      img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
      

      informations.append(p, h4, h3);
      images.append(img)

      
      

    });

    


  }

  geolocalisation.addEventListener("click", () => {
    getLocation()
    
  })
  
    


