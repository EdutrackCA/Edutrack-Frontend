<template>
  <div>
    <v-layout>
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
      <v-flex xs7 class="right-panel pt-8 px-2">
        <v-layout>
          <v-flex xs12>
            <h2 class="mt-15 blue--text text--darken-4" v-show="profileBtn">Sign up</h2>
            <h2 class="mt-15 blue--text text--darken-4" v-show="studentForm">
              Sign up <sub class="font-weight-light">student</sub>
            </h2>
            <h2 class="mt-15 blue--text text--darken-4" v-show="lecturerForm">
              Sign up <sub class="font-weight-light">lecturer</sub>
            </h2>
          </v-flex>
        </v-layout>

        <!-- studentBtn -->
        <v-layout column justify="center" class="mt-10">
          <v-flex xs12 class="text-center" v-show="profileBtn">
            <v-card
              class="pa-5"
              flat
              link
              style="background-color: transparent"
              @click="
                  (studentForm = true),
                    (profileBtn = false)
                ">
              <v-avatar size="120">
                <v-img src="@/assets/profile.jpg"></v-img>
              </v-avatar>
              <h4 class="mt-5 blue--text text--darken-4">Sign up as Student</h4>
            </v-card>
          </v-flex>

          <!-- lecturerBtn -->
          <v-flex xs12 class="text-center" v-show="profileBtn">
            <v-card
              class="pa-5"
              flat
              link
              @click="
                (studentForm = false),
                  (profileBtn = false),
                  (lecturerForm = true)
              "
              style="background-color: transparent"
            >
              <v-avatar size="120">
                <v-img src="@/assets/profile.jpg"></v-img>
              </v-avatar>
              <h4 class="mt-5 blue--text text--darken-4">
                Sign up as Lecturer
              </h4>
            </v-card>
          </v-flex>

          <!-- StudentForm -->
          <v-flex xs12 v-show="studentForm">
            <v-form>
              <v-layout column>
                <v-flex xs12 class="pl-4">
                  <v-text-field
                    dense
                    solo
                    placeholder="Name"
                    type="text"
                    v-model="studentName"
                    required
                  ></v-text-field>
                  <v-text-field
                    dense
                    solo
                    placeholder="Email"
                    type="email"
                    v-model="studentMail"
                    required
                  ></v-text-field>
                  <v-text-field
                    dense
                    solo
                    placeholder="Institution Name"
                    type="text"
                    v-model="studentInstitution"
                    required
                  ></v-text-field>
                  <v-text-field
                    dense
                    solo
                    placeholder="Matric No/Registration No"
                    type="text"
                    v-model="matricNo"
                    required
                  ></v-text-field>
                  <v-text-field
                    dense
                    solo
                    placeholder="Mobile Number"
                    type="text"
                    v-model="phone"
                    optional
                  ></v-text-field>
                  <v-text-field
                    dense
                    solo
                    placeholder="Mobile Number"
                    type="text"
                    v-model="phone"
                    optional
                  ></v-text-field>
                  <v-text-field
                    dense
                    solo
                    placeholder="Password"
                    type="password"
                    v-model="studentPassword"
                    required
                  ></v-text-field>
                  <v-text-field
                    dense
                    solo
                    placeholder="Confirm Password"
                    type="password"
                    v-model="studentPassword"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 class="text-center">
                  <v-action class="px-10">
                    <v-btn text block to="/student/course-form" v-model="submit"
                      >SignUp</v-btn
                    >
                  </v-action>
                </v-flex>
              </v-layout>
            </v-form>
          </v-flex>

          <!-- Lecturer Form -->
          <v-flex xs8 v-show="lecturerForm">
            <v-form>
              <v-layout column>
                <v-flex xs12 class="pl-4">
                  <v-text-field
                    dense
                    solo
                    placeholder="Name"
                    type="text"
                    v-model="lecturerName"
                    required
                  ></v-text-field>
                  <v-text-field
                    dense
                    solo
                    placeholder="Email"
                    type="email"
                    v-model="lecturerMail"
                    required
                  ></v-text-field>
                  <v-text-field
                    dense
                    solo
                    placeholder="Institution Name"
                    type="text"
                    v-model="lecturerInstitution"
                    required
                  ></v-text-field>
                  <v-text-field
                    dense
                    solo
                    placeholder="Mobile Number"
                    type="text"
                    v-model="phone"
                    optional
                  ></v-text-field>
                  <v-text-field
                    dense
                    solo
                    placeholder="Password"
                    type="password"
                    v-model="lecturerPassword"
                    required
                  ></v-text-field>
                  <v-text-field
                    dense
                    solo
                    placeholder="Confirm Password"
                    type="password"
                    v-model="lecturerPassword"
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
                  to="/lecturer/terms-and-condition"
                  v-model="submit"
                  >SignUp</v-btn
                >
              </v-action>
                </v-flex>
              </v-layout>
            </v-form>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentForm: false,
      profileBtn: true,
      lecturerForm: false,
    };
  },
};
</script>
