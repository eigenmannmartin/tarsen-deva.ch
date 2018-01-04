import matter from "gray-matter";
import marked from "marked";

const getPolitik = folder => {
  const files = require.context("./politik", true, /.*\.md$/);

  return files.keys().map(key => files(key));
};

const getEvents = folder => {
  const files = require.context("./events", true, /.*\.md$/);

  return files.keys().map(key => files(key));
};

const getProfile = folder => {
  const files = require.context("./profile", true, /.*\.md$/);

  return files.keys().map(key => files(key));
};

export default [
  {
    title: "Politik",
    subtitle: "Motivation",
    icon: "heartbeat",
    type: "TEXT",
    sections: getPolitik()
      .map(matter)
      .map(e => ({ ...e, content: marked(e.content) }))
  },
  {
    title: "Agenda",
    subtitle: "Termine",
    icon: "globe",
    type: "AGENDA",
    entries: getEvents().map(matter)
  },
  {
    title: "Über mich",
    subtitle: "Profil",
    icon: "user",
    type: "TEXT",
    sections: getProfile()
      .map(matter)
      .map(e => ({ ...e, content: marked(e.content) }))
  }
];
