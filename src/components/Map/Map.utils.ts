import rawRegions from './regions.json';
import rawStyles from './styles.json';

const MAX_ZOOM = 18;
const MIN_ZOOM = 2;
const INITIAL_ZOOM = 4;
const INITIAL_CENTER = {
  lat: -15.6006,
  lng: -56.1004,
};

function loadRegions(map: google.maps.Map) {
  const parsed = JSON.parse(JSON.stringify(rawRegions));
  map.data.addGeoJson(parsed);
}

function getStyles() {
  return JSON.parse(JSON.stringify(rawStyles));
}

export {
  loadRegions,
  getStyles,
  MIN_ZOOM,
  MAX_ZOOM,
  INITIAL_ZOOM,
  INITIAL_CENTER,
};
