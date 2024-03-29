import axios from 'axios';
/* import { translateToPt } from './openAi'; */

const allLangs = [
  'af',
  'sq',
  'am',
  'ar',
  'hy',
  'as',
  'ay',
  'az',
  'bm',
  'eu',
  'be',
  'bn',
  'bho',
  'bs',
  'bg',
  'ca',
  'ceb',
  'zh',
  'co',
  'hr',
  'cs',
  'da',
  'dv',
  'doi',
  'nl',
  'en',
  'eo',
  'et',
  'ee',
  'fil',
  'fi',
  'fr',
  'fy',
  'gl',
  'ka',
  'de',
  'el',
  'gn',
  'gu',
  'ht',
  'ha',
  'haw',
  'he',
  'hi',
  'hmn',
  'hu',
  'is',
  'ig',
  'ilo',
  'id',
  'ga',
  'it',
  'ja',
  'jv',
  'kn',
  'kk',
  'km',
  'rw',
  'gom',
  'ko',
  'kri',
  'ku',
  'ckb',
  'ky',
  'lo',
  'la',
  'lv',
  'ln',
  'lt',
  'lg',
  'lb',
  'mk',
  'mai',
  'mg',
  'ms',
  'ml',
  'mt',
  'mi',
  'mr',
  'lus',
  'mn',
  'my',
  'ne',
  'no',
  'ny',
  'or',
  'om',
  'ps',
  'fa',
  'pl',
  'pt',
  'pa',
  'qu',
  'ro',
  'ru',
  'sm',
  'sa',
  'gd',
  'nso',
  'sr',
  'st',
  'sn',
  'sd',
  'si',
  'sk',
  'sl',
  'so',
  'es',
  'su',
  'sw',
  'sv',
  'tl',
  'tg',
  'ta',
  'tt',
  'te',
  'th',
  'ti',
  'ts',
  'tr',
  'tk',
  'ak',
  'uk',
  'ur',
  'ug',
  'uz',
  'vi',
  'xh',
  'yi',
  'yo',
  'zu',
];

export default async (string) => {
  const langsToTranslate = [
    choiceRandomItem(),
    choiceRandomItem(),
    choiceRandomItem(),
    choiceRandomItem(),
    choiceRandomItem(),
    choiceRandomItem(),
    choiceRandomItem(),
  ];

  console.log(string);

  for (const lang of langsToTranslate) {
    const responseRequest = await axios(
      `https://api.datpmt.com/api/v1/dictionary/translate?string=${string}&to_lang=${lang}`,
    );
    string = responseRequest.data;
  }

  const response = await axios(
    `https://api.datpmt.com/api/v1/dictionary/translate?string=${string}&to_lang=pt`,
  );
  string = response.data;

  return string;
};

function choiceRandomItem(array = allLangs) {
  const randomNum = Math.floor(Math.random() * array.length);
  return array[randomNum];
}
