import { test, expect, beforeAll } from 'vitest';
import axios from 'axios';
import app from '../src/index.js';

beforeAll(() => {
  app.listen();
});

test(' /movies returning an array', async () => {
  const response = await axios.get('http://localhost:3000/movies/');

  const responseArray = response.data;

  expect(responseArray.length).toBeGreaterThan(0);
});

test(' get /movie/id to be a valid movie', async () => {
  const response = await axios.get('http://localhost:3000/movies/2');

  const {id, title, summary} = response.data;

  expect(+id).toBeGreaterThan(0);
  expect(title).toBeTruthy();
})