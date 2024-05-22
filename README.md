# movie_app

## Tech Stack:

- Vite
- React
- JavaScript
- Tailwind CSS

## API notes:

The API used is the [OMDB API](https://www.omdbapi.com/).

### Useful OMDB API details:

**Parameters:**
- t - Movie title to search for.
- type - Type of result to return.
    - Options: movie, series, episode.
- y - Year of release.
- plot - Return short or full polot.

**Search:**
- s - Movie title to search for.
    - Required for search.
- type, y both apply here as well.
- page - Page number to return.
    - Note: might help with randomization?

**Thoughts about functionality:**
- Use Axios to get data asynchronously.
- Implement a search textbox with a button to search by title.
    - Figure out how to fit this in the navbar.
- Dropdown for type to search by movie series or episode.
- I wanted to randomize it, but we'd need an IMDB ID or a movie title.
	- I might be able to use Chat GPT to generate a random list of 100-1,000 movies and store that in an array or something.
