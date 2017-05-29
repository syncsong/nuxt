<template lang="pug">
v-list(two-line='')
  template(v-for='item in items')
    v-subheader(v-if='item.header', v-text='item.header')
    v-divider(v-else-if='item.divider', v-bind:inset='item.inset')
    v-list-item(v-else='', v-bind:key='item.title')
      v-list-tile(avatar='')
        v-list-tile-avatar
          img(v-bind:src='item.avatar')
        v-list-tile-content
          v-list-tile-title(v-html='item.title')
          v-list-tile-sub-title(v-html='item.subtitle')
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { header: 'Today' },
          { avatar: '/static/doc-images/lists/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='grey--text text--darken-2'>Ali Connors</span> — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { divider: true, inset: true },
          { avatar: '/static/doc-images/lists/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='grey--text text--darken-2'>to Alex, Scott, Jennifer</span> — Wish I could come, but I'm out of town this weekend." },
          { divider: true, inset: true },
          { avatar: '/static/doc-images/lists/3.jpg', title: 'Oui oui', subtitle: "<span class='grey--text text--darken-2'>Sandra Adams</span> — Do you have Paris recommendations? Have you ever been?" }
        ]
      }
    },
    asyncData() {
      return {
        sidebar: false
      }
    }
  }
</script>

<style scoped>
  .title {
    padding-left: 20px;
  }
</style>
