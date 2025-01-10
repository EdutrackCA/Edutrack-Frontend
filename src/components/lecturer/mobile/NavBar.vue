<template>
    <div>
      <v-app-bar
        app
        dark
        flat
        class="px-0 blue darken-3"
        height="50px"
      >
      <v-layout class="pt-7">
        <v-flex xs3>
            <h6 class="mt-3 text-left">Hello, Ebenezer</h6>
        </v-flex>

        <v-flex xs6>
          <v-text-field placeholder="search..." solo dense background-color="white" flat light class="ml-1"></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs2>
          <v-avatar class="pa-4" color="white" size="10px" x-small> </v-avatar>
          <v-badge offset-y="-1" offset-x="10" color="red"></v-badge>
        </v-flex>
        <v-spacer></v-spacer>
      <v-flex xs1>
      <v-btn
      class="ml-1 mt-1"
        icon
        link
        outlined
        small
      >
        
        <v-icon>mdi-account</v-icon>
      </v-btn></v-flex>

      </v-layout>
        
      </v-app-bar>
    </div>
  </template>
  
  <script>
  
  </script>
  