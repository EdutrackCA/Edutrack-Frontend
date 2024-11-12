<template>
  <v-container class="pa-10">
    <SideBar />
    <div class="courses-section">
      <v-row class="text-center">
        <!-- <NavBar /> -->
        <v-col cols="12" sm="12" class="text-left">
          <h2>Assignments</h2>
        </v-col>

        <!-- List of Assignments -->

        <v-col cols="12" sm="12">
          <v-row class="text-left pa-3">
            <v-col cols="12" sm="4"> Course Title </v-col>

            <v-col cols="12" sm="2" class="text-center"> Course Code </v-col>

            <v-col cols="12" sm="2" class="text-center"> Assigned date </v-col>

            <v-col cols="12" sm="2" class="text-center">
              Submission date
            </v-col>

            <v-col cols="12" sm="1"> </v-col>
          </v-row>

          <v-card
            class="blue darken-2 pa-5 mt-3"
            flat
            dark
            link
            v-for="(item, index) in items"
            :key="index"
          >
            <v-row class="text-left">
              <v-col cols="12" sm="4">
                <h5 class="font-weight-regular">
                  Introduction To Neural Network
                </h5>
              </v-col>

              <v-col cols="12" sm="2">
                <h5 class="font-weight-regular text-center">ICT 504</h5>
              </v-col>

              <v-col cols="12" sm="2">
                <h5 class="font-weight-regular text-center">05 - 11 - 2024</h5>
              </v-col>

              <v-col cols="12" sm="2">
                <h5 class="font-weight-regular text-center">05 - 11 - 2024</h5>
              </v-col>

              <v-col cols="12" sm="2" class="text-right">
                <v-btn small light class="text--blue rounded-0" elevation="0"
                  >Upload</v-btn
                >
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import SideBar from "@/components/student/mobile/SideBar.vue";
export default {
  components: { SideBar },
  data() {
    return {
      progressValue: 65,
      grid: true,
      list: false,
      items: [
        {
          title: "Card 1",
          description: "This is the description for card 1.",
          image: "https://via.placeholder.com/300x140",
        },
        {
          title: "Card 2",
          description: "This is the description for card 2.",
          image: "https://via.placeholder.com/300x140",
        },
        {
          title: "Card 3",
          description: "This is the description for card 3.",
          image: "https://via.placeholder.com/300x140",
        },
        {
          title: "Card 4",
          description: "This is the description for card 4.",
          image: "https://via.placeholder.com/300x140",
        },
        {
          title: "Card 5",
          description: "This is the description for card 4.",
          image: "https://via.placeholder.com/300x140",
        },
        {
          title: "Card 6",
          description: "This is the description for card 4.",
          image: "https://via.placeholder.com/300x140",
        },
        {
          title: "Card 7",
          description: "This is the description for card 4.",
          image: "https://via.placeholder.com/300x140",
        },
        {
          title: "Card 8",
          description: "This is the description for card 4.",
          image: "https://via.placeholder.com/300x140",
        },
        {
          title: "Card 9",
          description: "This is the description for card 4.",
          image: "https://via.placeholder.com/300x140",
        },
      ],
    };
  },
};
</script>

<style scoped>
.clickable-card {
  cursor: pointer;
  transition: transform 0.3s;
}

.clickable-card:hover {
  transform: scale(1.05);
}

.scrollable-card {
  height: 300px; /* Fixed height for the card */
  overflow: auto; /* Hide overflow outside of this height */
}

.scrollable-content {
  max-height: 100%; /* Ensures content takes up available height */
  overflow-y: auto; /* Enables vertical scrolling */
}

.extra-small-chip {
  font-size: 8px; /* Adjust font size */
  height: 15px; /* Set a smaller height */
  padding: 0 6px; /* Reduce padding */
  border-radius: 12px; /* Adjust border-radius for a rounded look */
  color: red;
}
</style>
