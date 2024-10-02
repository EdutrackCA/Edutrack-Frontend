<template>
    <v-file-input
      v-model="files"
      :show-size="1000"
      color="deep-purple-accent-4"
      label="Upload Document"
      prepend-icon="mdi-paperclip"
      variant="outlined"
      counter
      multiple
    >
    </v-file-input>
  </template>
  <script>
  export default {
    data: () => ({
      files: [],
    }),
  }
</script>