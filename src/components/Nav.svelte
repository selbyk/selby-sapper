<script>
  export let segment;
  let hamburgerMenuVisible = false;
  let moreMenuVisible = false;

  function toggleHamburgerMenu() {
    hamburgerMenuVisible = !hamburgerMenuVisible;
    console.log(`hamburgerMenuVisible: ${hamburgerMenuVisible}`);
  }

  function toggleMoreMenu() {
    moreMenuVisible = !moreMenuVisible;
    console.log(`moreMenuVisible: ${moreMenuVisible}`);
  }
</script>

<style>
  .navbar-link.is-active,
  a.navbar-item.is-active {
    color: #08419c;
    font-weight: 600;
  }
</style>

<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href={segment === undefined ? 'about' : '.'}>
      <img src="s.png" width="28" height="28" alt="Logo, fancy S" />
    </a>

    <span
      on:click={toggleHamburgerMenu}
      role="button"
      class="navbar-burger burger {hamburgerMenuVisible ? 'is-active' : ''}"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </span>
  </div>

  <div
    id="navbarBasicExample"
    class="navbar-menu {hamburgerMenuVisible ? 'is-active' : ''}">
    <div class="navbar-start" />

    <div class="navbar-end">
      <a
        class="navbar-item {segment === undefined ? 'is-active' : ''}"
        href=".">
        <i class="fal fa-home" />
        Home
      </a>
      <a
        class="navbar-item {segment === 'blog' ? 'is-active' : ''}"
        href="blog">
        <i class="far fa-rss" />
        Blog
      </a>
      <a
        class="navbar-item {segment === 'projects' ? 'is-active' : ''}"
        href="projects">
        <i class="fal fa-construction" />
        Projects
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <span class="navbar-link">More</span>
        <div class="navbar-dropdown">
          <a
            class="navbar-item {segment === 'about' ? 'is-active' : ''}"
            href="about">
            About
          </a>
          <a
            class="navbar-item {segment === 'resume' ? 'is-active' : ''}"
            href="resume">
            Resume
          </a>
          <hr class="navbar-divider" />
          <a
            class="navbar-item {segment === 'nowhere' ? 'is-active' : ''}"
            href="nowhere">
            Example
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
