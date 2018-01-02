<template>
  <div>
    <div>
      <a href="https://www.cvp.ch">
        <img src="~static/logo-cvp.svg" class="cvp-logo"/>
      </a>
    </div>
    <section id="label">
      <div class="container my-2">
        <div>
          <img class="csp-logo" src="~/static/logo-csp.jpg"/>
        </div>
        <div class="logo-text">
          <h1 class="d-inline">Tarsen Deva</h1><br />
          <div class="text-muted">Latharsan Devasakayam</div>
        </div>
      </div>
    </section>


    <section id="header">
      <particles class="particles" />
      <div class="container py-2">
        <div class="row h-100">
          <div class="col-12 col-md-6">
            <img src="~static/tarsen-freigestellt.png" class="w-100"/>
          </div>
          <div class="col-12 col-md-6">
            <div class="h-100">
              <div class="header-item" style="height: 33%">
                <div class="text text-muted">
                  <div class="wrapper">
                    rofessionell <br />
                    <span class="text-primary">und</span> <br />
                    qualifiziert
                  </div>
                </div>
                <div class="title">
                  <h4>vielfältig</h4>
                </div>
              </div>
              <div class="header-item" style="height: 33%">
                <div class="text text-muted">
                  <div class="wrapper">
                    loyal <br />
                    <span class="text-primary">und</span> <br />
                    ehrlich
                  </div>
                </div>
                <div class="title">
                  <h4>persönlich</h4>
                </div>
              </div>
              <div class="header-item" style="height: 33%">
                <div class="text text-muted">
                  <div class="wrapper">
                    vernetzt <br />
                    <span class="text-primary">und</span> <br />
                    hilfsbereit
                  </div>
                </div>
                <div class="title">
                  <h4>bürgernah</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <b-navbar id="navbar" sticky toggleable="md" type="light" variant="primary" v-b-scrollspy>
      <div class="container">
        <b-navbar-nav class="w-100 pr-5">
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
                  <div v-html="section.content"/>
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
import moment from 'moment'

import particles from '~/components/particles'
import contents from '~/content'

export default {
  components: { particles },
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
      }
    }
  }
}
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/functions";
@import '../bootstrap.scss';
</style>

<style lang="scss" scoped>

@import "node_modules/bootstrap/scss/functions";
@import '../bootstrap.scss';

$header-max-height: 663px;
$label-height: 60px;
$bar-height: 66px;

#header .container {
  height: calc(100vh - #{$bar-height} - #{$label-height});
  max-height: $header-max-height !important;
  overflow: hidden;
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

  &:hover {
    border-bottom: 6px solid white;
  }
}

.active > .item {
  border-bottom-color: white;
}

.csp-logo {
  padding-top: 3px;
  height: 30px;
  float: left;
}

.logo-text {
  height: $label-height;
  padding-left: 40px;

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

.particles {
  width: 100%;
  height: calc(100vh - #{$bar-height} - #{$label-height});
  max-height: $header-max-height;
  position: absolute;
}

.cvp-logo {
  height: 50px;
  position: fixed;
  z-index: 2000;
  top: 8px;
  right: 8px;
}

.header-item {
  display: flex;
  align-items: center;

  .title {
    color: white;
    padding: 4px 8px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    background-color: theme-color("primary");
    transition: all 0.9s;
    padding: 10px;
    width: 150px;
    text-align: center;
  }

  .text {
    width: 0px;
    transition: all 0.9s;
    font-size: 1.2rem;
    height: 0;
    overflow: hidden;
    opacity: 0;

    .wrapper {
      width: 10vw;
    }
  }

  &:hover {
    .title {
      padding-top: 50px;
      padding-left: 30px;
    }

    .text {
      width: calc(100% - ( 150px + 30px );
      height: 80px;
      opacity: 1;
    }
  }
}


</style>
