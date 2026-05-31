// SPDX-FileCopyrightText: 2026 Mr.Baoboer // SPDX-License-Identifier: AGPL-3.0-only // //
Additional terms: see /legal/ADDITIONAL_TERMS.md

<script setup lang="ts">
import { useI18n } from "../../composables/useI18n";

const { locale, setLocale } = useI18n();

const toggle = () => {
  setLocale(locale.value === "zh-CN" ? "en" : "zh-CN");
};
</script>

<template>
  <button
    class="lang-switcher"
    :aria-label="locale === 'zh-CN' ? 'Switch to English' : '切换到中文'"
    :title="locale === 'zh-CN' ? 'English' : '中文'"
    type="button"
    @click="toggle"
  >
    {{ locale === "zh-CN" ? "EN" : "中" }}
  </button>
</template>

<style scoped>
.lang-switcher {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 28px;
  border: 1px solid var(--line, rgba(255 255 255 / 12%));
  border-radius: 6px;
  background: transparent;
  color: var(--text-muted, #94a3b8);
  font-family: var(--font-dashboard, inherit);
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition:
    border-color 160ms ease,
    color 160ms ease,
    background-color 160ms ease;
  flex-shrink: 0;
}

.lang-switcher:hover {
  border-color: var(--income-accent-ring, #f59e0b);
  color: #f1f5f9;
}
</style>
