<template>
  <v-app>
    <v-toolbar class="cyan">
      <v-toolbar-title><nuxt-link to="/">SyncSong</nuxt-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click.native="showSearchInput()" light icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container fluid>

        <v-layout row>
          <v-container fluid class="px-4">
            <v-flex xs12>
              <v-text-field
              name="search"
              label="Search"
              value=""
              class="input-group--focused search-input hide"
              light
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-card>
                <v-list two-line subheader>
                  <v-subheader inset>Favorites rooms</v-subheader>

                  <v-list-item v-for="item in items" v-bind:key="item.title">
                    <v-list-tile avatar router nuxt to="/room">
                      <v-list-tile-avatar>
                        <v-icon v-bind:class="[item.iconClass]">{{ item.icon }}</v-icon>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                      <v-list-tile-action>
                        <v-btn icon ripple>
                          <v-icon class="grey--text text--lighten-1">info</v-icon>
                        </v-btn>
                      </v-list-tile-action>
                    </v-list-tile>
                  </v-list-item>

                  <v-divider inset></v-divider>
                  <v-subheader inset>Recommened rooms</v-subheader>
                  <v-list-item v-for="item in items2" v-bind:key="item.title">
                    <v-list-tile>
                      <v-list-tile-avatar>
                        <v-icon v-bind:class="[item.iconClass]">{{ item.icon }}</v-icon>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                      <v-list-tile-action>
                        <v-btn icon ripple>
                          <v-icon class="grey--text text--lighten-1">info</v-icon>
                        </v-btn>
                      </v-list-tile-action>
                    </v-list-tile>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-flex>
          </v-container>
        </v-layout>

      </v-container>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'SyncSong community', subtitle: 'Jan 9, 2014', 'url': '/room' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Scoltech', subtitle: 'Jan 17, 2014', 'url': '/room' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'GuitarGo', subtitle: 'Jan 28, 2014', 'url': '/room' }
        ],
        items2: [
          { icon: 'assignment', iconClass: 'blue white--text', title: 'Liveedu guitars', subtitle: 'Jan 20, 2014' },
          { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen band', subtitle: 'Jan 10, 2014' },
        ]
      }
    },
    methods: {
      showSearchInput: function () {
        document.querySelector('.search-input').classList.toggle('hide')
      }
    }
  }
</script>
