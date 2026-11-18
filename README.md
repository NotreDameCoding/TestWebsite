# Populatle 🌿

A daily geography game. You get a continent and a population. Draw a loop around a bundle of countries (or tap countries one at a time) to get as close to that number as you can.

- 5 rounds a day, up to 1000 points each. Everyone gets the same puzzle each day.
- Cozy jazz, rain and birdsong are generated live in the browser with the Web Audio API, so there are no audio files.
- Progress, streaks and a shareable emoji result are saved in the browser.

## Run it
Files: `index.html` (page layout), `style.css` (theme and look), `script.js` (game logic, map and music). Open it through any web server, or turn on **GitHub Pages** (Settings → Pages → deploy from `main`).
Opening the file directly (`file://`) won't load the map, because browsers block that.

## Map data
The map loads from `world-atlas` (Natural Earth, 1:50m) on a CDN.
To work offline, save https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json as `data/countries-50m.json`.

Populations are approximate 2024 estimates, stored in `POP_TABLE` near the top of the script. Edit them there.

## Ideas for the club
- Add a "hard mode" that hides the running total
- Add more continents/regions (Middle East, Caribbean…)
- Swap the jazz chord progression in `PROG`
