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
        <v-flex xs8 class="right-panel pt-10 pa-5">
          <v-layout justify="center mt-10">
            <v-flex xs12 class="text-center">
              <h2 class="mt-15 blue--text text--darken-4">Login</h2>
            </v-flex>
          </v-layout>

          <!-- studentBtn -->
          <v-layout justify="center" class="mt-5">
            <!-- Login Form -->
            <v-flex xs12>
              <v-form>
                <v-layout>
                  <v-flex xs12>
                    <v-text-field
                      dense
                      solo
                      placeholder="Matric No/Registration No"
                      type="text"
                      v-model="MatricNo"
                      required
                    ></v-text-field>
                    <v-text-field
                      dense
                      solo
                      placeholder="Password"
                      type="password"
                      v-model="Password"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex xs12>
                    <v-action class="px-10">
                  <v-btn
                    text
                    block
                    to="/mobile/student/dashboard"
                    v-model="submit"
                    >Login</v-btn
                  >
                </v-action>
                  </v-flex>
                </v-layout>
              </v-form>
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
    return {};
  },
};
</script>
