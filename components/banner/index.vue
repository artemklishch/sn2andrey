<template>
  <div class="banner">
    <section class="banner__logo">
      <p class="banner__logo_title">Banner</p>
    </section>
    <section class="banner__description">
      <p class="banner__description_text">
        {{ text }}
      </p>
      <a href="#" class="banner__description_link" ref="contactusref"
        >Contact Us</a
      >
    </section>
  </div>
</template>

<script>
import "./styles.scss";

export default {
  name: "banner",
  data() {
    return {
      text: "",
      allText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit blanditiis fuga repellat aut atque harum, molestiae perferendis ipsum debitis fostrum! Culpa magnam incidunt quisquam soluta vero? Ducimus dicta etasperiores!",
    };
  },
  created() {
    setTimeout(() => {
      this.onFullTest();
    }, 3000);
  },
  methods: {
    onFullTest() {
      const arrayOfText = this.allText.split("");
      const timer = setInterval(() => {
        if (!arrayOfText.length) {
          clearInterval(timer);
          if (this.$refs.contactusref) {
            this.$refs.contactusref.style.display = "inline";
          }
          return;
        }
        this.text += arrayOfText.shift();
      }, 100);
    },
  },
};
</script>