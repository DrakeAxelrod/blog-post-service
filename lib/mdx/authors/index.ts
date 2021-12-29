const name = {
  first: "Drake",
  last: "Axelrod",
};
const email = "drake@draxel.io";
const handles = {
  twitter: "drakeaxelrod",
  github: "drakeaxelrod",
  linkedin: "drakeaxelrod",
};
const summary = `Drake Axelrod enjoys surfing, IT, reading and writing, and learning new things!.`;

export const defaultAuthor = {
  name: {
    first: name.first,
    last: name.last,
    full: `${name.first} ${name.last}`,
  },
  handles: handles,
  email: email,
  socials: {
    twitter: `https://twitter.com/${handles.twitter}`,
    github: `https://github.com/${handles.github}`,
    linkedin: `https://www.linkedin.com/in/${handles.linkedin}`,
    discord: "https://discordapp.com/users/549704894391517324",
  },
  avatar: "https://avatars.githubusercontent.com/u/51012876?v=4",
  summary: summary,
};
