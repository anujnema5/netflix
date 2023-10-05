export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USER_AVATAR = "https://avatars.githubusercontent.com/u/6759280?v=4"


export const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_APP
  }
};

export const IMG_CDN_URL="https://image.tmdb.org/t/p/w400/"

export const SUPPORTED_LANGUAGES = [
  {identifier: "hindi", name: "Hindi"},
  {identifier: "en", name: "English"},
  {identifier: "spanish", name: "Spanish"}
]

export const OPEN_AI_KEY = process.env.REACT_APP_OPENAI_KEY