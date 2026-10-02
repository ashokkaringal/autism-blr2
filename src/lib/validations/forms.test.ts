import { describe, expect, it } from "vitest";
import { admissionSchema, contactSchema } from "@/lib/validations/forms";

describe("form validation", () => {
  it("accepts a valid admission inquiry", () => {
    const result = admissionSchema.safeParse({
      parentName: "Asha Rao",
      email: "asha@example.com",
      phone: "+91 9876543210",
      childName: "Riya",
      childDob: "2019-01-01",
      program: "early-intervention",
      contactMethod: "email",
      message: "Please call us",
      website: "",
    });
    expect(result.success).toBe(true);
  });

  it("rejects invalid email on contact form", () => {
    const result = contactSchema.safeParse({
      name: "Visitor",
      email: "not-an-email",
      phone: "",
      subject: "Hello",
      message: "I have a question about programs.",
    });
    expect(result.success).toBe(false);
  });
});
