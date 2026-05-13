import ShoesImg from '../assets/shoes.png';
import FilmImg from '../assets/film.png';

import type { Hobby } from '../types';

export const HOBBIES: Hobby[] = [
  {
    type: 'image', // Can be 'image' or 'terminal'
    title: 'Run.',
    text: 'Running is my way to distress. My left knee is "broken", but my spirit is not.',
    accentColor: '#f59e0b',
    image: ShoesImg,
  },
  {
    type: 'image', // Can be 'image' or 'terminal'
    title: 'Watch.',
    text: 'No-netflix, go-to-cinema type of guy. One of my favourite movies is Inception.',
    accentColor: '#c084fc',
    image: FilmImg,
  },
  {
    type: 'terminal', // Can be 'image' or 'terminal'
    title: 'Code.',
    text: 'No sleep if my side project is about to finish? Who needs sleep anyway.',
    accentColor: '#34d399',
    codeSnippet: `from pyspark.sql import SparkSession

spark = (SparkSession
  .builder
  .getOrCreate())

df = spark.read.csv("data.csv")
df.show()`,
  },
];
