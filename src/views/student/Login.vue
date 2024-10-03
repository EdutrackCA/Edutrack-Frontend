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
        <v-row justify="center mt-10">
          <h2 class="mt-15 blue--text text--darken-4">Login</h2>
        </v-row>

        <!-- studentBtn -->
        <v-row justify="center" class="mt-5">
          

          <!-- Login Form -->
          <v-col cols="12" sm="8" class="px-10">
            <v-form>
              <v-row no-gutters>
                <v-col cols="12" sm="12">
                  <v-text-field
                    dense
                    solo
                    placeholder="Matric No/Registration No"
                    type="text"
                    v-model="lecturerName"
                    required
                  ></v-text-field>
                  <v-text-field
                    dense
                    solo
                    placeholder="Password"
                    type="password"
                    v-model="lecturerPassword"
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                  
                </v-col>
                </v-row>
              <v-action class="px-10">
                <v-btn text block to="/lecturer/dashboard" v-model="submit"
                  >SignUp</v-btn
                >
              </v-action>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
};
</script>
