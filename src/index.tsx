import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
// import { any } from 'prop-types';

axios
  .get("https://data.sfgov.org/resource/wwmu-gmzc.json")
  .then(res => {
    var filmsData = res.data;
    renderFilmsList(filmsData);
  })
  .catch();

function renderFilmsList(data: any) {
  // var strHTML = ``;
  // var orderNum = 1;

  var pukiString = 'bibi buba bibi buba';
  const element = (
    <ul>
      <li>{pukiString}</li>
      <li>tuki</li>
      <li>tuki</li>
    </ul>
  );

  data.forEach((film: any) => {
    // strHTML += `
    //             <li class="animated fadeIn delay-2s">
    //                 <i class="fas fa-film"></i><span>#${orderNum}</span>
    //                 <p><b>Title: </b>${film.title}</p>
    //                 <p><b>Year: </b>${film.release_year}</p>
    //                 <p><b>Producer: </b>${film.director}</p>
    //                 <button 
    //                  onclick="onMoreInfo('${film.locations}', '${
    //   film.actor_1
    // }', '${film.actor_2}', '${film.actor_3}', '${film.writer}', '${
    //   film.production_company
    // }')">
    //                  <i class="fas fa-hand-point-right"></i>
    //                  More Info</button>
    //             </li>                   
    //         `;
    // orderNum++;
  });
  // console.log(strHTML);
 
const element2 =<p>tututuuuuuuuuuuuuuuuuuuuuuu</p>
  ReactDOM.render(element, document.getElementById("root"));
  ReactDOM.render(element2, document.getElementById("root"));
}

