<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import Router, { link } from "svelte-spa-router";
  import routes from "./router/index.js";
</script>

<main>
  <div>
    <a href="javascript;" use:link={"/list"}>To List</a>
    <a href="javascript;" use:link={"/detail/1?name=finget"} class="ml-80px"
      >To Detail</a
    >
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <Router {routes} />
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
