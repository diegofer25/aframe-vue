<template>
  <div class="main-scene">
    <a-scene>
      <a-assets>
        <img id="box-texture" src="https://i.imgur.com/mYmmbrp.jpg" />
        <img
          id="sky-texture"
          src="https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"
        />
        <img
          id="ground-texture"
          src="https://cdn.aframe.io/a-painter/images/floor.jpg"
        />
      </a-assets>
      <va-box :options="boxOptions"></va-box>
      <a-sky src="#sky-texture"></a-sky>
      <va-plane :options="planeOptions"></va-plane>
      <va-light :options="lightOptions"></va-light>
      <va-sound :options="soundOptions"></va-sound>
      <a-entity
        text="value: Hello, A-Frame!; color: #BBB"
        position="-0 2 -5"
        scale="10 10 10"
      ></a-entity>

      <a-camera>
        <a-cursor color="white"></a-cursor>
      </a-camera>
    </a-scene>
  </div>
</template>

<script>
import vaBox from "@/components/aframe/primitives/box";
import vaPlane from "@/components/aframe/primitives/plane";
import vaLight from "@/components/aframe/primitives/light";
import vaSound from "@/components/aframe/primitives/sound";

// import vaEntity from "@/components/aframe/entity";
export default {
  name: "main-scene",
  components: {
    vaBox,
    vaPlane,
    vaLight,
    vaSound
    // vaEntity
  },
  data() {
    return {
      boxOptions: {
        src: "#box-texture",
        position: "0 2 -5",
        rotation: "0 45 45",
        scale: "2 2 2",
        animation: {
          property: "object3D.position.y",
          to: 2.2,
          dir: "alternate",
          dur: 2000,
          loop: true
        },
        ["animation__mouseenter"]: {
          property: "scale",
          to: "2.3 2.3 2.3",
          dur: 500,
          startEvents: "mouseenter"
        },
        ["animation__mouseleave"]: {
          property: "scale",
          to: "2 2 2",
          dur: 300,
          startEvents: "mouseleave"
        }
      },
      planeOptions: {
        src: "#ground-texture",
        rotation: "-90 0 0",
        width: 30,
        height: 30,
        repeat: "10 10"
      },
      lightOptions: {
        type: "point",
        intensity: 1,
        position: "2 4 4"
      },
      soundOptions: {
        src: "/assets/sounds/backgroundnoise.wav",
        autoplay: true,
        position: "-3 1 -4",
        loop: true
      }
    };
  }
};
</script>

<style scoped lang="scss"></style>
