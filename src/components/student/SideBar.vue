<template>
  <v-navigation-drawer color="blue darken-4" dark permanent app>
    <a href="/"><h1 class="ma-3 white--text">Track-CA</h1></a>
    
    <v-divider style="border-color: white"></v-divider>
    <v-list color="transparent" class="mt-10">
      <v-list-item class="" link to="/student/dashboard"><v-icon>mdi-view-dashboard</v-icon>Dashboard</v-list-item>
      <v-list-item class="mt-6" link to="/student/my-courses"><v-icon>mdi-bookshelf</v-icon>My Courses</v-list-item>
      <v-list-item class="mt-6" link to="/student/assignments"><v-icon>mdi-book</v-icon>Assignments</v-list-item>
      <v-list-item class="mt-6" link to="/student/performance"><v-icon>mdi-chart-waterfall</v-icon>Performance</v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn text block><v-icon>mdi-cog</v-icon> Settings </v-btn>
      </div>
      <div class="pa-2">
        <v-btn text block to="/"><v-icon>mdi-logout</v-icon> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script></script>
