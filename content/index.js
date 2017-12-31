import matter from 'gray-matter'
import marked from 'marked'

export default [
  {
    title: 'Politik',
    subtitle: 'Motivation',
    icon: 'heartbeat',
    type: 'TEXT',
    sections: [
      require('./politik/01-head.md'),
      require('./politik/02-bildungspolitik.md'),
      require('./politik/03-familienpolitik.md'),
      require('./politik/04-migrationspolitik.md'),
      require('./politik/05-aussenpolitik.md')
    ]
      .map(matter)
      .map(e => ({ ...e, content: marked(e.content) }))
  },
  {
    title: 'Agenda',
    subtitle: 'Termine',
    icon: 'globe',
    type: 'AGENDA',
    entries: [
      require('./events/2018-01-05-neujahresbegruessung.md'),
      require('./events/2018-04-14-delegiertenversammlung.md')
    ].map(matter)
  },
  {
    title: 'Über mich',
    subtitle: 'Profil',
    icon: 'user',
    type: 'TEXT',
    sections: [
      require('./profile/01-head.md'),
      require('./profile/02-persoenliche-eckdaten.md'),
      require('./profile/03-politische-mandate.md'),
      require('./profile/04-beruflicher-werdegang.md'),
      require('./profile/05-ehrenamtliche-taetigkeiten.md')
    ]
      .map(matter)
      .map(e => ({ ...e, content: marked(e.content) }))
  }
]
