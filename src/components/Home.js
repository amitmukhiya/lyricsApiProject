import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://genius.p.rapidapi.com/artists/16775/songs",
      headers: {
        "x-rapidapi-host": "genius.p.rapidapi.com",
        "x-rapidapi-key": "4ffb88556fmshf70568f4e4dbf39p1a16e2jsnc94f7afba88b",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setSongs(response.data.response.songs);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(songs);
  return (
    <>
      <div className="d-flex justify-content-center flex-wrap">
        {songs?.map((song, index) => (
          <div key={index} className="m-4">

            <div className="card bg-dark" style={{ width: "18rem" }}>
              <img
                src={song.header_image_thumbnail_url}
                className="card-img-top"
                alt={song.title}
              />
              <div className="card-body">
                <h5 className="card-title text-warning">{song.title}</h5>
                <p className="card-text text-warning">By {song.artist_names}.</p>
              </div>
              <div className="card-body d-flex justify-content-center">
                <a href="#" className="card-link btn btn-primary">
                  More
                </a>
                <a href={song.url} className="card-link btn btn-secondary">
                  Lyrics
                </a>
              </div>
            </div>
          </div>
        )
        )}
      </div>
    </>
  );
}
