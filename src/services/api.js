import axios from "axios";
const API_BASE_URL = "https://api.deezer.com";

const API_CHARTS_URL = "/chart";
const API_GENRES_URL = "/genre";
const API_SEARCH_URL = "/search";
const API_TOP_TRACKS_RADIO_URL = "/radio/37151/tracks";
export async function loadCharts() {
  try {
    const data = await axios.get(API_CHARTS_URL);

    return data.data;
  } catch (err) {
    throw Error("Failed to load chart");
  }
}

export async function loadTopTracks() {
  try {
    const data = await axios.get(`${API_TOP_TRACKS_RADIO_URL}?limit=10`);

    return data.data.data;
  } catch (err) {
    throw Error("Failed to load tracks");
  }
}

export async function loadGenre(genreId) {
  try {
    const [genreData, radiosData] = await Promise.all([
      axios.get(`${API_GENRES_URL}/${genreId}`),
      axios.get(`${API_GENRES_URL}/${genreId}/radios`),
    ]);

    console.log(genreData);
    console.log(radiosData);

    if (!genreData?.data || !radiosData?.data.data) throw Error();

    const randomIndex = Math.floor(Math.random() * radiosData.data.data.length);
    console.log(randomIndex);
    console.log(radiosData.data.data[randomIndex].tracklist.replace(API_BASE_URL, ""));
    const tracks = await axios(
      radiosData.data.data[randomIndex].tracklist.replace(API_BASE_URL, ""),
    );
    console.log(tracks);
    return {
      genre: genreData.data,
      tracks: tracks.data,
    };
  } catch (err) {
    throw Error("Failed to load genre");
  }
}

export async function loadGenres() {
  try {
    const data = await axios.get(API_GENRES_URL);

    return data.data.data.filter((genre) => genre.name.toLowerCase() !== "all");
  } catch (err) {
    throw Error("Failed to load genres");
  }
}

export async function searchQuery(query) {
  try {
    const data = await axios.get(`${API_SEARCH_URL}?q=${query}`);
    return data.data.data;
  } catch (err) {
    throw Error("Failed to load tracks");
  }
}
