<script>
  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment} class="bg-hex-b2a8bb">
  count is {count}
</button>
