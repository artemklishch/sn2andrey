<template>
  <div class="startpageblock">
    <div class="d-flex justify-content-center">
      <div class="startpageblock__circles">
        <div class="one-circle">
          <div class="circle-inside">
            <span class="circle-inside-line"></span>
            <OnePopup />
          </div>
          <span class="circletext">Learning System</span>
        </div>

        <div class="two-circle">
          <div class="circle-inside">
            <span class="circle-inside-line"></span>
            <TwoPopup />
          </div>
          <span class="circletext">2DVVI</span>
        </div>

        <div class="three-circle">
          <div class="circle-inside">
            <span class="circle-inside-line"></span>
            <ThreePopup />
          </div>
          <span class="circletext">Polimorphic</span>
        </div>

        <div class="four-circle">
          <div class="circle-inside">
            <span class="circle-inside-line"></span>
            <FourPopup />
          </div>
          <span class="circletext">Blockchain</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OnePopup from "../onepopup";
import TwoPopup from "../twopopup";
import ThreePopup from "../threepopup";
import FourPopup from "../fourpopup";
import "./styles.scss";

export default {
  name: "startpage",
  components: {
    OnePopup,
    TwoPopup,
    ThreePopup,
    FourPopup,
  },
};
</script>
