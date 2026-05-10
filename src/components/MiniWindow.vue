<script setup lang="ts">
import RollingAmount from "./RollingAmount.vue";

defineProps<{
  amount: string;
}>();

defineEmits<{
  restore: [];
  dragStart: [event: PointerEvent];
}>();
</script>

<template>
  <div
    class="mini-window"
    title="双击恢复完整窗口"
    @pointerdown="$emit('dragStart', $event)"
    @dblclick="$emit('restore')"
  >
    <RollingAmount :value="amount" variant="mini" />
  </div>
</template>

<style scoped>
.mini-window {
  display: grid;
  width: 100%;
  height: 100%;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: var(--panel);
  box-shadow: var(--shadow);
  color: var(--text);
  backdrop-filter: blur(30px);
}

.mini-window :deep(.rolling-amount) {
  overflow: hidden;
  max-width: calc(100vw - 28px);
}
</style>
