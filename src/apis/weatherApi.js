import { keys } from '../utils/config';

// import Weather from 'OpenWeatherMap/api';

// const client = new Weather({
//     apiKey: keys[2].openWeatherMapKey
// });

// export const getAllTemp = () => {
// }

let weather = require('openweather-apis');

weather.setLang('en');
weather.setCityId(5103580);
weather.setUnits('imperial');
weather.setAPPID(keys[2].openWeatherMapKey);

export { weather };