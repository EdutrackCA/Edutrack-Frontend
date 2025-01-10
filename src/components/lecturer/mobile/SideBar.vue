<template>
    <v-navigation-drawer color="blue darken-4" width="60px" permanent dark app>
      <!-- <a href="/"><h1 class="ma-3 white--text">Track-CA mobile</h1></a> -->
      
      <v-divider style="border-color: white"></v-divider>
      <v-list color="transparent" class="mt-10">
        <v-list-item class="" link to="/mobile/lecturer/dashboard"><v-icon>mdi-view-dashboard</v-icon></v-list-item>
        <v-list-item class="mt-6" link to="/mobile/lecturer/my-courses"><v-icon>mdi-bookshelf</v-icon></v-list-item>
        <v-list-item class="mt-6" link to="/mobile/lecturer/assignments"><v-icon>mdi-book</v-icon></v-list-item>
        <v-list-item class="mt-6" link to="/mobile/lecturer/performance"><v-icon>mdi-chart-waterfall</v-icon></v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn text block><v-icon>mdi-cog</v-icon></v-btn>
        </div>
        <div class="pa-2">
          <v-btn text block to="/"><v-icon>mdi-logout</v-icon></v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </template>
  
  <script></script>
  