<template>
  <div>i am example page!</div>
</template>

<script>
import exampleService from '../../../service/example'
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    console.log(exampleService) // eslint-disable-next-line
      // exampleService
    // .hello()
    // .then(data => {
    //   console.log(data) // eslint-disable-next-line
    //   })
  }
}

</script>

<style lang="scss" scoped>

</style>
