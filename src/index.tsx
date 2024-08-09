/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import Component from './Component';
import objOptions from './options';

console.log(objOptions);

let defaultOptions = Object.entries(
  objOptions as { [key: string]: { value: string } }
).reduce(
  (acc, val) => ((acc[val[0]] = val[1].value), acc),
  {} as { [key: string]: any }
);

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?'
  );
}

render(() => <Component options={defaultOptions} />, root!);
