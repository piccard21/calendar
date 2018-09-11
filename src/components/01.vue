<template>
  <div> 
    <input type="text" v-model="input">
    <div>
    	<h4>One</h4>
      	{{one}}
    </div>
    <div>
    	<h4>Two</h4>
      	{{two}}
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
      one() {
      	return [...this.input].reduce( (acc, current, idx, src) => { 
      		return (current === src.slice(idx-1)[0]) ? acc+parseInt(current) : acc
      	},0)
      },
      two() {  
      	if(this.input.length%2) return

      	const steps = this.input.length/2 

      	return [...this.input].reduce( (acc, current, idx, src) => { 
      		if(idx+steps > src.length) return acc
      		const currentStep = src.slice(idx+steps)[0]
      		return (current === currentStep) ? acc+parseInt(current)+parseInt(currentStep) : acc
      	},0)
      }
  }
}
</script>

<style lang="scss">
</style>
