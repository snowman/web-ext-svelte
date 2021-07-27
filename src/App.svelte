<script>
  let image = "https://images.unsplash.com/photo-1586074299757-dc655f18518c?fit=crop&w=1268&q=80";

  function change() {
    browser.storage.local.set({ background: image });
  }
</script>

<main>
  Image URL: <input type="text" bind:value={image} />
  <button on:click={change}>Change</button>
</main>

<style>
        main {
                text-align: center;
                padding: 1em;
                max-width: 240px;
                margin: 0 auto;
        }

        h1 {
                color: #ff3e00;
                text-transform: uppercase;
                font-size: 4em;
                font-weight: 100;
        }

        @media (min-width: 640px) {
                main {
                        max-width: none;
                }
        }
</style>
