<template>
  <v-container class="">
    <v-slide-group>
      <v-slide-item v-for="(item, index) in items" :key="index">
        <v-card
          class="clickable-card ma-2"
          @click="handleCardClick(item)"
          outlined
        >
          <v-img :src="item.image" height="140px"></v-img>
          <v-card-title class="headline">{{ item.title }}</v-card-title>
          <v-card-text>
            {{ item.description }}
          </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
export default {
  name: "CardSlider",
  data() {
    return {
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
      ],
    };
  },
  methods: {
    handleCardClick(item) {
      alert(`You clicked: ${item.title}`);
      // Additional actions, like navigating or opening a modal, can be performed here
    },
  },
};
</script>

<style scoped>
.clickable-card {
  width: 300px;
  cursor: pointer;
  transition: transform 0.3s;
}

.clickable-card:hover {
  transform: scale(1.05);
}
</style>
