import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("critical paths", () => {
  test("home loads and navigation works", async ({ page }) => {
    await page.goto("/en");
    await expect(
      page.getByRole("heading", {
        name: /Empowering Neurodiverse Children in Bangalore/i,
      }),
    ).toBeVisible();
    await page.getByRole("navigation", { name: "Main" }).getByRole("link", { name: "About" }).click();
    await expect(page.getByRole("heading", { name: "About us" })).toBeVisible();
  });

  test("sensory-safe mode toggles", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto("/en");
    const toggle = page.getByTestId("sensory-safe-toggle");
    await expect(toggle).toBeVisible();
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-pressed", "true");
    await page.goto("/en/programs");
    await expect(page.getByRole("heading", { name: "Programs", exact: true, level: 1 })).toBeVisible();
    await expect(page.getByTestId("sensory-safe-toggle")).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  test("admission form validates and submits", async ({ page }) => {
    await page.goto("/en/admissions");
    const form = page.getByTestId("admission-form");
    await expect(form).toBeVisible();
    await form.locator("#parentName").fill("Test Parent");
    await form.locator("#email").fill("parent@example.com");
    await form.locator("#phone").fill("+91 98765 43210");
    await form.locator("#childName").fill("Test Child");
    await form.locator("#childDob").fill("2018-05-01");
    await form.getByRole("button", { name: /Start Admission Process/i }).click();
    await expect(page.getByTestId("form-success")).toBeVisible({ timeout: 15000 });
  });

  test("contact form submits", async ({ page }) => {
    await page.goto("/en/contact");
    const form = page.getByTestId("contact-form");
    await expect(form).toBeVisible();
    await form.locator("#name").fill("Visitor");
    await form.locator("#email").fill("visitor@example.com");
    await form.locator("#subject").fill("School visit");
    await form.locator("#message").fill("I would like to visit the school.");
    await form.getByRole("button", { name: /^Submit$/i }).click();
    await expect(page.getByTestId("form-success")).toBeVisible({ timeout: 15000 });
  });

  test("social story viewer advances", async ({ page }) => {
    await page.goto("/en/resources/social-stories/my-first-day");
    const viewer = page.getByTestId("social-story-viewer");
    await expect(viewer.getByText(/Step 1 of/i)).toBeVisible();
    await viewer.getByRole("button", { name: "Next" }).click();
    await expect(viewer.getByText(/Step 2 of/i)).toBeVisible();
  });

  test("visual schedule renders", async ({ page }) => {
    await page.goto("/en/resources/visual-schedules");
    const schedule = page.getByTestId("visual-schedule");
    await expect(schedule).toBeVisible();
    await expect(schedule.getByText("Arrival")).toBeVisible();
    await expect(schedule.getByText("Home")).toBeVisible();
  });

  test("home has no critical axe violations", async ({ page }) => {
    await page.goto("/en");
    await expect(
      page.getByRole("heading", {
        name: /Empowering Neurodiverse Children in Bangalore/i,
      }),
    ).toBeVisible();
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    const critical = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious",
    );
    expect(critical).toEqual([]);
  });
});
