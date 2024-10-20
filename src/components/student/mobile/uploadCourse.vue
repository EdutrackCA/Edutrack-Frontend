<template>
  <div>
    <v-container fluid class="pa-0">
      <v-layout fill-height wrap>
       <!-- left panel -->
       <v-flex xs4>
          <v-card
          rounded="0"
            scrollable
            flat
            height="100vh"
            class="card pa=5"
            style="background-color: #01427a; color: white"
          >
            <v-layout>
              <v-flex xs12 class="py-10">
                <h3 class="text-center">Track-CA</h3>
              </v-flex>
            </v-layout>
            <v-layout
              align="center"
              class="justify-center mt-15 pt-15 text-center px-5"
            >
            <v-flex xs12>
              <v-img class="mt-15" src="@/assets/signup.png"></v-img>
              <h5 class="font-weight-regular">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit...
              </h5>
            </v-flex>
            </v-layout>
          </v-card>
        </v-flex>

        <!-- Right Panel -->
        <v-flex xs7>
            
          <v-layout class="pt-15">
            <v-flex xs12 class="pa-3">
              <h3 class="mt-15">Course Form Upload</h3>
              <h5 class="font-weight-regular">
                Upload a file of your course form
              </h5>
            </v-flex>
          </v-layout>

          <!-- studentBtn -->
          <v-layout class="pt-15">
            <v-flex xs12 class="ma-9">
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
            </v-flex>
          </v-layout>

          <v-layout column justify="center" class="mt-10">
            <v-flex xs12 class="text-center">
              <v-btn
              text
              class="grey lighten-3 mt-15"
              to="/student/terms-and-condition"
              >Upload</v-btn
            >
            </v-flex>
          </v-layout>
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
