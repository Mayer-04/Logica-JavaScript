/**
 * @typedef {Object} TimeParams
 * @property {number} day
 * @property {number} hour
 * @property {number} minutes
 * @property {number} seconds
 */

/**
 * @param {TimeParams} params
 * @returns {number}
 */

// TODO: Función de expresión - Función anónima
const getMilliseconds = ({ day, hour, minutes, seconds }) => {
  const DAY_IN_MILLISECONDS = day * 24 * 60 * 60 * 1000;
  const HOUR_IN_MILLISECONDS = hour * 60 * 60 * 1000;
  const MINUTES_IN_MILLISECONDS = minutes * 60 * 1000;
  const SECONDS_IN_MILLISECONDS = seconds * 1000;

  return {
    day: DAY_IN_MILLISECONDS,
    hour: HOUR_IN_MILLISECONDS,
    minutes: MINUTES_IN_MILLISECONDS,
    seconds: SECONDS_IN_MILLISECONDS,
  };
};

console.log(getMilliseconds({ day: 1, hour: 2, minutes: 3, seconds: 4 }));
