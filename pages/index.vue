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
            <div v-for="content in contents" class="col text-center">
              <b-nav-item active-class="active" :href="`#${content.subtitle}`" v-scroll-to="{ el: `#${content.subtitle}` }">
                <div class="text-white item">
                  <icon :name="content.icon" class="icon"/><br />
                  <span>{{ content.subtitle }}</span>
                </div>
              </b-nav-item>
            </div>
          </div>
        </b-navbar-nav>
      </div>
    </b-navbar>

    <template v-for="content in contents">
      <template v-if="content.type==='TEXT'">
        <section :id="content.subtitle" class="section">
          <div class="container">
            <div class="row">
              <div class="col">
                <h1 class="text-primary">{{ content.title }} <small class="text-muted">{{ content.subtitle }}</small></h1>
              </div>
            </div>

            <template v-for="section, key in content.sections">
              <div class="row">
                <div class="col">
                  <h6 v-if="section.data.title" class="text-muted mt-5">
                    {{ section.data.title }}
                    <small v-if="section.data.subtitle" class="text-primary">
                      {{ section.data.subtitle }}
                    </small>
                  </h6>
                  <vue-markdown typographer :postrender="postrender">{{ section.content }}</vue-markdown>
                </div>
              </div>
            </template>
          </div>
        </section>
      </template>

      <template v-if="content.type==='AGENDA'">
        <section :id="content.subtitle" class="section">
          <div class="container">
            <div class="row">
              <div class="col">
                <h1 class="text-primary">{{ content.title }} <small class="text-muted">{{ content.subtitle }}</small></h1>
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
                :hover="false"
                :items="content.entries.map(e => e.data)"
                :fields="fields">
                  <template slot="date" scope="data">
                    {{ [ data.item.date, ["DD.MM.YY", "DD.MM.YYYY"] ] | moment("Do MMMM YYYY") }}
                  </template>

                  <template slot="show_details" scope="row">
                    <b-button
                      size="sm"
                      variant="light"
                      v-b-tooltip.hover.top="row.detailsShowing ? 'Details verstecken' : 'Details anzeigen'"
                      @click.stop="row.toggleDetails">
                      <template v-if="row.detailsShowing">
                        <icon name="chevron-up" />
                      </template>
                      <template v-else>
                        <icon name="chevron-down" />
                      </template>
                    </b-button>
                  </template>

                  <template slot="row-details" scope="row">
                    <b-card>
                      <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Ort:</b></b-col>
                        <b-col>{{ row.item.location }}</b-col>
                      </b-row>
                      <b-row class="mb-2">
                        <b-col sm="3" class="text-sm-right"><b>Zeit:</b></b-col>
                        <b-col>{{ row.item.time }}</b-col>
                      </b-row>
                    </b-card>
                  </template>
                </b-table>
              </div>
            </div>
          </div>
        </section>
      </template>
    </template>

    <!--
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

              <template slot="show_details" scope="row">
                <b-button
                  size="sm"
                  variant="light"
                  v-b-tooltip.hover.top="row.detailsShowing ? 'Details verstecken' : 'Details anzeigen'"
                  @click.stop="row.toggleDetails">
                  <template v-if="row.detailsShowing">
                    <icon name="chevron-up" />
                  </template>
                  <template v-else>
                    <icon name="chevron-down" />
                  </template>
                </b-button>
              </template>

              <template slot="row-details" scope="row">
                <b-card>
                  <b-row class="mb-2">
                    <b-col sm="3" class="text-sm-right"><b>Ort:</b></b-col>
                    <b-col>{{ row.item.location }}</b-col>
                  </b-row>
                  <b-row class="mb-2">
                    <b-col sm="3" class="text-sm-right"><b>Zeit:</b></b-col>
                    <b-col>{{ row.item.time }}</b-col>
                  </b-row>
                </b-card>
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
                  2007 – 2010
                </b>
                <span class="ml-3">
                  Kaufmännische Lehre (Volkswirtschaftsdepartement Kanton SG)
                </span>
              </li>
              <li>
                <b class="text-muted text-monospace">
                  2011 – 2012
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
              Neben meinem Einsatz in verschiedenen Gemeinden des Bistums St.Gallen (Leiter Jugendbibelgruppe St. Gallen, Oberministrant, Lektor, Klausgruppe)
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
    </section> -->

    <footer class="bg-primary mt-5">
      <div class="container text-white">
        <div class="row py-5">
          <div class="col">
            <div class="row">
              <div class="col">
                  <b>Latharsan Devasakayam</b><br />
                <div class="mt-2">
                  <a href="mailto:latharsandevasakayam@livenet.ch" v-b-tooltip.hover.top="'Email senden'" class="text-white">
                    <icon name="envelope" />
                  </a>
                  <a href="https://www.facebook.com/tarsen.deva/" v-b-tooltip.hover.top="'Facebook ansehen'"class="text-white ml-3">
                    <icon name="facebook-official" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col text-right">

            <b class="text-white">Links</b><br />
            <a href="http://www.csp-schweiz.ch/category/csp-kanton-st-gallen/" class="text-white">JCVP St.Gallen</a> <br />

            <a href="http://www.csp-schweiz.ch/" class="text-white">CSP Schweiz</a>
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
            Falkensteinstrasse 90a<br />
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
import VueMarkdown from 'vue-markdown'
import moment from 'moment'
import contents from '~/content'

export default {
  components: {
    VueMarkdown
  },
  methods: {
    postrender(html) {
      return html
    },
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
      contents,
      fields: {
        date: {
          label: 'Datum',
          sortable: true
        },
        name: {
          label: 'Veranstaltung',
          sortable: false
        },
        show_details: { label: ' ' }
      },
      items: [
        {
          date: '05.01.2018',
          name: 'Neujahresbegrüssung CVP Stadt St. Gallen',
          location: 'Adlerhof St.Gallen',
          time: '19:00'
        },
        {
          date: '14.04.2018',
          name: '1. Delegiertenversammlung JCVP Schweiz',
          location: 'St.Gallen',
          time: '14:00'
        }
      ]

      // Stadtparlament 2020
      // Kantonsraat 2020
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
