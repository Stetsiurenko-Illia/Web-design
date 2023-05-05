<template>
  <div v-if="show" class="confirm-close">
    <p>{{ message }}</p>
    <button @click="handleConfirm">Confirm</button>
    <button @click="handleCancel">Cancel</button>
  </div>
</template>

<script>
import { useEventListener } from "@vueuse/core";

export default {
  name: "ConfirmClose",
  props: {
    message: {
      type: String,
      default: "Are you sure you want to leave?"
    }
  },
  data() {
    return {
      show: false
    };
  },
  mounted() {
    useEventListener("beforeunload", this.handleBeforeUnload);
  },
  methods: {
    handleBeforeUnload(event) {
      event.preventDefault();
      this.show = true;
      event.returnValue = this.message;
    },
    handleConfirm() {
      window.removeEventListener("beforeunload", this.handleBeforeUnload);
      this.show = false;
    },
    handleCancel() {
      this.show = false;
    }
  }
};
</script>

<style scoped>
.confirm-close {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 1rem;
  text-align: center;
  z-index: 9999;
}
</style>
