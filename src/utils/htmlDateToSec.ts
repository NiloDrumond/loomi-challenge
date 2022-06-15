// Takes a date string returned by an HTML input and turns it into seconds epoch
function htmlDatetoSec(raw: string): number {
  return Date.parse(`${raw}T00:00`) / 1000;
}

export { htmlDatetoSec };
