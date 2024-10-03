<template>
  <div>
    <v-row>
      <!-- Left Panel -->
      <v-col
        cols="4"
        class="left-panel pt-10 pa-5"
        style="background-color: #01427a"
      >
        <v-card
          flat
          height="97vh"
          class="card"
          style="background-color: #01427a; color: white"
        >
          <v-row>
            <v-col>
              <h1 class="text-center">Track-CA</h1>
            </v-col>
          </v-row>
          <v-row align="center" class="justify-center mt-15 px-10 text-center">
            <v-img src="@/assets/signup.png"></v-img>
            <h4>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
              cum aliquam possimus qui optio! Iusto aut, amet officia iste,
            </h4>
          </v-row>
        </v-card>
      </v-col>

      <!-- Right Panel -->
      <v-col cols="8" class="right-panel pt-10">
        <v-row justify="center px-5">
          <v-col cols="12" sm="12">
            <h1 class="mt-15">Course Form Upload</h1>
            <h4 class="font-weight-medium">Upload a file of your course form</h4>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-card class="pa-5" height="50px" flat></v-card>
        </v-row>
        <!-- studentBtn -->
        <v-row justify="center" class="mt-10">
          <v-card width="200px" class="pa-10" flat>
            <v-file-input @click="uploadBtn = false" prepend-icon="" flat solo background-color="transparent" dense style="position:absolute; z-index:100; margin-top:-6px; width: 200px;"></v-file-input>
            <v-btn v-show="uploadBtn" class="">Choose a file</v-btn>
          </v-card>
         
        </v-row>

        <v-row justify="center" class="mt-10">
            <v-btn text width="30vw" class="grey lighten-3 mt-15" to="/student/terms-and-condition">Upload</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentForm: false,
      studentBtn: true,
      lecturerBtn: true,
      lecturerForm: false,
      uploadBtn:true,
    };
  },
};
</script>

<style>
.body{
  color: rgba(255, 255, 255, 0);
}
</style>
