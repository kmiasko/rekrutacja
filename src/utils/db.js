import remove from 'lodash/remove';
import moment from 'moment';
import { LOCALSTORAGE_KEY } from '../index';

const entries = [
  {
    "id": 6310,
    "username": "Bertha",
    "title": "amet Excep",
    "views": 8862,
    "likes": 367,
    "creationDate": "2009-54-09"
  },
  {
    "id": 6843,
    "username": "Susie",
    "title": "commodo aliqua in ea",
    "views": 6941,
    "likes": 4291,
    "creationDate": "2052-52-94"
  },
  {
    "id": 2073,
    "username": "Hulda",
    "title": "aute ipsum dolor deserunt",
    "views": 3166,
    "likes": 7098,
    "creationDate": "2012-18-96"
  },
  {
    "id": 7764,
    "username": "Willie",
    "title": "commodo consectetur nisi id",
    "views": 5678,
    "likes": 8751,
    "creationDate": "2054-90-57"
  },
  {
    "id": 7763,
    "username": "kmiasko",
    "title": "commodo consectetur nisi id",
    "views": 5678,
    "likes": 8751,
    "creationDate": "2012-90-57"
  },
  {
    "id": 1156,
    "username": "Stella",
    "title": "velit in",
    "views": 5121,
    "likes": 8210,
    "creationDate": "2001-23-04"
  },
  {
    "id": 92,
    "username": "Nettie",
    "title": "dolor exercitation tempor pariatur labore",
    "views": 9151,
    "likes": 9456,
    "creationDate": "2033-06-16"
  },
  {
    "id": 931,
    "username": "Eliza",
    "title": "Duis aliqua",
    "views": 3792,
    "likes": 7761,
    "creationDate": "2047-35-75"
  },
  {
    "id": 5301,
    "username": "Susan",
    "title": "ea velit elit ipsum",
    "views": 8229,
    "likes": 3020,
    "creationDate": "2060-19-06"
  },
  {
    "id": 24,
    "username": "Stella",
    "title": "ea Excepteur commodo ad",
    "views": 7446,
    "likes": 7848,
    "creationDate": "2079-43-52"
  },
  {
    "id": 1562,
    "username": "Millie",
    "title": "labore",
    "views": 8319,
    "likes": 2943,
    "creationDate": "2065-63-45"
  },
  {
    "id": 7789,
    "username": "Virgie",
    "title": "aliquip",
    "views": 2141,
    "likes": 2871,
    "creationDate": "2073-49-41"
  },
  {
    "id": 15,
    "username": "Margaret",
    "title": "tempor anim",
    "views": 8737,
    "likes": 4953,
    "creationDate": "2048-92-24"
  },
  {
    "id": 3274,
    "username": "Leila",
    "title": "aliqua reprehenderit incididunt minim",
    "views": 7556,
    "likes": 6728,
    "creationDate": "2079-42-43"
  },
  {
    "id": 9484,
    "username": "Grace",
    "title": "commodo adipisicing",
    "views": 2573,
    "likes": 9386,
    "creationDate": "2003-44-43"
  },
  {
    "id": 3672,
    "username": "Lura",
    "title": "aliquip ut irure",
    "views": 1395,
    "likes": 480,
    "creationDate": "2018-32-61"
  },
  {
    "id": 1432,
    "username": "Willie",
    "title": "minim in proident",
    "views": 1317,
    "likes": 9319,
    "creationDate": "2006-72-89"
  },
  {
    "id": 4603,
    "username": "Johanna",
    "title": "Excepteur ipsum do commodo",
    "views": 8594,
    "likes": 4677,
    "creationDate": "2021-59-05"
  },
  {
    "id": 7432,
    "username": "Viola",
    "title": "tempor occae",
    "views": 6393,
    "likes": 8440,
    "creationDate": "2045-03-74"
  },
  {
    "id": 6871,
    "username": "Lou",
    "title": "ipsum al",
    "views": 2592,
    "likes": 7556,
    "creationDate": "2011-57-73"
  },
  {
    "id": 8824,
    "username": "Cecelia",
    "title": "in",
    "views": 4998,
    "likes": 8108,
    "creationDate": "2045-78-99"
  },
  {
    "id": 6264,
    "username": "Lucinda",
    "title": "Excepteur",
    "views": 1091,
    "likes": 5243,
    "creationDate": "2017-12-29"
  },
  {
    "id": 9217,
    "username": "Emma",
    "title": "enim do velit labore",
    "views": 6891,
    "likes": 4407,
    "creationDate": "2010-38-41"
  }
];

const rand = () => Math.floor(Math.random() * 9999);

const db = (data = entries) => {
  const getAll = () => {
    let tmpdata;
    try {
      tmpdata = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
      if (tmpdata.length === 0) {
        throw new Error('No data');
      }
    } catch (e) {
      tmpdata = data;
    }
    return tmpdata;
  };
  const remove = id => remove(data, item => item.id === id);
  const add = (username, title) => {
    const obj = {
      id: rand(),
      views: rand(),
      likes: rand(),
      creationDate: moment().format('YYYY-MM-DD'),
      title,
      username,
    };
    data = [ obj, ...data ];
    return obj;
  }

  return {
    getAll,
    remove,
    add,
  };
};

export default db(entries);
