<template>
  <div class="startpageblock">
    <div class="startpageblock__topline"></div>
    <div
      class="startpageblock__circles circle"
      @mouseover="(e) => hoverOnCircle(e.srcElement, 'mouseover')"
      @mouseout="(e) => mouseOutOfCircle(e.srcElement, 'mouseout')"
    >
      <div class="one circle">
        <div class="two circle">
          <div class="three circle">
            <Popup :text="texts[3]" />
          </div>
          <Popup :text="texts[2]" />
        </div>
        <Popup :text="texts[1]" />
      </div>
      <Popup :text="texts[0]" />
    </div>
    <div class="startpageblock__continuebtn">Continue</div>
  </div>
</template>

<script>
import Popup from "./popup";
import "./styles.scss";
import onChangePopupVis from "@/helpers/onChangePopupVis";

export default {
  name: "startpage",
  components: {
    Popup,
  },
  data() {
    return {
      texts: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, alias atquevero ex ipsam totam!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, alias atquevero ex ipsam totam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, alias atquevero ex ipsam totam!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, alias atquevero ex ipsam totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, alias atquevero ex ipsam totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, alias atquevero ex ipsam totam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, alias atquevero ex ipsam totam!",
      ],
    };
  },
  methods: {
    hoverOnCircle: onChangePopupVis,
    mouseOutOfCircle: onChangePopupVis,
  },
};
</script>
