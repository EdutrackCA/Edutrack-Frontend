<template>
 <div>
    <v-file-input
      @click="uploadBtn = false"
      prepend-icon=""
      flat
      solo
      background-color="transparent"
      dense
      style="position: absolute; z-index: 100; margin-top: -6px; width: 500px"
    ></v-file-input>
    <v-btn v-show="uploadBtn" class="">Choose a file</v-btn>
  </div>
</template>
<script>
export default {
  data: () => ({
    uploadBtn: true,
  }),
};
</script>
