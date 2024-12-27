<template>
  <div>
    <v-row>
      <!-- Left Panel -->
      <v-col cols="4" class="left-panel pt-10 pa-5" style="background-color:#01427a">
        <v-card flat height="97vh" class="card" style="background-color:#01427a; color:white">
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
          <h2 class="mt-15 blue--text text--darken-4">Sign up</h2>
        </v-row>

        <!-- studentBtn -->
        <v-row justify="center" class="mt-5">
          <v-col cols="4" class="text-center" v-show="studentBtn">
            <v-card class="pa-5" flat link style="background-color:transparent" @click="studentForm=true , studentBtn=false , lecturerBtn=false">
              <v-avatar size="120">
                <v-img src="@/assets/profile.jpg"></v-img>
              </v-avatar>
              <h4 class="mt-5 blue--text text--darken-4">Sign up as Student</h4>
            </v-card>
          </v-col>

          <!-- lecturerBtn -->
          <v-col cols="4" class="text-center" v-show="lecturerBtn">
            <v-card class="pa-5" flat link to="/lecturer/dashboard" style="background-color:transparent">
              <v-avatar size="120">
                <v-img src="@/assets/profile.jpg"></v-img>
              </v-avatar>
              <h4 class="mt-5 blue--text text--darken-4">Sign up as Lecturer</h4>
            </v-card>
          </v-col>

            <!-- StudentForm -->
          <v-col cols="12" sm="8" class="px-10" v-show="studentForm">
          <v-form>
            <v-row no-gutters>
              <v-col cols="12" sm="12">
                <v-text-field dense solo placeholder="Name" type="text" v-model="studentName" required></v-text-field>
            <v-text-field dense solo placeholder="Email" type="email" v-model="studentMail" required></v-text-field>
            <v-text-field dense solo placeholder="Institution Name" type="text" v-model="studentInstitution" required></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field dense solo placeholder="Matric No/Registration No" type="text" v-model="matricNo" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field dense solo  placeholder="Mobile Number" type="text" v-model="phone" optional></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field dense solo placeholder="Password" type="password" v-model="studentPassword" required></v-text-field>
            <v-text-field dense solo placeholder="Confirm Password" type="password" v-model="studentPassword" required></v-text-field>
              </v-col>
            </v-row>
            <v-action class="px-10">
              <v-btn text block to="/lecturer/login" v-model="submit">SignUp</v-btn>
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
      studentForm: false,
      studentBtn: true,
      lecturerBtn: true,
      lecturerForm: false,
    }
  },
}
</script>
