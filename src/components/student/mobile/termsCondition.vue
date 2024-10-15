<template>
  <div>
    <v-container>
        <v-layout row wrap overflow>
            <!-- left panel -->
        <v-flex xs4>
          <v-card
          scrollable
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
        <v-flex xs8>
            <v-row justify="center px-5">
          <v-col cols="12" sm="12">
            <h3 class="mt-5">Terms and Conditions</h3>
            <h5 class="font-weight-light">
              Ensure to read through the terms and conditions before you
              proceed
            </h5>

            <v-card class="pa-5 px-2 mt-2 blue--text text--darken-4" outlined>
              <h3>Terms and Conditions for Track-CA</h3>
              <h5 class="mt-2 font-weight-light">
                1. Introduction These Terms and Conditions govern your use of
                our School Management Application (Track-CA). By accessing or
                using the Application, you agree to be bound by these terms. If
                you do not agree to these terms, please refrain from using the
                Application.
            </h5>
            <h5 class="mt-2 font-weight-light">
                2. License Grant We grant you a non-exclusive,
                non-transferable license to use the Application for the sole
                purpose of managing your school's operations. You may not
                modify, distribute, or create derivative works of the
                Application.
            </h5> 
            <h5 class="mt-2 font-weight-light">
                3. User Data You are responsible for the accuracy
                and completeness of the data you enter into the Application. We
                may collect and store information about your use of the
                Application, such as your IP address and usage patterns. This
                information is used to improve the Application and provide
                better service. 
            </h5>
            <h5 class="mt-2 font-weight-light">
                4. Intellectual Property The Application and its
                contents, including but not limited to the software, design, and
                trademarks, are the property of Track-CA and are
                protected by copyright and other intellectual property laws. 
            </h5>
            <h5 class="mt-2 font-weight-light">
                5.
                Privacy Policy Your privacy is important to us. Please refer to
                our Privacy Policy for details on how we collect, use, and
                protect your personal information.
            </h5>    
            <h5 class="mt-2 font-weight-light">
                6. Disclaimer of Warranties
                The Application is provided "as is" without any warranties,
                express or implied. We do not guarantee the accuracy,
                completeness, or reliability of the Application or its content.
            </h5> 
            </v-card>
          </v-col>
        </v-row>
        <v-row justify="center" class="px-2">
            <v-checkbox label="I agree to the terms and conditions of Track-CA"></v-checkbox>
        </v-row>
        <v-row justify="center">
          <v-btn dark text width="30vw" class="blue" to="/mobile/student/login">I agree</v-btn>
        </v-row>
        </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>

</script>
