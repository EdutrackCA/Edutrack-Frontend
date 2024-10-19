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
                <h3 class="text-center">Track-CA</h3>
              </v-col>
            </v-row>
            <v-row
              align="center"
              class="justify-center mt-15 pt-15 text-center px-4"
            >
              <v-img class="mt-15" src="@/assets/signup.png"></v-img>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit...
              </p>
            </v-row>
          </v-card>
        </v-flex>

        <!-- Right Panel -->
        <v-flex xs8>
          <v-row justify="center px-4">
            <v-col cols="12" sm="12">
              <h3 class="mt-5">Terms and Conditions</h3>
              <h5 class="font-weight-light">
                Ensure to read through the terms and conditions before you
                proceed
              </h5>

              <v-card
                class="pa-5 px-2 mt-2 blue--text text--darken-4 scrollable-card"
                outlined
              >
                <h4>Terms and Conditions for Track-CA</h4>
                <v-card-text>
                  <div class="scrollable-content">
                    <p>
                      1. Introduction These Terms and Conditions govern your use
                      of our School Management Application (Track-CA). By
                      accessing or using the Application, you agree to be bound
                      by these terms. If you do not agree to these terms, please
                      refrain from using the Application.
                    </p>
                    <p>
                      2. License Grant We grant you a non-exclusive,
                      non-transferable license to use the Application for the
                      sole purpose of managing your school's operations. You may
                      not modify, distribute, or create derivative works of the
                      Application.
                    </p>
                    <p>
                      3. User Data You are responsible for the accuracy and
                      completeness of the data you enter into the Application.
                      We may collect and store information about your use of the
                      Application, such as your IP address and usage patterns.
                      This information is used to improve the Application and
                      provide better service.
                    </p>
                    <p>
                      4. Intellectual Property The Application and its contents,
                      including but not limited to the software, design, and
                      trademarks, are the property of Track-CA and are protected
                      by copyright and other intellectual property laws.
                    </p>
                    <p>
                      6. Disclaimer of Warranties The Application is provided
                      "as is" without any warranties, express or implied. We do
                      not guarantee the accuracy, completeness, or reliability
                      of the Application or its content.
                    </p>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row justify="center" class="px-12">
            <v-checkbox
              label="I agree to the terms and conditions of Track-CA"
            ></v-checkbox>
          </v-row>
          <v-row justify="center">
            <v-btn
              dark
              text
              width="30vw"
              class="blue"
              to="/mobile/student/login"
              >I agree</v-btn
            >
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script></script>

<style>
.scrollable-card {
  height: 550px; /* Fixed height for the card */
  overflow: auto; /* Hide overflow outside of this height */
}

.scrollable-content {
  max-height: 100%; /* Ensures content takes up available height */
  overflow-y: auto; /* Enables vertical scrolling */
  padding-right: 16px; /* Adds padding to account for scrollbar */
}
</style>
