<template>
  <div>
    <section id="label">
      <div class="container my-2">
        <div>
          <img class="cvp-logo" src="~/static/logo-csp.jpg"/>
        </div>
        <div class="logo-text">
          <h1 class="d-inline">Tarsen Deva</h1><br />
          <div class="text-muted">Latarsan Devasakayam</div>
        </div>
      </div>
    </section>
    <section id="header" class="bg-primary">
    </section>

    <b-navbar sticky toggleable="md" type="light" variant="light">
      <div class="container">
        <b-navbar-nav class="w-100">
          <div class="row w-100">
            <div class="col text-center">
              <b-nav-item href="#">
                <icon name="heartbeat" class="icon"></icon>
                Motiviation
              </b-nav-item>
            </div>
            <div class="col text-center">
              <b-nav-item href="#">
                <icon name="globe" class="icon"></icon>
                Agenda
              </b-nav-item>
            </div>
            <div class="col text-center">
              <b-nav-item href="#">
                <icon name="user" class="icon"></icon>
                Profil
              </b-nav-item>
            </div>
          </div>
        </b-navbar-nav>
      </div>
    </b-navbar>

    <section id="motivation" class="section pt-5">
      <div class="container">
        <h1 class="text-primary">Politik <small class="text-muted">Motivation</small></h1>
      </div>
    </section>
    <section id="engagement" class="section pt-5">
      <div class="container">
        <h1 class="text-primary">Agenda <small class="text-muted">Engagement</small></h1>
      </div>
    </section>
    <section id="profile" class="section pt-5">
      <div class="container">
        <h1 class="text-primary">Über mich <small class="text-muted">Profil</small></h1>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss">
$label-height: 60px;
$bar-height: 56px;

#header {
  min-height: calc(100vh - #{$bar-height} - #{$label-height});
}

#label {
  height: $label-height;
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
    margin-left: 20px;
  }
}

.section {
  min-height: 100vh;
}

.icon {
  height: 100%;
  margin-bottom: -2px;
}
</style>
