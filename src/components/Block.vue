<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
      Click Me
  </div>
</template>

<script>
export default {
    props: ['delay'],

    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },

    mounted() {
        console.log('component mounted')
        setTimeout( () => {
            this.showBlock = true
            this.startTimer()
        }, this.delay)
    },

    updated() {
        console.log('data updated')
    },

    methods: {
        startTimer() {
            this.timer = setInterval( () => {
                this.reactionTime += 10
            }, 10)
        },

        stopTimer() {
            clearInterval(this.timer)
            this.$emit('end', this.reactionTime)
        }
    }
}
</script>

<style>
    .block {
        width: 400px;
        padding: 100px 0;
        background: #2bbfd3;
        border-radius: 12px;
        color: white;
        margin: 40px auto;
        text-align: center;
    }
</style>