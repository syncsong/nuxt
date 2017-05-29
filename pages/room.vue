<template>
<v-app>
  <v-toolbar class="cyan">
    <v-toolbar-title>SyncSong</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click.native="toggleChords()" light icon>
      <v-icon>music_note</v-icon>
    </v-btn>
    <v-btn @click.native="showSearchInput()" light icon>
      <v-icon>search</v-icon>
    </v-btn>
  </v-toolbar>
  <main>
    <v-container fluid>
      <v-flex xs12>
        <v-text-field
        name="search"
        label="Search"
        value=""
        class="input-group--focused search-input hide"
        light
        ></v-text-field>
      </v-flex>
      <div v-html="chord"></div>
    </v-container>
  </main>
</v-app>
</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return {
        chord: '',
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
    asyncData () {
      return {
        sidebar: false
      }
    },
    created () {
      axios.get('/songs/aria-zasipay.html')
      .then(response => {
        console.log(response)
        this.chord = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    methods: {
      showSearchInput: function () {
        document.querySelector('.search-input').classList.toggle('hide')
      },
      toggleChords: function () {
        console.log(document.querySelectorAll('.chord'))
        let chords = document.querySelectorAll('.chord')
        chords.forEach(function(item){
          item.classList.toggle('hideChord')
        })
      }
    }
  }
</script>

<style scoped>
  .title {
    padding-left: 20px;
  }
</style>
