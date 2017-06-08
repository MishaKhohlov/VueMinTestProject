const anotherPage = {
    template: `
            <div>
              Another Page {{ $route.params.id }}
              <button @click="goHome">Go To Home</button>
              <button @click="goInclude">Go To Include</button>
               <router-view></router-view>
            </div>
    `,
    methods: {
      goHome() {
          console.log(this);
          this.$router.push({path: '/'})
      },
      goInclude() {
          this.$router.push({path: 'bar', params: {id: 'new-id'}})
      }
    },
    beforeRouteUpdate (to, from, next) {
        console.log('change url before update');
        next();
    },
    watch: {
        '$route' (to, from) {
            // console.log('change url ' + to + ' ' + from);
        }
    }
};

const anotherPageInclude = {
    template: `
            <div>
              Another Path include 
            </div>
    `,
};

export {anotherPage, anotherPageInclude};
