export async function GET() {
  console.log("GET");
  delay();
  return Response.json({ data: fakeData })
}

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
const fakeData = [
  {
    "_id": "669e60e383404897259e4acb",
    "index": 0,
    "guid": "dd4f85c8-0526-49c4-bc72-98787f59f033",
    "isActive": false,
    "balance": "$1,199.37",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "brown",
    "name": "Alexis Bass",
    "gender": "female",
    "company": "ZENTIX",
    "email": "alexisbass@zentix.com",
    "phone": "+1 (882) 550-2144",
    "address": "973 Butler Place, Edenburg, Iowa, 1782",
    "about": "Voluptate minim consectetur ea in cupidatat proident incididunt ex cupidatat eu et et ea. Id ipsum laborum sunt id aliqua enim pariatur dolor Lorem exercitation et tempor dolor exercitation. Nostrud labore dolor tempor laborum anim ad aliqua eiusmod velit commodo. Voluptate Lorem voluptate non veniam nulla ipsum sunt ad laboris ad consectetur id Lorem velit. Ullamco minim esse proident commodo minim. Nostrud amet dolor irure consequat minim voluptate sunt magna nisi consequat labore aliquip aliquip tempor.\r\n",
    "registered": "2019-04-06T07:28:32 +03:00",
    "latitude": 25.047609,
    "longitude": 173.990529,
    "tags": [
      "do",
      "qui",
      "mollit",
      "ex",
      "ex",
      "anim",
      "ad"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Kathie Ross"
      },
      {
        "id": 1,
        "name": "Talley Frye"
      },
      {
        "id": 2,
        "name": "Isabelle Guerra"
      }
    ],
    "greeting": "Hello, Alexis Bass! You have 10 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "669e60e3ae4dbc0af94091a8",
    "index": 1,
    "guid": "2cc7f549-fc44-413c-bf78-64afa4050d68",
    "isActive": true,
    "balance": "$2,876.08",
    "picture": "http://placehold.it/32x32",
    "age": 32,
    "eyeColor": "green",
    "name": "Rice Velez",
    "gender": "male",
    "company": "CENTREE",
    "email": "ricevelez@centree.com",
    "phone": "+1 (862) 419-3987",
    "address": "554 Portland Avenue, Mahtowa, Northern Mariana Islands, 8387",
    "about": "Veniam nostrud nostrud ad esse minim velit cillum duis anim commodo. Nisi tempor do reprehenderit culpa do aute duis ad sint ullamco incididunt. Id cupidatat dolore consectetur exercitation culpa magna anim incididunt proident consectetur Lorem aliqua. Sunt consectetur cillum nostrud laborum officia aliquip anim exercitation.\r\n",
    "registered": "2020-04-28T12:51:51 +03:00",
    "latitude": 66.322622,
    "longitude": 139.926709,
    "tags": [
      "enim",
      "incididunt",
      "do",
      "sit",
      "laboris",
      "adipisicing",
      "ullamco"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Ware Meyers"
      },
      {
        "id": 1,
        "name": "Golden Gilbert"
      },
      {
        "id": 2,
        "name": "Gillespie Perry"
      }
    ],
    "greeting": "Hello, Rice Velez! You have 5 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "669e60e3e144947ddb9f8539",
    "index": 2,
    "guid": "37f236cb-34b8-442c-ab85-c54075aa9c9a",
    "isActive": true,
    "balance": "$3,991.04",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "blue",
    "name": "Donovan Mcdowell",
    "gender": "male",
    "company": "CENTREXIN",
    "email": "donovanmcdowell@centrexin.com",
    "phone": "+1 (985) 590-2185",
    "address": "655 Bergen Court, Garberville, Alabama, 5134",
    "about": "Nisi aliqua est culpa aliquip deserunt ipsum minim do Lorem ea non cillum consequat. Ut id ea minim nisi pariatur eiusmod aliqua elit aliquip ipsum nulla quis. Laboris commodo fugiat reprehenderit proident ullamco sunt mollit sint do eiusmod elit. Sit ut laborum aute adipisicing sit fugiat reprehenderit.\r\n",
    "registered": "2022-01-15T07:26:45 +03:00",
    "latitude": -13.900335,
    "longitude": -125.485947,
    "tags": [
      "et",
      "quis",
      "et",
      "non",
      "et",
      "officia",
      "sit"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Kristi Grant"
      },
      {
        "id": 1,
        "name": "Kristin Bradford"
      },
      {
        "id": 2,
        "name": "Fox Powers"
      }
    ],
    "greeting": "Hello, Donovan Mcdowell! You have 3 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "669e60e3fbc5d72950c509ca",
    "index": 3,
    "guid": "1645b24f-051b-417d-903c-e6ec0a6de41c",
    "isActive": false,
    "balance": "$2,486.57",
    "picture": "http://placehold.it/32x32",
    "age": 32,
    "eyeColor": "brown",
    "name": "Alberta Wheeler",
    "gender": "female",
    "company": "MATRIXITY",
    "email": "albertawheeler@matrixity.com",
    "phone": "+1 (808) 554-3307",
    "address": "351 Hendrix Street, Datil, North Carolina, 1700",
    "about": "Ut ad ad id excepteur deserunt fugiat exercitation dolore consectetur laborum. Duis minim exercitation id minim elit pariatur anim minim dolore irure ad tempor labore. In laboris adipisicing consectetur in adipisicing. Fugiat laborum aute ea veniam sunt ut eu sit reprehenderit adipisicing magna. Eiusmod non pariatur aute id elit do magna velit.\r\n",
    "registered": "2019-09-19T10:43:59 +03:00",
    "latitude": 25.126416,
    "longitude": 67.92875,
    "tags": [
      "officia",
      "nostrud",
      "dolor",
      "laboris",
      "irure",
      "amet",
      "consectetur"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Josefa Moses"
      },
      {
        "id": 1,
        "name": "Kari Berger"
      },
      {
        "id": 2,
        "name": "Estrada Daniel"
      }
    ],
    "greeting": "Hello, Alberta Wheeler! You have 2 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "669e60e3dfed3e87d2664f5a",
    "index": 4,
    "guid": "e96f7590-b4e7-4519-9a81-93ddb04f7ea7",
    "isActive": false,
    "balance": "$1,540.02",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "green",
    "name": "Janelle Hobbs",
    "gender": "female",
    "company": "DIGIPRINT",
    "email": "janellehobbs@digiprint.com",
    "phone": "+1 (987) 545-2709",
    "address": "742 Landis Court, Zeba, Puerto Rico, 8120",
    "about": "Esse consequat magna aliqua veniam amet dolor nostrud esse eu. Reprehenderit eiusmod enim qui dolore ex dolore incididunt culpa commodo fugiat est cupidatat cupidatat cillum. Fugiat sint commodo ullamco commodo aliquip aliquip Lorem ut incididunt officia eu officia. Ad eiusmod consectetur ad labore nulla id magna occaecat reprehenderit consequat nisi fugiat. Amet enim adipisicing cillum commodo dolore officia qui culpa deserunt culpa laboris proident consectetur ipsum.\r\n",
    "registered": "2022-06-24T02:20:49 +03:00",
    "latitude": 42.958087,
    "longitude": -125.605603,
    "tags": [
      "id",
      "non",
      "duis",
      "officia",
      "esse",
      "ad",
      "duis"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Bird Short"
      },
      {
        "id": 1,
        "name": "Jacklyn Lynch"
      },
      {
        "id": 2,
        "name": "Colette Farrell"
      }
    ],
    "greeting": "Hello, Janelle Hobbs! You have 2 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "669e60e36680ab8c3d6e2f54",
    "index": 5,
    "guid": "a1215f7b-7613-4cb7-8533-5d2fba62b25b",
    "isActive": true,
    "balance": "$3,990.67",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "green",
    "name": "Tracie Figueroa",
    "gender": "female",
    "company": "QUONATA",
    "email": "traciefigueroa@quonata.com",
    "phone": "+1 (904) 599-2368",
    "address": "804 Chapel Street, Dyckesville, Nevada, 7789",
    "about": "Culpa eiusmod ea dolore officia occaecat commodo elit nostrud. Sint nisi ex magna in ad cupidatat occaecat. Laborum quis officia esse quis dolor. Anim duis sit esse consectetur mollit cupidatat. Ipsum ipsum pariatur irure dolore voluptate laborum aute irure sint magna enim exercitation.\r\n",
    "registered": "2023-05-01T02:16:09 +03:00",
    "latitude": 33.685288,
    "longitude": -33.028244,
    "tags": [
      "occaecat",
      "excepteur",
      "quis",
      "tempor",
      "et",
      "enim",
      "amet"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Autumn Vega"
      },
      {
        "id": 1,
        "name": "June Gomez"
      },
      {
        "id": 2,
        "name": "Dennis Oneal"
      }
    ],
    "greeting": "Hello, Tracie Figueroa! You have 3 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "669e60e37cccb0e632b31ac8",
    "index": 6,
    "guid": "bc30d1ed-d5e5-4cf8-94e3-2f148922f42f",
    "isActive": false,
    "balance": "$2,860.52",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "brown",
    "name": "Dee Green",
    "gender": "female",
    "company": "GEEKOLA",
    "email": "deegreen@geekola.com",
    "phone": "+1 (953) 541-3845",
    "address": "393 Noble Street, Cartwright, Montana, 8203",
    "about": "Id et velit incididunt aliquip. Consequat veniam do occaecat Lorem ex velit sint laborum magna laboris aliquip proident. Duis fugiat consequat minim deserunt in aliqua qui adipisicing cillum consequat. Commodo minim amet ipsum dolore irure excepteur aliquip laborum nulla ea Lorem elit. Eiusmod aliqua commodo et minim elit proident ut ut ullamco nulla exercitation elit ad officia. Lorem mollit aute in nulla do esse duis ex et do fugiat labore irure. Amet tempor fugiat ut in elit pariatur duis amet nostrud labore.\r\n",
    "registered": "2015-10-13T06:26:38 +03:00",
    "latitude": -56.374121,
    "longitude": 3.447111,
    "tags": [
      "ex",
      "dolore",
      "ex",
      "pariatur",
      "labore",
      "minim",
      "consectetur"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Lowery Butler"
      },
      {
        "id": 1,
        "name": "Francis Ramos"
      },
      {
        "id": 2,
        "name": "Chris Talley"
      }
    ],
    "greeting": "Hello, Dee Green! You have 6 unread messages.",
    "favoriteFruit": "banana"
  }
]
