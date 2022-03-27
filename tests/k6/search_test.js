import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  scenarios: {
    random_search: {
      executor: 'per-vu-iterations',
      vus: 100,
      iterations: 1
    }
  }
};

/* generates random search requests */
export default function () {
  let languages_to_search = [];
  for(let i = 0; i<10; i++) {
    const language_to_search = (Math.floor(Math.random() * 100)) + 1;
    languages_to_search.push(language_to_search);
  }
  const urlToCall = 'http://192.168.0.235:9999/users/search?languages=' + languages_to_search;
  http.get(urlToCall);
  sleep(1);
}