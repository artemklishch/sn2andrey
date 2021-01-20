<template>
  <div>
    <Banner />
    <StartPage />
    <Footer />
  </div>
</template>

<script>
import Banner from "../components/banner";
import StartPage from "../components/startpage";
import Footer from "../components/footerblock";

export default {
  components: {
    StartPage,
    Banner,
    Footer,
  },
};
</script>
