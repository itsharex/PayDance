<script setup lang="ts">
import type { SalaryConfig, SalaryConfigIssue } from "../lib/salary";

const props = defineProps<{
  config: SalaryConfig;
  firstIssue: string;
  hasIssue: (field: SalaryConfigIssue["field"]) => boolean;
}>();

const emit = defineEmits<{
  "update:config": [config: SalaryConfig];
}>();

const updateConfig = <Key extends keyof SalaryConfig>(
  key: Key,
  value: SalaryConfig[Key],
) => {
  emit("update:config", { ...props.config, [key]: value });
};

const readNumber = (event: Event) => {
  const value = Number((event.target as HTMLInputElement).value);
  return Number.isFinite(value) ? value : 0;
};

const readText = (event: Event) => (event.target as HTMLInputElement).value;
const readChecked = (event: Event) => (event.target as HTMLInputElement).checked;
</script>

<template>
  <section class="settings-panel">
    <div v-if="firstIssue" class="settings-alert">
      {{ firstIssue }}
    </div>

    <div class="grid grid-cols-2 gap-3">
      <label class="field" :class="{ 'is-invalid': hasIssue('monthlySalary') }">
        <span>月薪</span>
        <input
          :value="config.monthlySalary"
          min="0"
          step="100"
          type="number"
          @input="updateConfig('monthlySalary', readNumber($event))"
        />
      </label>
      <label class="field" :class="{ 'is-invalid': hasIssue('workDaysPerMonth') }">
        <span>每月工作天数</span>
        <input
          :value="config.workDaysPerMonth"
          min="1"
          step="0.5"
          type="number"
          @input="updateConfig('workDaysPerMonth', readNumber($event))"
        />
      </label>
    </div>

    <div class="grid grid-cols-2 gap-3">
      <label class="field" :class="{ 'is-invalid': hasIssue('startTime') || hasIssue('workTime') }">
        <span>上班</span>
        <input
          :value="config.startTime"
          type="time"
          @input="updateConfig('startTime', readText($event))"
        />
      </label>
      <label class="field" :class="{ 'is-invalid': hasIssue('endTime') || hasIssue('workTime') }">
        <span>下班</span>
        <input
          :value="config.endTime"
          type="time"
          @input="updateConfig('endTime', readText($event))"
        />
      </label>
    </div>

    <label class="checkbox-row">
      <input
        :checked="config.enableLunchBreak"
        type="checkbox"
        @change="updateConfig('enableLunchBreak', readChecked($event))"
      />
      剔除午休时间
    </label>

    <div class="grid grid-cols-2 gap-3">
      <label class="field" :class="{ 'is-invalid': hasIssue('lunchStart') || hasIssue('workTime') }">
        <span>午休开始</span>
        <input
          :disabled="!config.enableLunchBreak"
          :value="config.lunchStart"
          type="time"
          @input="updateConfig('lunchStart', readText($event))"
        />
      </label>
      <label class="field" :class="{ 'is-invalid': hasIssue('lunchEnd') || hasIssue('workTime') }">
        <span>午休结束</span>
        <input
          :disabled="!config.enableLunchBreak"
          :value="config.lunchEnd"
          type="time"
          @input="updateConfig('lunchEnd', readText($event))"
        />
      </label>
    </div>
  </section>
</template>

<style scoped>
.settings-panel {
  display: grid;
  flex: 0 0 auto;
  gap: 12px;
  border-top: 1px solid var(--line);
  background: var(--panel-soft);
  padding: 20px;
}

.settings-alert {
  border: 1px solid rgb(245 158 11 / 0.26);
  border-radius: 10px;
  background: rgb(245 158 11 / 0.12);
  padding: 9px 11px;
  color: var(--text);
  font-size: 12px;
  font-weight: 600;
  text-align: left;
}

.field {
  display: grid;
  gap: 6px;
}

.field span {
  color: var(--muted);
  font-size: 12px;
  font-weight: 500;
}

.field input {
  height: 36px;
  min-width: 0;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--panel);
  padding: 0 10px;
  color: var(--text);
  outline: none;
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease,
    background-color 160ms ease;
}

.field input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgb(127 127 127 / 0.14);
}

.field.is-invalid input {
  border-color: rgb(245 158 11 / 0.68);
  box-shadow: 0 0 0 3px rgb(245 158 11 / 0.12);
}

.field input:disabled {
  background: var(--subtle);
  color: var(--muted);
}

.checkbox-row {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 14px;
  font-weight: 600;
}

.checkbox-row input {
  width: 16px;
  height: 16px;
  accent-color: var(--accent);
}
</style>
