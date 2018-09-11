<template>
  <div> 
    <input type="text" v-model="input">
    <div>
      {{calc}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      input: '3213'
    }
  },
  computed: {
      calc() {
      	return [...this.input].reduce( (acc, current, idx, src) => { 
      		console.info(current, src.slice(idx-1)[0])
      		return (current === src.slice(idx-1)[0]) ? acc+parseInt(current) : acc
      	},0)
      }
  }
}
</script>

<style lang="scss">
</style>
