<template>
  <div class="results">
      <p> Reaction Time: {{ score }} </p>
      <p class="rank">{{ rank }}</p>
  </div>
</template>

<script>
export default {
    props: ['score'],

    data() {
        return {
            rank: null
        }
    },

    mounted() {
        let score = this.score

        if (score < 250 ) {
            this.rank = "Very Fast Fingers"
        }
        else if (score < 400) {
            this.rank = "Fast Enough"
        }
        else {
            this.rank = "Snail Fingers"
        }
    }
}
</script>

<style>
    .rank {
        color:  #2bbfd3;
        font-size: 24px;
        font-weight: bold
    }
</style>