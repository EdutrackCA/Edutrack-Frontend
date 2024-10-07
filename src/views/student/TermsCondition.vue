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
      <v-col cols="8" class="right-panel py-10">
        <v-row justify="center px-5">
          <v-col cols="12" sm="12">
            <h1 class="mt-5">Terms and Conditions</h1>
            <h4 class="font-weight-medium">
              Ensure to read through the terms and conditions before you
              proceed
            </h4>

            <v-card class="pa-5 mt-2 blue--text text--darken-4" outlined>
              <h3>Terms and Conditions for Track-CA</h3>
              <h4 class="mt-2 font-weight-regular">
                1. Introduction These Terms and Conditions govern your use of
                our School Management Application (Track-CA). By accessing or
                using the Application, you agree to be bound by these terms. If
                you do not agree to these terms, please refrain from using the
                Application.
            </h4>
            <h4 class="mt-2 font-weight-regular">
                2. License Grant We grant you a non-exclusive,
                non-transferable license to use the Application for the sole
                purpose of managing your school's operations. You may not
                modify, distribute, or create derivative works of the
                Application.
            </h4> 
            <h4 class="mt-2 font-weight-regular">
                3. User Data You are responsible for the accuracy
                and completeness of the data you enter into the Application. We
                may collect and store information about your use of the
                Application, such as your IP address and usage patterns. This
                information is used to improve the Application and provide
                better service. 
            </h4>
            <h4 class="mt-2 font-weight-regular">
                4. Intellectual Property The Application and its
                contents, including but not limited to the software, design, and
                trademarks, are the property of Track-CA and are
                protected by copyright and other intellectual property laws. 
            </h4>
            <h4 class="mt-2 font-weight-regular">
                5.
                Privacy Policy Your privacy is important to us. Please refer to
                our Privacy Policy for details on how we collect, use, and
                protect your personal information.
            </h4>    
            <h4 class="mt-2 font-weight-regular">
                6. Disclaimer of Warranties
                The Application is provided "as is" without any warranties,
                express or implied. We do not guarantee the accuracy,
                completeness, or reliability of the Application or its content.
            </h4> 
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center">
            <v-checkbox label="I agree to the terms and conditions of Track-CA"></v-checkbox>
        </v-row>
        <v-row justify="center">
          <v-btn dark text width="30vw" class="blue" to="/student/login">I agree</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.body {
  color: rgba(255, 255, 255, 0);
}
</style>
