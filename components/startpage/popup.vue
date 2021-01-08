<template>
  <div class="popup">
    <span class="popup__text">{{ text }}</span>
  </div>
</template>

<script>
import "./styles.scss";

export default {
  name: "popup",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>