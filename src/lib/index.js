import * as styles from '../styles';
import * as assets from '../assets';

export const missionContent = {
  text: {
    first:
      'I am a full stack software engineer. I have written for production codebases in JavaScript, Golang, and Ruby on Rails.',
    second: 'Most of the time, I write front end code using React and TypeScript.',
    third: 'On the back end, I will most often write code using Node with Express.'
  },
  textSectionColor: styles.red,
  image: assets.interview
};

export const purposeContent = {
  text: {
    first:
      'A few years ago I made the transition from working in music to being a software engineer.',
    second:
      'After I graduated college with a bachelors degree in music business, I attended Lambda School to help me achieve my goal of learning to code.',
    third:
      "Now I've worked in Boston, MA as a software engineer for a startup, Talla and currently for a much larger company, Healthgrades."
  },
  textSectionColor: styles.green,
  image: assets.lightbulb
};

export const promiseContent = {
  text: {
    first: 'I like taking on new projects or hearing about software news.',
    second:
      "I'm also available for consulting or mentoring other who want to get into software development",
    third: "If you'd like to connect, send me an email or add me on LinkedIn."
  },
  textSectionColor: styles.yellow,
  image: assets.heart
};
