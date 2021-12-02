import {Axios} from 'axios';
import {readFileSync} from 'fs';
import {join} from 'path';

export const readInput = (rawDay: string | number) => readFileSync(
    join(__dirname, '..', 'input', toDay(rawDay)),
    {encoding: 'utf-8'}
);

export const fetchInput = (rawDay: string | number) => new Axios({}).get(
    `https://adventofcode.com/2021/day/${+rawDay}/input`,
    {headers: {Cookie: `session=${readFileSync(join(__dirname, '..', '..', 'TOKEN'))};`}}
);

export const toDay = (rawDay: string | number) => ('0' + rawDay).slice(-2);
