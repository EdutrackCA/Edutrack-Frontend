<template>
  <div>
    <!-- Mobile -->
    <div class="d-md-none d-lg-none">
      <termsCondition />
    </div>

    <!-- Desktop -->
    <v-row class="d-none d-sm-none d-md-flex d-lg-flex">
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
import termsCondition from '@/components/student/mobile/termsCondition.vue';
export default {
  components: { termsCondition },
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
