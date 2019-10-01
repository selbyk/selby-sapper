<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<!-- <style global lang="scss">
  @charset "utf-8";

  // Import a Google Font
  // @import url('https://fonts.googleapis.com/css?family=Nunito:400,700');

  $dark: #4a4f5b;
  $dark-grey: #a6a6a6;
  $beige-light: #f2f2f2;
  $dark-red: #bf3b24;
  $red: #db4429;

  $jet: #342e37;

  // $body-background-color: #F2F4FC;
  $body-background-color: rgb(245, 245, 243);
  $link: $dark-red;

  $footer-background-color: $dark;
  $footer-color: $body-background-color;

  // Set your brand colors
  // $purple: #8A4D76;
  // $pink: #FA7C91;
  // $brown: #757763;
  // $beige-light: rgb(211, 211, 211);
  // $beige-lighter: #EFF0EB;

  // Update Bulma's global variables
  // $family-sans-serif: "Nunito", sans-serif;
  // $grey-dark: $brown;
  // $grey-light: $beige-light;
  // $primary: $purple;
  // $link: $pink;
  // $widescreen-enabled: false;
  // $fullhd-enabled: false;

  // Update some of Bulma's component variables

  // $control-border-width: 2px;
  // $input-border-color: transparent;
  // $input-shadow: none;

  @import 'node_modules/bulma/bulma.sass';

  main {
    min-height: 100vh;
    -moz-box-shadow: inset 0 0 10px #afafaf;
    -webkit-box-shadow: inset 0 0 10px #afafaf;
    box-shadow: inset 0 0 10px #858585;
  }
  footer {
    min-height: 100vh;
    background-color: $dark;
    /* background-color: #173d4b; */
  }
  .box {
    background-color: $body-background-color;
    padding: 2rem;
  }
</style> -->

<Nav {segment} />

<main>
  <slot />
</main>
<footer class="footer">
  <div class="columns is-variable is-8">
    <div class="column is-two-thirds">
      <div class="box is-large">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="Image" />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Selby Kendrick</strong>
                <small>@selbyk</small>
              </p>
              <p>
                Sed tempor, quam id commodo maximus, urna nibh aliquam est, nec
                euismod eros orci id libero. Ut in ex ac nibh laoreet molestie.
                Nam a justo neque. Aenean aliquam sit amet nisl ac auctor. Nam
                convallis lobortis viverra. Duis efficitur pretium imperdiet.
                Suspendisse suscipit aliquam turpis et porta. Donec hendrerit
                tellus vel suscipit efficitur. Nunc id dolor vulputate, auctor
                lorem sed, commodo risus. Suspendisse posuere lectus nunc, ut
                interdum velit tempus finibus. In semper massa sed orci
                vulputate, non pretium mi hendrerit. Duis non laoreet nisi, in
                fringilla odio.
              </p>
              <p>
                Quisque neque nisi, aliquam et lectus in, aliquet accumsan
                magna. Morbi interdum magna id imperdiet varius. Fusce pulvinar
                est a dolor eleifend placerat. Vestibulum sit amet mollis
                turpis. Donec egestas a lorem in fermentum. Sed sed quam ac
                neque molestie consequat. Donec in luctus ipsum, quis efficitur
                ex.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div class="column">
      <aside class="menu">
        <p class="menu-label">Connect</p>
        <ul class="menu-list">
          <li>
            <a href="https://github.com/selbyk" class="has-text-link">
              <i class="fab fa-github" />
              GitHub
            </a>
          </li>
          <li>
            <a href="https://twitter.com/selbyk" class="has-text-link">
              <i class="fab fa-twitter" />
              Twitter
            </a>
          </li>
        </ul>
      </aside>
    </div>
  </div>

  <div class="content has-text-right">
    <p>
      &copy; Copyright 2019
      <a href="https://selby.dev">Selby Kendrick</a>
    </p>
  </div>
</footer>
