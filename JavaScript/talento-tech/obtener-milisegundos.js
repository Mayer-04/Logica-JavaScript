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
const getMilliseconds = function ({ day, hour, minutes, seconds }) {
  const dayMilliseconds = day * 24 * 60 * 60 * 1000;
  const hourMilliseconds = hour * 60 * 60 * 1000;
  const minutesMilliseconds = minutes * 60 * 1000;
  const secondsMilliseconds = seconds * 1000;

  return {
    day: dayMilliseconds,
    hour: hourMilliseconds,
    minutes: minutesMilliseconds,
    seconds: secondsMilliseconds,
  };
};

console.log(getMilliseconds({ day: 1, hour: 1, minutes: 1, seconds: 1 }));
