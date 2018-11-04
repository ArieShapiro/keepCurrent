import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";




axios
  .get("https://data.sfgov.org/resource/wwmu-gmzc.json")
  .then(res => {
    console.log(res.data);

    class List extends React.Component {
      render() {
        return (
          <ul>
            {res.data.map((film: any, index: number) => (
              <li  key={index}>

                <p>
                  <b>Title: </b>{film.title}
                </p>

                <p>
                  <b>Year: </b>{film.release_year}
                </p>

                <p>
                  <b>Producer: </b>{film.director}
                </p>

                <p>
                  <b>Writer: </b>{film.writer}
                </p>

                <p>
                  <b>Location: </b>{film.locations}
                </p>

              </li>
            ))}
          </ul>
        );
      }
    }

    function App() {
      return (
        <div>
          <List />
        </div>
      );
    }

    ReactDOM.render(<App />, document.getElementById("root"));
  })
  .catch();
