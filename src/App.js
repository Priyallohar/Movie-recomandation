import "./styles.css";
import React, { useState } from "react";

const movieData = [
  {
    id: 1,
    title: "Harry Potter Goblet Of Fire",
    category: "Adventure",
    Rating: 7.7,
    img: "https://www.themoviedb.org/t/p/w500/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
    desc: `When Harry gets chosen as the fourth participant in the inter-school Triwizard Tournament, he is unwittingly pulled into a dark conspiracy that slowly unveils its dangerous agenda.`
  },
  {
    id: 2,
    title: "The Lord Of The Rings",
    category: "Adventure",
    Rating: 8.8,
    img:
      "https://imageio.forbes.com/specials-images/imageserve/63d2fde9063d4369c089b917/0x0.jpg?format=jpg&width=1200",
    desc: `The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil. Its many worlds and creatures were drawn from Tolkien's extensive knowledge of philology and folklore.`
  },
  {
    id: 3,
    title: "Passenger",
    category: "Adventure",
    Rating: 7,
    img:
      "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/DP_3244378_PASSENGERS%20%282016%29_1400x2100_English%20%28US%29_2.jpg?itok=TYolDZ12",
    desc: `During a voyage to a distant planet, Jim's hypersleep pod malfunctions which wakes him up. So, he and fellow passenger work together to prevent their spaceship from meeting with a disaster.`
  },
  {
    id: 4,
    title: "Star Wars: The Rise of Skywalker",
    category: "Action",
    Rating: 6.6,
    img:
      "https://lumiere-a.akamaihd.net/v1/images/5dae6362590084000157a693-image_c580d63a.jpeg?region=0,0,1536,864https://i.ebayimg.com/images/g/pzgAAOSwNxVhUJk6/s-l1600.jpghttps://i.ebayimg.com/images/g/pzgAAOSwNxVhUJk6/s-l1600.jpg",
    desc: `The revival of Emperor Palpatine resurrects the battle between the Resistance and the First Order while the Jedi's legendary conflict with the Sith Lord comes to a head.`
  },
  {
    id: 5,
    title: "The Wolverine",
    category: "Action",
    Rating: 6.7,
    img:
      "https://lh3.ggpht.com/-__tT_G-Amy8/UfYevvU2FZI/AAAAAAAABdY/cizm2u75ISI/Wolverine-Immortal-Poster_thumb12.jpg?imgmax=800",
    desc: `Logan travels to Tokyo to meet Yashida, an old acquaintance who is dying. The situation regresses when Yashida offers to take away his healing abilities, but Logan refuses.`
  },
  {
    id: 8,
    title: "Avatar",
    category: "Action",
    Rating: 7.9,
    img:
      "https://c8.alamy.com/comp/P42M9N/original-film-title-avatar-english-title-avatar-film-director-james-cameron-year-2009-credit-20th-century-fox-album-P42M9N.jpg",
    desc: `Jake, who is paraplegic, replaces his twin on the Na'vi inhabited Pandora for a corporate mission. After the natives accept him as one of their own, he must decide where his loyalties lie.`
  },
  {
    id: 7,
    title: "Avengers Infinity War",
    category: "Action",
    Rating: 8.4,
    img:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81xteNM7XyL._SL1500_.jpg",
    desc: `The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.`
  },
  {
    id: 9,
    title: "Mirage",
    category: "Romantic",
    Rating: 7.4,
    img:
      "https://www.themoviedb.org/t/p/original/6S2wECQuy4QKaGgKvialqBfnPBY.jpg",
    desc: `Vera, a mother of one, interacts with the ghost of a child and saves his life. However, her actions cause a space-time continuum glitch, altering reality.`
  },
  {
    id: 10,
    title: "Dil Bechara",
    category: "Romantic",
    Rating: 8.4,
    img:
      "https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/Dil-Bechara-1.jpg",
    desc: `While struggling to survive, Manny and Kizie, who each have a terminal illness, fall in love with each other. Thereafter, the two try to spend the rest of their days being happy and staying positive.`
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter the movieData array based on the selected category
  const filteredMovies = selectedCategory
    ? movieData.filter((movie) => movie.category === selectedCategory)
    : movieData;

  return (
    <div className="main">
      <h1 className="heading">Movie List</h1>

      <section class="links">
        <button>
          <a href="https://github.com/Priyallohar/Movie-recomandation">
            Git Code
          </a>
        </button>
        <button>
          <a href="https://priyalneogportfolio.netlify.app/">Portfolio</a>
        </button>
      </section>
      <div className="buttons">
        <button className="button" onClick={() => setSelectedCategory(null)}>
          All
        </button>
        <button
          className="button"
          onClick={() => setSelectedCategory("Action")}
        >
          Action
        </button>
        <button
          className="button"
          onClick={() => setSelectedCategory("Adventure")}
        >
          Adventure
        </button>
        <button
          className="button"
          onClick={() => setSelectedCategory("Romantic")}
        >
          Romantic
        </button>
      </div>
      <div className="moviegroup">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="Movieitem">
            <h2 className="movietitle">{movie.title}</h2>
            <img src={movie.img} alt={movie.title} className="movieimage" />
            <p className="movierating">Rating: {movie.Rating}</p>
            <p className="moviedesc">{movie.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
