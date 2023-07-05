export default {
    methods: {
      goTo(name) {
        if (name) {
                this.$router.push({
                    name: name,
                });
            }
      }
    },
}