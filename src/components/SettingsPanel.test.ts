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

  it("places copyright under the GitHub repository entry", () => {
    expect(settingsPanelSource).toContain("about-footer__repo-card");
    expect(settingsPanelSource).toContain("about-footer__copyright");
    expect(settingsPanelSource.indexOf("repository-button")).toBeLessThan(
      settingsPanelSource.indexOf("about-footer__copyright"),
    );
  });
});
