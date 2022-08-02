<script>
  import Router, { link } from "svelte-spa-router";
  import routes from "./router/index.js";
</script>

<main>
  <div>
    <a href="javascript;" use:link={"/list"}>To List</a>
    <a href="javascript;" use:link={"/list"}>To List</a>
    <a href="javascript;" use:link={"/detail/1?name=finget"} class="ml-80px"
      >To Detail</a
    >
  </div>

  <Router {routes} />
</main>

<style>
</style>
