<script setup lang="ts">
defineProps<{
  dailyTotal: string;
  remainingEarn: string;
  workedTime: string;
  remainingTime: string;
}>();
</script>

<template>
  <div class="stats-panel" aria-label="今日工资统计">
    <article class="stat-item">
      <span>今日预计</span>
      <strong>¥{{ dailyTotal }}</strong>
    </article>
    <article class="stat-item">
      <span>还可入账</span>
      <strong>¥{{ remainingEarn }}</strong>
    </article>
    <article class="stat-item">
      <span>已工作</span>
      <strong>{{ workedTime }}</strong>
    </article>
    <article class="stat-item">
      <span>剩余时间</span>
      <strong>{{ remainingTime }}</strong>
    </article>
  </div>
</template>

<style scoped>
.stats-panel {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  margin-top: 24px;
}

.stat-item {
  display: grid;
  min-width: 0;
  gap: 5px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--panel-soft);
  padding: 10px 9px;
  text-align: left;
}

.stat-item span {
  overflow: hidden;
  color: var(--muted);
  font-size: 11px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.stat-item strong {
  overflow: hidden;
  color: var(--text);
  font-family: "JetBrains Mono", "Cascadia Mono", Consolas, monospace;
  font-size: 13px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}
</style>
