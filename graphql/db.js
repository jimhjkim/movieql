export let movies = [
  {
    id: "0",
    name: "Star Wars",
    score: 18,
  },
  {
    id: "1",
    name: "Avengers",
    score: 22,
  },
  {
    id: "2",
    name: "Godfather",
    score: 50,
  },
  {
    id: "3",
    name: "James Bond",
    score: 55,
  },
  {
    id: "4",
    name: "Logan",
    score: 33,
  },
  {
    id: "5",
    name: "Office",
    score: 44,
  },
  {
    id: "6",
    name: "Mulan",
    score: 11,
  },
];

export const getMovies = () => movies;
export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
