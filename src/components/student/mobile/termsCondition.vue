<template>
  <div>
    <v-container>
      <v-layout row wrap>
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
        <v-flex xs8 class="pa-4">
          <v-layout justify="center px-4">
            <v-flex xs12>
              <h3 class="mt-5">Terms and Conditions</h3>
              <h6 class="font-weight-light">
                Ensure to read through the terms and conditions before you
                proceed
              </h6>

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
                    <p>
                      7. Limitation of Liability In no event shall Track-CA be
                      liable for any indirect, incidental, special,
                      consequential, or exemplary damages arising out of or in
                      connection with your use of the Application.
                    </p>
                    <p>
                      8. Indemnification You agree to indemnify and hold
                      Track-CA harmless from any claims, liabilities, damages,
                      or expenses arising out of or in connection with your use
                      of the Application
                    </p>
                    <p>
                      9. Termination We may terminate your access to the
                      Application at any time without notice for any reason.
                    </p>
                    <p>
                      10. Governing Law These Terms and Conditions shall be
                      governed by and construed in accordance with the laws of
                      [Jurisdiction].
                    </p>
                    <p>
                      11. Changes We may update these Terms and Conditions from
                      time to time. Any changes will be effective upon posting
                      on the Application.
                    </p>
                    <p></p>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>

          <v-layout justify="center" class="px-1">
            <v-flex xs12>
              <v-checkbox
                label="I agree to the terms and conditions of Track-CA"
              ></v-checkbox>
            </v-flex>
          </v-layout>

          <v-layout justify="center">
            <v-flex xs12 class="text-center">
              <v-btn
                dark
                text
                width="30vw"
                class="blue"
                to="/mobile/student/login"
                >I agree</v-btn
              >
            </v-flex>
          </v-layout>
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
