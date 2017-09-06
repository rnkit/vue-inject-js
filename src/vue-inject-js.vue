<template></template>
<script>
  export default {
    props: {
      src: { type: String, required: true }
    },
    mounted () {
      this.injectJs()
    },
    methods: {
      injectJs () {
        const html = document.body
        const jsUrlList = [].map.call(html.querySelectorAll('scriptf'), (script) => { return script.src })
        const matchList = jsUrlList.filter((value) => {
          return value === this.src
        })
        if (matchList.length === 0) {
          const s = document.createElement('script')
          s.type = 'text/javascript'
          s.src = this.src
          document.body.appendChild(s)
        }
      }
    }
  }
</script>
