<template>
  <div>
    <section id="label">
      <div class="container my-2">
        <div>
          <img class="cvp-logo" src="~/static/logo-csp.jpg"/>
        </div>
        <div class="logo-text">
          <h1 class="d-inline">Tarsen Deva</h1><br />
          <div class="text-muted">Latharsan Devasakayam</div>
        </div>
      </div>
    </section>
    <section id="header" class="bg-primary">
      <div class="text-center">
        <h2 class="text-white">
           bürgernah, vielfältig und dienstleistungsorientiert
        </h2>
      </div>
    </section>

    <b-navbar id="navbar" sticky toggleable="md" type="light" variant="primary" v-b-scrollspy:app>
      <div class="container">
        <b-navbar-nav class="w-100">
          <div class="row w-100">
            <div class="col text-center">
              <b-nav-item active-class="active" href="#motivation" v-scroll-to="{ el: '#motivation' }">
                <div class="text-white item">
                  <icon name="heartbeat" class="icon"/><br />
                  <span>Motiviation</span>
                </div>
              </b-nav-item>
            </div>
            <div class="col text-center">
              <b-nav-item active-class="active" href="#engagement" v-scroll-to="{ el: '#engagement' }">
                <div class="text-white item">
                  <icon name="globe" class="icon"/><br />
                  <span>Agenda</span>
                </div>
              </b-nav-item>
            </div>
            <div class="col text-center">
              <b-nav-item active-class="active" href="#profile" v-scroll-to="{ el: '#profile' }">
                <div class="text-white item">
                  <icon name="user" class="icon"/><br />
                  <span>Profil</span>
                </div>
              </b-nav-item>
            </div>
          </div>
        </b-navbar-nav>
      </div>
    </b-navbar>

    <section id="motivation" class="section">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="text-primary">Politik <small class="text-muted">Motivation</small></h1>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <p>
              Der Mensch steht für mich im Mittelpunkt. Mein grösstes Anliegen ist es, die Bedürfnisse der Schweizer Bevölkerung so gut wie möglich zu erfüllen. Dafür setze ich mich mit Kopf, Herz und vollem Tatendrang entschlossen ein.
            </p>
            <p>
              Seit 2011 bin ich Mitglieder der CVP Schweiz sowie der JCVP Kanton SG. Innerhalb unserer Partei habe bereits sämtliche Vorstandsaufgaben ausgeübt wie Vizepräsident der Regionalpartei JCVP St. Gallen – Gossau - Rorschach, Delegierter JCVP Kanton SG oder auch Stellvertretungsfunktionen von internationalen Kongressen vom Internationalen Sekretär der JCVP Schweiz.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 offset-md-3 col-md-6 col-xl-4 offset-xl-4">
            <img class="w-100" src="~/assets/smartspider.png" />
          </div>
        </div>

        <div class="row mt-5">
          <div class="col">
            <h6 class="text-muted">Bildungspolitik <small class="text-primary">Die Stärke der Schweiz sind ihre wissbegierigen Leute</small></h6>
            <p>
              Wir sind wirklichkeitsnah, neugierig, praktisch, präzise und haben die Fähigkeit, das Wünschenswerte zu wollen und das Machbare zu planen.
            </p>
            <p>
              Lassen Sie mich es unzweideutig und glasklar sagen: Bildung, Forschung und Innovation sind unsere wichtigsten, ja einzigen Rohstoffe von globaler Bedeutung. Geschliffen werden diese Talente durch gute Schulen, Fachhochschulen und Universitäten. Wettbewerbsfähig werden sie durch grenzüberschreitendes Messen mit Konkurrenten und die Möglichkeit zum Austausch. Darum stehe ich unmissverständlich ein für qualitativ hochstehende Aus- und Weiterbildung und für Chancengleichheit im internationalen Wettbewerb. Leistungsbereitschaft und Ehrgeiz sind unsere Stärken!
            </p>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col">
            <h6 class="text-muted">Familienpolitik <small class="text-primary">Für eine erfolgreiche Schweiz braucht es starke Familien</small></h6>
            <p>
              Die Gründung einer Familie darf nicht zu Armut führen. Gute Rahmenbedingungen für die Familien und den Mittelstand bilden einen Erfolgsfaktor für die Schweiz. Familien benötigen Geld, Zeit und Infrastrukturen. Mit der CVP-Volksinitiative „Für Ehe und Familie – gegen die Heiratsstrafe“, die voraussichtlich im Februar 2016 zur Abstimmung kommt, soll die Diskriminierung der Ehe gegenüber den anderen Lebensformen konsequent beseitigt werden. Die Vereinbarkeit von Beruf und Familie ist heute für viele junge Eltern von zentraler Bedeutung. Dem ist Rechnung zu tragen. Es braucht flächendeckende Angebote für die familienexterne Kinderbetreuung. Die traditionelle Familie darf dabei jedoch nicht benachteiligt werden. Die verschiedenen Familienformen sind heute Tatsache und sollen auch gelebt werden können. Auch die Väter sollen nach der Geburt ihres Kindes die Möglichkeit erhalten, ohne finanzielle Einbussen die Mütter zu unterstützen. Die Einführung eines zweiwöchigen Vaterschafsurlaubs, der von der EO kostenneutral bezahlt werden soll, ist vertretbar und kann finanziert werden. Auch soll unsere Gesellschaft wieder vermehrt ermuntert werden, sich im Sinne einer gelebten Hilfsbereitschaft gegenseitig zu unterstützen und von den gegenseitigen Erfahrungen und Möglichkeiten zu profitieren. Auch die moderne Gesellschaft braucht Solidarität und ehrenamtliches Engagement.
            </p>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col">
            <h6 class="text-muted">Migrationspolitik <small class="text-primary">Humanität und rechtsstaatlichkeit sind gleichermassen bedeutend</small></h6>
            <p>
              Deshalb heisst es: Bedrohten Menschen ist ohne Wenn und Aber Asyl zu gewähren. Kommt jemand zwar aus einer gewissen Perspektivlosigkeit, aber ohne Bedrohungssituation zu uns, gilt es klar zu machen, dass der richtige Weg einzig der Aufbau der Heimat ist. Auch das gehört zu einem humanitären Staat. Hier braucht es schnelle und dadurch faire Verfahren.
            </p>
            <p>
              Der Grossteil der Menschen, die heute in die Schweiz kommen, sind nicht Flüchtlinge aus Kriegsgebieten, sondern Arbeiter aus EU-Staaten, mit denen wir über ein Freizügigkeitsabkommen verfügen. Die Wirtschaft ist auf diese Arbeitskräfte angewiesen. Gleichwohl gilt es, darauf zu achten, dass das Bevölkerungswachstum durch Zuwanderung nur so hoch ist, dass unsere Infrastrukturen und unsere Ressourcen nicht darunter leiden.
            </p>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col">
            <h6 class="text-muted">Aussenpolitik <small class="text-primary">Der bilaterale Weg mit der EU ist nicht der einfachste, aber der erfolgreichste</small></h6>
            <p>
              Deshalb ist er weiter zu gehen. Gleichzeitig ist dem anderen Weg, sprich dem Beitritt zur EU, eine Absage zu erteilen. Ich bin deshalb für einen Rückzug des Beitrittsgesuchs.
            </p>
            <p>
              Die humanitäre Tradition der Schweiz soll auch in Zukunft eine weltweite Visitenkarte sein. Deshalb stehe ich ein für eine transparente Entwicklungshilfe und dafür, dass die guten Dienste der Schweiz auch in Zukunft dem Frieden in der Welt nützen.
            </p>
          </div>
        </div>


      </div>
    </section>
    <section id="engagement" class="section">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="text-primary">Agenda <small class="text-muted">Engagement</small></h1>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col">
            <p>Alle meine Kommenden Termine und Veranstaltungen auc einen Blick.</p>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <b-table
            responsive="sm"
            stacked="sm"
            :sort-compare="sortCompare"
            :hover="true"
            :items="items"
            :fields="fields">
            <template slot="date" scope="data">
              {{ [ data.item.date, ["DD.MM.YY", "DD.MM.YYYY"] ] | moment("Do MMMM YYYY") }}
            </template>
            </b-table>
          </div>
        </div>
      </div>
    </section>
    <section id="profile" class="section">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="text-primary">Über mich <small class="text-muted">Profil</small></h1>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-9">
            <p>
              Mein Name lautet Latharsan Devasakayam und ich stamme ursprünglich aus Sri Lanka.
              Seit 1993 lebe ich mit meiner Familie in der Schweiz bzw. in St. Gallen.
            </p>
            <p>
              Nach der Beendigung meiner obligatorischen Schulzeit, begann ich meine kaufmännische Lehre
              beim Volkswirtschaftsdepartement des Kantons St. Gallen und ich wurde von damaligen
              Regierungsrat Josef (Joe) Keller (CVP) immer wieder von der Schweizer Politik angesprochen.
              Durch diese lehrreichen Gespräche entdeckte ich die Leidenschaft für die Schweizer Politik.
            </p>
          </div>
          <div class="col-12 col-md-3 col-lg-2 offset-lg-1">
            <img src="~/assets/tarsen-thinking.jpg" class="w-100" />
          </div>
        </div>

        <div class="row mt-5">
          <div class="col">
            <h6 class="text-muted">Persönliche Eckdaten <small class="text-primary">Ich und andere über mich</small></h6>
            <p>
              Durch meine kommunikative und wache Persönlichkeit, gehe ich jede neue Herausforderung mit grossen Schritten entgegen.
            </p>

            <dl class="row">
              <dt class="col-3">Vorname</dt>
              <dd class="col-9">Latharsan</dd>

              <dt class="col-3">Nachmane</dt>
              <dd class="col-9">Devasakayam</dd>

              <dt class="col-3">Geburtsdatum</dt>
              <dd class="col-9">23. Mai 1990</dd>

              <dt class="col-3">Wohnort</dt>
              <dd class="col-9">St.Gallen</dd>

              <dt class="col-3">Zivilstand</dt>
              <dd class="col-9">ledig</dd>
            </dl>
            <p>
              Mein Umfeld beschreibt mich als eine kommunikative, leistungs- und erfolgsorientierte Persönlichkeit, die über Organisationstalent, Erfahrung mit Teamarbeit und Leidenschaft für Herausforderungen verfügt.
            </p>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col">
            <h6 class="text-muted">Politische Mandate <small class="text-primary">Politischer Werdegang und Engagement</small></h6>
            <ul class="list-unstyled">
              <li>
                <b class="text-muted text-monospace">
                  2013 – 2014
                </b>
                <span class="ml-3">
                  Vizepräsident JCVP Sektion St. Gallen – Gossau – Rorschach
                </span>
              </li>
              <li>
                <b class="text-muted text-monospace">
                  2017 – heute
                </b>
                <span style="margin-left: 7px;">
                  Delegierter JCVP Kanton SG an JCVP Schweiz- Delegiertenver- sammlungen
                </span>
              </li>
              <li>
                <b class="text-muted text-monospace">
                  2017 – 2018
                </b>
                <span class="ml-3">
                  Mitarbeit im Initativkomittee ,,Vollgeld-CH Initiative’’
                </span>
              </li>
              <li>
                <b class="text-muted text-monospace">
                  2017 – 2019
                </b>
                <span class="ml-3">
                  Mitarbeit im Initativkomittee ,,Tierverschungsverbot – CH Initaitve’’
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col">
            <h6 class="text-muted">Beruflicher Werdegang <small class="text-primary">Ausbildung und Befuf</small></h6>
            <ul class="list-unstyled">
              <li>
                <b class="text-muted text-monospace">
                  2006 – 2010
                </b>
                <span class="ml-3">
                  Kaufmännische Lehre (Volkswirtschaftsdepartement Kanton SG)
                </span>
              </li>
              <li>
                <b class="text-muted text-monospace">
                  2010 – 2013
                </b>
                <span class="ml-3">
                  Abschluss Sozialversicherungsrecht mit Schwerpunkt ALV + EL
                </span>
              </li>
              <li>
                <b class="text-muted text-monospace">
                  2016 – heute
                </b>
                <span style="padding-left: 7px;">
                  Bachelor Religionspädagoge mit Schwerpunkt Religionsunterricht Oberstufe
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col">
            <h6 class="text-muted">Ehrenamtliche Tätigkeiten <small class="text-primary">ausserberufliche Engagements</small></h6>
            <p>
              Neben meinem Einsatz in verschiedenen Gemeinden des Bistums St.Gallen (Leiter Jugendbibelgruppe St. Gallen, Leiter Jugendbibelgruppe St. Gallen)
              trage ich duch mein Engagement in wieteren Oraganisationen zu deren Erfolg bei.
            </p>
            <ul class="list-unstyled">
              <li>
                <span>
                  <span class="text-primary">Gruppenleiter Jungwacht</span> St. Otmar – Riethüsli mit J + S Leiter 1
                </span>
              </li>
              <li>
                <span>
                  <span class="text-primary">Mitträger</span> Sozial- und Umweltforum Ostschweiz (SUFO)
                </span>
              </li>
              <li>
                <span>
                  <span class="text-primary">Interkultureller Dolmetscher</span> beim Migrationsamt & Justizdepartement des Kantons SG
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-primary mt-5">
      <div class="container text-white">
        <div class="row py-5">
          <div class="col">
            <div class="row">
              <div class="col">
                <b>Latharsan Devasakayam</b><br />
                <div class="mt-2">
                  <a href="mailto:me@tarsen-deva.ch" v-b-popover.hover.top="'Email senden'" class="text-white">
                    <icon name="envelope" />
                  </a>
                  <a href="facebook.com" v-b-popover.hover.top="'Facebook ansehen'"class="text-white ml-3">
                    <icon name="facebook-official" />
                  </a>
                  <a href="linkedin.com" v-b-popover.hover.top="'Linkedin ansehen'"class="text-white ml-3">
                    <icon name="linkedin-square" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col text-right">
            <a href="#" class="text-white">JCVP St.Gallen</a> <br />

            <a href="#" class="text-white">CSP Schweiz</a>
          </div>
        </div>
      </div>
    </footer>
    <div class="container my-3">
      <div class="row">
        <div class="col text-right">
          <b-link href="#" v-b-modal.about>Impressumg</b-link>
          <b-link href="#" v-b-modal.legal class="ml-4">Datenschutz</b-link>
        </div>
      </div>
    </div>

    <b-modal id="about" title="Impressum" hide-footer>
      <div class="row">
        <div class="col">
          <p>
            <b class="text-muted">Verantwortlich für den Inhalt dieser Seite:</b><br />
            Latharsan Devasakayam<br />
            STRASSE<br />
            CH-9000 St.Gallen<br />
          </p>
          <p class="mt-3">
            <b class="text-muted">Technische Umsetzung durch:</b><br />
            Martin Eigenmann<br />
            <a href="https://eigenmannmartin.ch">eigenmannmartin.ch</a>
          </p>
        </div>
      </div>
    </b-modal>

    <b-modal id="legal" title="Datenschutz" hide-footer size="lg">
      <div class="row">
        <div class="col">
          <p>
            <b class="text-muted">Legal disclaimer</b><br />
            The contents of these pages were prepared with utmost care.
            Nonetheless, we cannot assume liability for the timeless accuracy
            and completeness of the information.<br />
            Our website contains links to external websites.
            As the contents of these third-party websites are beyond our
            control, we cannot accept liability for them. Responsibility for
            the contents of the linked pages is always held by the provider or
            operator of the pages.

          </p>
          <p class="mt-3">
            <b class="text-muted">Data protection</b><br />
            In general, when visiting the website of tarsen-deva.ch, no personal
            data are saved. However, these data can be given on a voluntary basis.
            No data will be passed on to third parties without your consent.
            We point out that in regard to unsecured data transmission in the
            internet (e.g. via email), security cannot be guaranteed. Such data
            could possibIy be accessed by third parties.
          </p>
          <p class="mt-3">
            <b class="text-muted">Google Analytics</b><br />
            This website uses Google Analytics, a web analytics service provided by Google, Inc. (»Google«). Google Analytics uses cookies, which are text files placed on your computer, to help the website analyze how users use the site. The information generated by the cookie about your use of the website (including your IP address) will be transmitted to and stored by Google on servers in the United States. In case of activation of the IP anonymization, Google will truncate/anonymize the last octet of the IP address for Member States of the European Union as well as for other parties to the Agreement on the European Economic Area. Only in exceptional cases, the full IP address is sent to and shortened by Google servers in the USA. On behalf of the website provider Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for website operators and providing other services relating to website activity and internet usage to the website provider. Google will not associate your IP address with any other data held by Google. By using this website, you consent to the processing of data about you by Google in the manner and for the purposes set out above.
          </p>
        </div>
      </div>
    </b-modal>


  </div>
</template>

<script>
import moment from 'moment'

export default {
  components: {},
  methods: {
    sortCompare(a, b, key) {
      if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        // If both compared fields are native numbers
        return a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0
      }

      const da = moment(a[key], 'DD.MM.YYYY')
      const db = moment(b[key], 'DD.MM.YYYY')
      if (da.isValid() && db.isValid()) {
        return da < db ? -1 : da > db ? 1 : 0
      }

      // Stringify the field data and use String.localeCompare
      return toString(a[key]).localeCompare(toString(b[key]), undefined, {
        numeric: true
      })
    }
  },
  data() {
    return {
      fields: {
        date: {
          label: 'Datum',
          sortable: true
        },
        name: {
          label: 'Veranstaltung',
          sortable: false
        },
        location: {
          label: 'Ort',
          sortable: true
        }
      },
      items: [
        {
          date: '05.01.2018',
          name: 'Neujahresbegrüssung CVP Stadt St. Gallen',
          location: 'St.Gallen'
        },
        {
          date: '14.04.2018',
          name: '1. Delegiertenversammlung JCVP Schweiz',
          location: 'St.Gallen'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$label-height: 60px;
$bar-height: 66px;

#header {
  height: calc(100vh - #{$bar-height} - #{$label-height});
}

#label {
  height: $label-height;
}

#navbar {
  height: $bar-height;
}

.item {
  border-bottom: 6px solid transparent;
  transition: border-bottom-color 0.5s;
}

.active > .item {
  border-bottom-color: white;
}

.cvp-logo {
  height: calc(#{$label-height} - 5px);
  float: left;
}

.logo-text {
  height: $label-height;
  padding-left: 80px;

  h1 {
    line-height: 2rem;
  }

  div {
    margin-top: -3px;
    margin-left: 40px;
  }
}

.section {
  padding-top: $bar-height;
}

.icon {
  height: 100%;
  margin-bottom: -2px;
}
</style>
