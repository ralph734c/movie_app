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
- Make a random movie option the default.
    - Should clicking the movie image go to IMDB, or randomize?
    - Maybe a button is better, for a clear user experience?
    - Could randomize the year, maybe?
- Make search an option as well.
- A dropdown for the moview type?
