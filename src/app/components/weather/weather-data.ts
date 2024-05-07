import { iWeather } from '../../interfaces/weather';

export const weatherData: iWeather[] = [
  {
    city_name: 'Vancouver',
    visit_from: 'December',
    visit_to: 'February',
    temperatures: [
      { season: 'Spring', night: 5, morning: 15 },
      { season: 'Summer', night: 10, morning: 20 },
      { season: 'Winter', night: -5, morning: 5 },
      { season: 'Autumn', night: 2, morning: 12 },
    ],
  },
  {
    city_name: 'Québec City',
    visit_from: 'October',
    visit_to: 'November',
    temperatures: [
      { season: 'Spring', night: 15, morning: 25 },
      { season: 'Summer', night: 20, morning: 30 },
      { season: 'Winter', night: 5, morning: 15 },
      { season: 'Autumn', night: 12, morning: 22 },
    ],
  },

  {
    city_name: 'Montreal',
    visit_from: 'September',
    visit_to: 'November',
    temperatures: [
      { season: 'Spring', night: 10, morning: 20 },
      { season: 'Summer', night: 25, morning: 35 },
      { season: 'Winter', night: 0, morning: 10 },
      { season: 'Autumn', night: 8, morning: 18 },
    ],
  },
  {
    city_name: 'Toronto',
    visit_from: 'October',
    visit_to: 'November',
    temperatures: [
      { season: 'Spring', night: 12, morning: 22 },
      { season: 'Summer', night: 27, morning: 37 },
      { season: 'Winter', night: 2, morning: 12 },
      { season: 'Autumn', night: 10, morning: 20 },
    ],
  },
  {
    city_name: 'Calgary',
    visit_from: 'September',
    visit_to: 'November',
    temperatures: [
      { season: 'Spring', night: 18, morning: 28 },
      { season: 'Summer', night: 23, morning: 33 },
      { season: 'Winter', night: 5, morning: 15 },
      { season: 'Autumn', night: 12, morning: 22 },
    ],
  },
  {
    city_name: 'Victoria',
    visit_from: 'October',
    visit_to: 'November',
    temperatures: [
      { season: 'Spring', night: 15, morning: 25 },
      { season: 'Summer', night: 20, morning: 30 },
      { season: 'Winter', night: 5, morning: 15 },
      { season: 'Autumn', night: 12, morning: 22 },
    ],
  },
  {
    city_name: 'Ottawa',
    visit_from: 'December',
    visit_to: 'February',
    temperatures: [
      { season: 'Spring', night: 0, morning: 8 },
      { season: 'Summer', night: 5, morning: 15 },
      { season: 'Winter', night: -10, morning: 0 },
      { season: 'Autumn', night: -2, morning: 6 },
    ],
  },
  {
    city_name: 'Saskatoon',
    visit_from: 'December',
    visit_to: 'February',
    temperatures: [
      { season: 'Spring', night: 5, morning: 15 },
      { season: 'Summer', night: 10, morning: 20 },
      { season: 'Winter', night: -5, morning: 5 },
      { season: 'Autumn', night: 2, morning: 12 },
    ],
  },
  {
    city_name: 'Edmonton',
    visit_from: 'December',
    visit_to: 'February',
    temperatures: [
      { season: 'Spring', night: 12, morning: 22 },
      { season: 'Summer', night: 27, morning: 37 },
      { season: 'Winter', night: 2, morning: 12 },
      { season: 'Autumn', night: 10, morning: 20 },
    ],
  },
  {
    city_name: 'Halifax',
    visit_from: 'September',
    visit_to: 'November',
    temperatures: [
      { season: 'Spring', night: 18, morning: 28 },
      { season: 'Summer', night: 23, morning: 33 },
      { season: 'Winter', night: 5, morning: 15 },
      { season: 'Autumn', night: 12, morning: 22 },
    ],
  },
];
