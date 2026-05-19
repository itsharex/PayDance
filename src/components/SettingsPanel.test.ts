import { describe, expect, it } from "vitest";
import settingsPanelSource from "./SettingsPanel.vue?raw";

describe("settings panel", () => {
  it("shows the about version as a plain number", () => {
    const versionLine = settingsPanelSource
      .split("\n")
      .find((line) => line.includes("{{ appVersion }}"));
    const prefixedVersionTemplate = ["v", "{{ appVersion }}"].join("");

    expect(versionLine).toBeDefined();
    expect(versionLine).toContain("{{ appVersion }}");
    expect(versionLine).not.toContain(prefixedVersionTemplate);
  });

  it("organizes settings into four clear groups", () => {
    ["薪资", "作息", "显示", "关于"].forEach((title) => {
      expect(settingsPanelSource).toContain(`data-settings-group="${title}"`);
    });
  });

  it("keeps display settings limited to theme and amount animation", () => {
    expect(settingsPanelSource).toContain("themeMode");
    expect(settingsPanelSource).toContain("update:themeMode");
    expect(settingsPanelSource).toContain("amountMode");
    expect(settingsPanelSource).not.toContain("miniMode");
    expect(settingsPanelSource).not.toContain("startInMiniMode");
  });

  it("shows only the salary inputs required by the selected salary mode", () => {
    expect(settingsPanelSource).toContain(
      'v-if="config.salaryType === \'monthly\'"',
    );
    expect(settingsPanelSource).toContain(
      'v-if="config.salaryType === \'daily\'"',
    );
    expect(settingsPanelSource).toContain(
      'v-if="config.salaryType === \'hourly\'"',
    );

    const monthlySectionStart = settingsPanelSource.indexOf(
      "hasIssue('monthlySalary')",
    );
    const workDaysSectionStart = settingsPanelSource.indexOf(
      "hasIssue('workDaysPerMonth')",
    );

    expect(monthlySectionStart).toBeGreaterThan(-1);
    expect(workDaysSectionStart).toBeGreaterThan(monthlySectionStart);
  });

  it("uses a lighter rest-break layout inside work schedule settings", () => {
    expect(settingsPanelSource).not.toContain("上下班时间");
    expect(settingsPanelSource).not.toContain("午休剔除");
    expect(settingsPanelSource).toContain("休息扣除");
    expect(settingsPanelSource).toContain("break-row");
  });

  it("places copyright under the GitHub repository entry", () => {
    expect(settingsPanelSource).toContain("about-footer__repo-card");
    expect(settingsPanelSource).toContain("about-footer__copyright");
    expect(settingsPanelSource).toContain("about-footer__copyright--centered");
    expect(settingsPanelSource.indexOf("repository-button")).toBeLessThan(
      settingsPanelSource.indexOf("about-footer__copyright"),
    );
  });
});
