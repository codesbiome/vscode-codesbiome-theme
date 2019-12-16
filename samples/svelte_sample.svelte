<script>
  export let name;
  export const FILTERS = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_PENDING: "SHOW_PENDING"
  };

  let now = FILTERS.SHOW_ALL;
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <button
    disabled={FILTERS.SHOW_COMPLETED === name}
    on:click={() => {
      name.update(n => (n = FILTERS.SHOW_COMPLETED));
    }}>
    COMPLETED
  </button>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
