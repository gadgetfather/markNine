import React, { useState } from "react";
import "./styles.css";

const AllSeries = {
  Thriller: [
    {
      Title: "Death Note ",
      Description:
        "A high-school student discovers a supernatural notebook that grants its user the ability to kill.",
      Image:
        "https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_FMjpg_UX1000_.jpg",
      Rating: `9.8/10`
    },
    {
      Title: "Code Geass",
      Description:
        "After being given a mysterious power to control others, an outcast prince becomes the masked leader of the rebellion against an all powerful empire",
      Image:
        "https://i2.wp.com/doublesama.com/wp-content/uploads/2018/08/Code-Geass-cover.jpg?resize=640%2C960",
      Rating: `9.2/10`
    },
    {
      Title: "Terror in Resonance",
      Description: `Tokyo has been decimated by a terrorist attack, and the only clue to the culprit's identity is a bizarre internet video. While paranoia spreads, two mysterious children form "Sphinx," a clandestine entity determined to pull the trigger on this world."`,
      Image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Terror_in_Resonance_Poster.jpg/220px-Terror_in_Resonance_Poster.jpg",
      Rating: `8.5/10`
    }
  ],
  Sports: [
    {
      Title: "Haikyuu!!",
      Image:
        "https://m.media-amazon.com/images/M/MV5BNzQ1MmJjZDUtMmI5OC00ZDk2LThkODQtODgwYmU0MTIzNDhmXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_.jpg",
      Description: `Determined to be like the volleyball championship's star player Shouyou, a short boy nicknamed "the small giant," joins his school's volleyball club.`,
      Rating: `9.8/10`
    },

    {
      Title: "Hajime no Ippo",
      Description:
        "Makunouchi Ippo is an ordinary high school student in Japan. Since he spends most of his time away from school helping his mother run the family business, he doesn't get to enjoy his younger years like most teenagers.e is saved by a boxer named Takamura. He decides to follow in Takamura's footsteps ",
      Image: "https://cdn.myanimelist.net/images/anime/4/86334.jpg",
      Rating: `10/10`
    },

    {
      Title: "Diamond no Ace",
      Description:
        "Follows the life of Eijun Sawamura, a gifted baseball player who have his own extraordinary pitcher's talent. His goal is one, to become the ace of Seidou High School.",
      Image: "https://cdn.myanimelist.net/images/anime/1153/100511.jpg",
      Rating: `9/10`
    }
  ],

  Action: [
    {
      Title: "Naruto Shipudden",
      Image:
        "https://www.anime-planet.com/images/anime/covers/naruto-shippuden-1131.jpg?t=1579136379",
      Description:
        "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
      Rating: `9.5/10`
    },
    {
      Title: "Attack on Titan",
      Description:
        "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
      Image:
        "https://m.media-amazon.com/images/M/MV5BMTY5ODk1NzUyMl5BMl5BanBnXkFtZTgwMjUyNzEyMTE@._V1_.jpg",
      Rating: `9/10`
    },
    {
      Title: " Dragon Ball Z ",
      Image: "https://cdn.myanimelist.net/images/anime/1607/117271.jpg",
      Description:
        "After learning that he is from another planet, a warrior named Goku and his friends are prompted to defend it from an onslaught of extraterrestrial enemies.",
      Rating: `8.8/10`
    }
  ]
};

const genreNames = Object.keys(AllSeries);

export default function App() {
  const [seriesList, setSeriesList] = useState(AllSeries.Action);

  function getSeriesPost(series) {
    const title = series.Title;
    const imageUrl = series.Image;
    const desc = series.Description;
    const rating = series.Rating;
    const htmlOfList = (
      <li>
        <img alt="poster" src={imageUrl} />
        <div style={{ padding: "0rem 1rem" }}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <p style={{ fontWeight: "bold" }}>{rating}</p>
        </div>
      </li>
    );
    return htmlOfList;
  }

  function genreClickHandler(genre) {
    const series = AllSeries[genre];
    setSeriesList(series);
  }

  return (
    <div className="App">
      <h1>Anime Recommendation</h1>
      <h2>Select a Genre to get Started!</h2>
      <div>
        {genreNames.map((genre) => {
          return (
            <button
              key={genre}
              className="btn"
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <ul>
        {seriesList.map((series) => {
          return getSeriesPost(series);
        })}
      </ul>
    </div>
  );
}
