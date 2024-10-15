<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <!-- left panel -->
        <v-flex xs5>
          <v-card
            flat
            height="100vh"
            class="card pa=5"
            style="background-color: #01427a; color: white"
          >
            <v-row>
              <v-col class="pt-10">
                <h2 class="text-center">Track-CA</h2>
              </v-col>
            </v-row>
            <v-row
              align="center"
              class="justify-center mt-15 pt-15 text-center px-8"
            >
              <v-img class="mt-15" src="@/assets/signup.png"></v-img>
              <h5>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit...
              </h5>
            </v-row>
          </v-card>
        </v-flex>

        <!-- Right Panel -->
        <v-flex xs7>
            <v-card class="pa-10" flat></v-card>
          <v-row justify="center pa-1 pl-2">
            <v-col cols="12" sm="12">
              <h2 class="mt-15">Course Form Upload</h2>
              <h5 class="font-weight-medium">
                Upload a file of your course form
              </h5>
            </v-col>
          </v-row>

          <!-- studentBtn -->
          <v-row justify="center" class="mt-10">
            <v-card width="200px" class="pa-7" flat>
              <v-file-input
                @click="uploadBtn = false"
                prepend-icon=""
                flat
                solo
                background-color="transparent"
                dense
                style="
                  position: absolute;
                  z-index: 100;
                  margin-top: -6px;
                  width: 200px;
                "
              ></v-file-input>
              <v-btn v-show="uploadBtn" class="">Choose a file</v-btn>
            </v-card>
          </v-row>

          <v-row justify="center" class="mt-10">
            <v-btn
              text
              width="30vw"
              class="grey lighten-3 mt-15"
              to="/student/terms-and-condition"
              >Upload</v-btn
            >
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
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
      uploadBtn: true,
    };
  },
};
</script>

<style>
.body {
  color: rgba(255, 255, 255, 0);
}
</style>
