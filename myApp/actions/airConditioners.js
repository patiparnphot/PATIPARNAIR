import axios from 'axios';


//AIRCONDITIONER list
export const FETCH_AIRCONDITIONERS = 'FETCH_AIRCONDITIONERS';
export const FETCH_AIRCONDITIONERS_SUCCESS = 'FETCH_AIRCONDITIONERS_SUCCESS';
export const FETCH_AIRCONDITIONERS_FAILURE = 'FETCH_AIRCONDITIONERS_FAILURE';
export const RESET_AIRCONDITIONERS = 'RESET_AIRCONDITIONERS';

//Create new AIRCONDITIONER
export const CREATE_AIRCONDITIONER = 'CREATE_AIRCONDITIONER';
export const CREATE_AIRCONDITIONER_SUCCESS = 'CREATE_AIRCONDITIONER_SUCCESS';
export const CREATE_AIRCONDITIONER_FAILURE = 'CREATE_AIRCONDITIONER_FAILURE';
export const RESET_NEW_AIRCONDITIONER = 'RESET_NEW_AIRCONDITIONER';

//Fetch AIRCONDITIONER
export const FETCH_AIRCONDITIONER = 'FETCH_AIRCONDITIONER';
export const FETCH_AIRCONDITIONER_SUCCESS = 'FETCH_AIRCONDITIONER_SUCCESS';
export const FETCH_AIRCONDITIONER_FAILURE = 'FETCH_AIRCONDITIONER_FAILURE';
export const RESET_ACTIVE_AIRCONDITIONER = 'RESET_ACTIVE_AIRCONDITIONER';

//Delete AIRCONDITIONER
export const DELETE_AIRCONDITIONER = 'DELETE_AIRCONDITIONER';
export const DELETE_AIRCONDITIONER_SUCCESS = 'DELETE_AIRCONDITIONER_SUCCESS';
export const DELETE_AIRCONDITIONER_FAILURE = 'DELETE_AIRCONDITIONER_FAILURE';
export const RESET_DELETED_AIRCONDITIONER = 'RESET_DELETED_AIRCONDITIONER';


const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost/api' : '/api';
export function fetchAirConditioners() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/airConditioners`,
    headers: []
  });
  return {
    type: FETCH_AIRCONDITIONERS,
    payload: [
      {
        _id: {
            oid: "5a9cae0e136589001eb70396"
        },
        edu: {
            university: "Chulalongkorn Univerisity",
            highschool: "College of Music, Mahidol University"
        },
        firstname: "Nutruja",
        lastname: "Chutiwansopon",
        nickname: "KaewBNK48",
        aka: "Queen, CorKaew, TeacherKaew, AuntKaew",
        birthday: "31/03/1994",
        height: 156,
        bloodgroup: "B",
        address: "Chonburi",
        favcolor: "Turquoise",
        favfood: "non-smell food",
        hobby: "play piano",
        lang: "Thai, English",
        description: "She is so sensitive.",
        image: "https://res.cloudinary.com/dlaelxhbp/image/upload/v1520217612/ykznvp6oocdddfopf4jp.jpg",
        createdAt: {
            date: "2018-03-05T02:40:14.956Z"
        },
        comments: [
            {
                oid: "5a9cae24136589001eb70397"
            },
            {
                oid: "5a9cc8fb61c8c0001ed686e4"
            },
            {
                oid: "5aaf95a2188b52001eedf6a7"
            }
        ],
        __v: 3,
        author: {
            id: {
                oid: "5a9c3c2dd7e3c9001e8fd863"
            },
            username: "patiparn.phot"
        }
      },
      {
        _id: {
            oid: "5aa23c04cbde3a001ebc6a76"
        },
        edu: {
            university: "Mahidol University International College (+TA)",
            highschool: "Rungarun"
        },
        firstname: "Cherprang",
        lastname: "Areekul",
        nickname: "CherprangBNK48",
        aka: "Professor, TeaCher",
        birthday: "12/051996",
        height: 160,
        bloodgroup: "B",
        address: "Bangkok",
        favcolor: "White",
        favfood: "Tofu",
        hobby: "Cosplay",
        lang: "Thai, English, Japanese",
        description: "She is a perfect playboy.",
        image: "https://res.cloudinary.com/dlaelxhbp/image/upload/v1520581634/qmf3r2uq5zfpwn9gjuux.jpg",
        createdAt: {
            date: "2018-03-09T07:47:16.537Z"
        },
        comments: [],
        __v: 0,
        author: {
            id: {
                oid: "5aa2396ecbde3a001ebc6a75"
            },
            username: "Punisher&Music"
        }
      }
    ]
  };
}
export function fetchAirConditionersSuccess(AirConditioners) {
  return {
    type: FETCH_AIRCONDITIONERS_SUCCESS,
    payload: AirConditioners
  };
}
export function fetchAirConditionersFailure(error) {
  return {
    type: FETCH_AIRCONDITIONERS_FAILURE,
    payload: error
  };
}


export function createAirConditioner(props) {
  const request = axios.post(`${ROOT_URL}/airConditioners`, props);
  return {
    type: CREATE_AIRCONDITIONER,
    payload: "hhh"
  };
}
export function createAirConditionerSuccess(newAirConditioner) {
  return {
    type: CREATE_AIRCONDITIONER_SUCCESS,
    payload: newAirConditioner
  };
}
export function createAirConditionerFailure(error) {
  return {
    type: CREATE_AIRCONDITIONER_FAILURE,
    payload: error
  };
}
export function resetNewAirConditioner() {
  return {
    type: RESET_NEW_AIRCONDITIONER
  }
}


export function fetchAirConditioner(id) {
  const request = axios.get(`${ROOT_URL}/airConditioners/${id}`);
  return {
    type: FETCH_AIRCONDITIONER,
    payload: {
      _id: {
          oid: "5aa23c04cbde3a001ebc6a76"
      },
      edu: {
          university: "Mahidol University International College (+TA)",
          highschool: "Rungarun"
      },
      firstname: "Cherprang",
      lastname: "Areekul",
      nickname: "CherprangBNK48",
      aka: "Professor, TeaCher",
      birthday: "12/051996",
      height: 160,
      bloodgroup: "B",
      address: "Bangkok",
      favcolor: "White",
      favfood: "Tofu",
      hobby: "Cosplay",
      lang: "Thai, English, Japanese",
      description: "She is a perfect playboy.",
      image: "https://res.cloudinary.com/dlaelxhbp/image/upload/v1520581634/qmf3r2uq5zfpwn9gjuux.jpg",
      createdAt: {
          date: "2018-03-09T07:47:16.537Z"
      },
      comments: [],
      __v: 0,
      author: {
          id: {
              oid: "5aa2396ecbde3a001ebc6a75"
          },
          username: "Punisher&Music"
      }
    }
  };
}
export function fetchAirConditionerSuccess(activeAirConditioner) {
  return {
    type: FETCH_AIRCONDITIONER_SUCCESS,
    payload: activeAirConditioner
  };
}
export function fetchAirConditionerFailure(error) {
  return {
    type: FETCH_AIRCONDITIONER_FAILURE,
    payload: error
  };
}
export function resetActiveAirConditioner() {
  return {
    type: RESET_ACTIVE_AIRCONDITIONER
  }
}


export function deleteAirConditioner(id) {
  const request = axios.delete(`${ROOT_URL}/airConditioners/${id}`);
  return {
    type: DELETE_AIRCONDITIONER,
    payload: "ff"
  };
}
export function deleteAirConditionerSuccess(deletedAirConditioner) {
  return {
    type: DELETE_AIRCONDITIONER_SUCCESS,
    payload: deletedAirConditioner
  };
}
export function deleteAirConditionerFailure(response) {
  return {
    type: DELETE_AIRCONDITIONER_FAILURE,
    payload: response
  };
}
export function resetDeletedAirConditioner() {
  return {
    type: RESET_DELETED_AIRCONDITIONER
  };
}