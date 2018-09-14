<template>
  <div> 
    <h3>Day 3</h3>
    <input type="text" v-model="input">
    <div>
      <h4>One</h4>
        {{one}}
        <hr>  
        grid-size: {{gridSize}}
        <hr>  
        oneCoordiante: {{oneCoordiante}}
        <hr>  
        side: {{side}}
        <hr>  


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
      input: 18,
      sqrt: null,
      gridSize: null,
      oneCoordiante: null,
      ranges: [],
      side: null
    }
  },
  computed: {
      one() {  
        this.sqrt = Math.sqrt(this.input) 
        this.gridSize = (Number.isInteger(this.sqrt)) ? this.sqrt : Math.ceil(this.sqrt)
        this.setOneCoordiantes()
        this.setInputCoordiantes()

      },
      two() { 
        return 'ok'
      }
  },
  methods: {
    setOneCoordiantes() {
        let steps = 0
        let counter = 0
      
        for(let i=0; i<this.gridSize; i++) { 
          this.oneCoordiante = [counter, counter] 
          steps++
          if(i%2) {
            counter++
            steps =1
          }
        }
    },
    setInputCoordiantes() {
      // 25, 21, 17, 13
      let max = this.gridSize * this.gridSize
      let ranges = [max]

      for (let i=1; i<=3; i++) {
        ranges[i] = ranges[i-1]-(this.gridSize-1)
      }

      this.ranges = [ 
        [ranges[1],ranges[0]], 
        [ranges[2],ranges[1]], 
        [ranges[3],ranges[2]], 
        [ranges[3],ranges[3]-this.gridSize+2]
        ]

      this.ranges.forEach(n => {
        if(this.input>=n[0] && this.input<=n[1]) {
          this.side = n
        }
      }) 
    }
  }
}
</script>

<style lang="scss">
</style>
