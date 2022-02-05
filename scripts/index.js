import { CustomStorage } from './Storage.js';

const storage1 = new CustomStorage('keyLocal', {value: '123123', storage: localStorage});
console.log('storage1: ', storage1);

const storage2 = new CustomStorage();
console.log('storage2: ', storage2);
storage2.set();

const storage3 = new CustomStorage('theme', {value: 'light-theme', storage: sessionStorage})
console.log('storage3: ', storage3);
storage3.set();