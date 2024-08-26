const WIDTH = 400;
const HEIGH = 400;

//generar el mapa del tesoro
let target = {
  x: getRandomNumber(WIDTH),

  y: getRandomNumber(HEIGH)
};

let $map = document.getElementById('map');
 let $distance = document.getElementById('distance');

 //obetener los clicks 
let clicks = 0;


$map.addEventListener('click', function (e) {
    clicks++;
  let distance = getDistance(e, target);

  let distanceHint = getDistanceHint(distance);

   $distance.innerHTML= `<h1>${distanceHint}</h1>` 



   if (distance  < 20 ){


    alert(`you have found the treasure !! ( ͡❛ ͜ʖ ͡❛)  in  ${clicks} clicks! `)
    location.reload();


}

    


});
