import FilmImg from '../assets/film.png';
import ShoesImg from '../assets/shoes.png';

import type { Hobby } from '../types';

export const HOBBIES: Hobby[] = [
  {
    type: 'image', // Can be 'image' or 'terminal'
    title: 'Run.',
    text: 'Running is my way to distress. My favorite running spot is Vondelpark!',
    accentColor: '#f59e0b',
    source: ShoesImg,
  },
  {
    type: 'image', // Can be 'image' or 'terminal'
    title: 'Watch.',
    text: 'No-netflix, go-to-cinema type of guy. One of my favourite movies is Inception.',
    accentColor: '#c084fc',
    source: FilmImg,
  },
  {
    type: 'terminal', // Can be 'image' or 'terminal'
    title: 'Code.',
    text: 'I love working on random side projects, from data frameworks to this webpage.',
    accentColor: '#34d399',
    source: `from pyspark.sql import SparkSession

spark = (SparkSession
  .builder
  .getOrCreate())

df = spark.read.csv("data.csv")
df.show()`,
  },
];
