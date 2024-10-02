<template>
  <div>
    <!-- <v-app-bar
      app
      light
      flat
      class="px-10"
      height="61px"
    >
      <div class="d-flex align-center">
        <h3>Hello John Doe</h3>
      </div>

      <v-spacer></v-spacer>

      <div>
        <v-text-field style="width:550px" class="mt-6" rounded="" dense filled background-color="white" flat></v-text-field>
      </div>

      <v-spacer></v-spacer>
      <v-avatar class="pa-5" color="white" size="15px"> <v-badge offset-y="10"></v-badge> </v-avatar>
      <v-spacer></v-spacer>
      <v-btn
        icon
        link
        outlined
        medium
      >
        
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-app-bar
      app
      dark
      flat
      class="px-10 blue darken-3"
      height="60px"
    >
      <div class="d-flex align-center">
        <h3>Hello John Doe</h3>
      </div>

      <v-spacer></v-spacer>

      <div>
        <v-text-field style="width:550px" class="mt-6" rounded="" dense filled background-color="white" flat></v-text-field>
      </div>

      <v-spacer></v-spacer>
      <v-avatar class="pa-5" color="white" size="15px"> </v-avatar>
      <v-badge offset-y="-1" offset-x="10" color="red"></v-badge>
      <v-spacer></v-spacer>
      <v-btn
        icon
        link
        outlined
        medium
      >
        
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>

</script>
