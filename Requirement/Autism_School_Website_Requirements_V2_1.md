# Autism School Website --- Implementation-Ready Requirements V2

**Document Type:** Product + Functional + Technical Requirements\
**Version:** 2.0\
**Status:** Implementation Ready --- Business/Content placeholders
require confirmation\
**Target:** Cursor AI development using Next.js/React/TypeScript\
**Primary Location:** Bangalore, India

## 1. Purpose

Build a calm, predictable, autism-friendly, accessible and
mobile-responsive website for an autism school/support center in
Bangalore.

The website shall provide:

-   Public information about the organization
-   Programs and therapy information
-   Admissions and inquiry workflows
-   Trainer/job recruitment
-   Parent-oriented resources
-   Sensory-safe website behavior
-   Visual schedules and social stories
-   Multilingual support
-   Future-ready parent and administrator portal capabilities
-   Controlled AI-assisted features

The original requirements emphasize predictable navigation, minimal
distraction, plain English, high contrast, Indian/Bangalore-focused
imagery and clear parent pathways.

## 2. Product Goals

### BR-001 --- Autism-Friendly Experience

The product shall provide a calm, predictable and sensory-conscious
experience.

### BR-002 --- Parent Clarity

Parents/guardians shall be able to quickly understand programs,
therapies, admissions, fees/inquiry process and contact options.

### BR-003 --- Accessibility

The public website shall target WCAG 2.1 AA.

### BR-004 --- India/Bangalore Context

Content, imagery, language options and contact workflows shall support
the Bangalore/Indian context.

### BR-005 --- Recruitment

The system shall provide a dedicated trainer hiring experience for
special educators, therapists, shadow teachers, ABA trainers and related
roles.

### BR-006 --- Future Expansion

The architecture shall allow later implementation of parent, therapist,
HR and administrator portals without requiring a complete frontend
rewrite.

## 3. Scope and Release Strategy

The product shall be delivered in clearly separated phases. Phase 1 is intentionally limited to a public launch website and shall not depend on portal, clinical-record, OCR or AI infrastructure.

### 3.1 Phase 1 — Launch / Public Website

**In scope:**

- Home
- About Us
- Programs
- Therapies
- Admissions with a simple inquiry form
- Contact
- Hiring Trainers
- Sensory-Safe Mode
- Core accessibility
- Responsive/mobile design
- SEO/local SEO foundation
- Privacy notice and consent controls
- Basic analytics/monitoring where approved

**Explicitly out of scope for Phase 1:**

- Parent portal
- Child progress tracking
- Therapy progress database
- AI therapy summaries
- AI chatbot beyond a tightly controlled FAQ option, if approved
- OCR of medical/admission documents
- Online medical-record/document storage
- AI appointment scheduling
- Virtual tour
- Full Kannada/Hindi translation
- Complex CMS/admin portal

### 3.2 Phase 2 — Content and Accessibility Expansion

- Gallery
- Blog/Resources
- Visual schedules
- Social stories
- Kannada
- Hindi
- Expanded content-management capability
- Additional accessibility refinements based on real-user feedback

### 3.3 Phase 3 — Portal and Advanced Features

- Parent portal
- Therapist/teacher portal
- HR/admin portal
- Child/therapy progress tracking
- Secure document management
- AI-assisted features
- OCR
- Controlled appointment assistance
- Virtual tour
- Advanced notifications

### 3.4 Scope-Governance Rule

A feature shall not be moved from a later phase into an earlier phase merely because it is technically easy to build. Any feature involving children's sensitive data, clinical/therapy information, AI-generated advice/summaries, medical-document storage or complex authentication shall require explicit scope, security, privacy and business approval.

## 4. Target Users and Roles

### ROLE-001 --- Public Visitor

Can:

-   Browse public pages
-   View programs
-   View therapies
-   Read resources
-   View gallery
-   Submit contact/inquiry forms
-   Start admission inquiry
-   Apply for a job

### ROLE-002 --- Parent/Guardian

Future portal role.

Can access only authorized information belonging to their account and
associated child/children.

Potential capabilities:

-   Child profile
-   Appointments
-   Documents
-   Progress reports
-   Goals
-   Parent training
-   Worksheets
-   Notifications

### ROLE-003 --- Therapist/Teacher

Future portal role.

Potential capabilities:

-   Assigned child records
-   Goals
-   Session notes
-   Progress updates
-   Reports
-   Assigned schedules

### ROLE-004 --- HR/Hiring Manager

Can manage job postings and trainer applications in the future HR
module.

### ROLE-005 --- Administrator

Can manage users, content, programs, applications, appointments,
resources and system configuration.

## 5. Information Architecture

``` text
/
├── about
├── programs
├── therapies
├── admissions
├── gallery
├── resources
│   ├── blog
│   ├── social-stories
│   └── visual-schedules
├── hiring
├── contact
├── login                 [Phase 2]
├── parent-portal         [Phase 2]
├── therapist-portal      [Phase 2]
├── hr                    [Phase 2]
└── admin                 [Phase 2]
```

## 6. Global UX Requirements

### UX-001 --- Predictable Layout

The header, navigation and footer shall remain consistent across public
pages.

### UX-002 --- Minimal Distraction

The website shall not use flashing content, unnecessary motion, autoplay
audio or intrusive popups.

### UX-003 --- Plain Language

Primary public content shall use short sentences, clear headings and
bullet-based information where appropriate.

### UX-004 --- Clear CTA

Buttons shall use descriptive labels such as:

-   Programs
-   Admissions
-   Therapies
-   Contact
-   Start Admission Process
-   Apply Now
-   Book Assessment

### UX-005 --- Responsive Design

The interface shall support desktop, tablet and mobile layouts.

### UX-006 --- Touch Targets

Interactive controls shall have sufficiently large touch targets and
adequate spacing.

## 7. Accessibility Requirements

### A11Y-001 — Technical Target
The public website shall target WCAG 2.1 AA. For the Bangalore/India context, the implementation shall also consider applicable Indian accessibility requirements and guidance, including the Rights of Persons with Disabilities (RPwD) framework and relevant Government of India web guidance. Legal applicability shall be confirmed with appropriate professional advice.

### A11Y-002 — Automated Accessibility
Every production page shall be checked with an automated accessibility tool such as axe-core and/or Lighthouse.

**Acceptance criteria:**

- Zero critical accessibility violations.
- No known blocker-level accessibility defects.
- Remaining non-critical findings shall be reviewed and tracked.

### A11Y-003 — Keyboard
All public functionality shall be usable with keyboard-only navigation.

**Acceptance criteria:**

- Header/navigation can be reached and operated with keyboard.
- Every form can be completed without a mouse.
- Focus order is logical.
- Focus is always visible.
- No keyboard trap exists.
- Modal/dialog focus is managed correctly.

### A11Y-004 — Screen Reader
At least one screen-reader workflow shall be manually validated before launch.

Target environments:

- NVDA on Windows
- VoiceOver on macOS/iOS

Critical public workflows to test:

- Navigation
- Admissions inquiry
- Contact form
- Hiring application
- Sensory-Safe Mode

### A11Y-005 — Semantic HTML
Pages shall use semantic headings, landmarks, lists, buttons, links and form controls.

### A11Y-006 — Images
Meaningful images shall have concise, context-appropriate alt text. Decorative images shall use an appropriate decorative treatment.

### A11Y-007 — Video
Any published therapy/educational video shall provide captions and, where appropriate, a transcript.

### A11Y-008 — Contrast
Normal text shall meet WCAG AA contrast requirements.

The design team shall test every production color combination rather than assuming that a palette is accessible.

In particular:

- Deep Teal `#1A5E63` on Sandalwood Beige shall be contrast-tested before use.
- Turmeric Yellow `#E8B400` shall not be assumed to meet 4.5:1 on beige/white. It should normally be used as an accent/decorative color or against a sufficiently dark background unless testing proves otherwise.

### A11Y-009 — Reduced Motion
The site shall automatically respect the user's `prefers-reduced-motion` preference.

### A11Y-010 — Sensory-Safe Mode
The user-facing Sensory-Safe Mode shall:

- Disable non-essential animations
- Disable autoplay media
- Reduce decorative visual complexity
- Increase text size where appropriate
- Increase spacing where appropriate
- Preserve required contrast
- Disable automatic carousel movement

### A11Y-011 — Sensory Mode Persistence
Sensory-Safe Mode shall persist across public pages and shall not generate JavaScript errors when toggled repeatedly.

If persistence across visits is implemented, the preference shall be stored using a privacy-conscious client-side mechanism.

### A11Y-012 — Text Resize
The public interface shall remain usable when text is enlarged.

### A11Y-013 — Skip Navigation
A skip-to-content mechanism shall be available to keyboard users.

### A11Y-014 — Accessibility Acceptance Gate
A Phase 1 release shall not be considered complete until:

1. Automated accessibility testing has been executed.
2. Keyboard workflows have passed.
3. Screen-reader smoke testing has passed.
4. Reduced-motion behavior has passed.
5. Sensory-Safe Mode has passed across supported public pages.
6. Critical accessibility defects are resolved.

## 8. Sensory-Safe Mode

### SSM-001

The site shall provide a visible Sensory-Safe Mode control.

When enabled, the site shall:

-   Disable non-essential animations
-   Disable autoplay media
-   Reduce decorative visual elements
-   Reduce visual complexity
-   Increase text size where appropriate
-   Increase spacing where appropriate
-   Preserve required contrast
-   Simplify backgrounds
-   Disable automatic carousel movement

### SSM-002

The preference shall persist during the user's session and may
optionally be persisted locally.

### SSM-003

Sensory-Safe Mode shall not remove essential information or
functionality.

## 9. Home Page Requirements

### HOME-001 --- Hero

Display:

**Empowering Neurodiverse Children in Bangalore**

Supporting message:

A calm, structured, and supportive learning environment for children
with Autism, ADHD, and developmental delays.

Primary navigation/CTA options:

-   Programs
-   Admissions
-   Therapies
-   Contact

### HOME-002 --- Welcome

The page shall communicate that the school provides:

-   Early intervention
-   Special education
-   Therapy services
-   Life-skills training
-   Structured and predictable support

### HOME-003 --- Highlights

Display:

-   Autism-friendly classrooms
-   Certified therapists
-   Individualized Education Plans (IEPs)
-   Speech, OT, ABA and sensory integration
-   Parent coaching/training
-   Safe and inclusive environment

### HOME-004 --- Featured Programs

Display:

-   Early Intervention (2--6 years)
-   Special Education (6--18 years)
-   Therapy Services
-   Life Skills & Vocational Training
-   Parent Coaching Workshops

### HOME-005 --- Why Choose Us

Display:

-   Calm, predictable environment
-   Indianized teaching materials
-   Evidence-based therapies
-   Parent-school partnership
-   Progress tracking and reviews

### HOME-006 --- Testimonials

Testimonials shall be short, simple and anonymized unless explicit
permission exists for identifying information.

## 10. About Us

### ABOUT-001

The page shall contain the founder story.

The current source content uses `[Your Aunt’s Name]`; the actual name
shall remain a content configuration item until confirmed.

### ABOUT-002

Display:

-   Mission
-   Vision
-   Approach
-   Team
-   Parent collaboration
-   Indian/Bangalore context

### ABOUT-003 --- Approach

Include:

-   Predictable routines
-   Visual learning
-   Sensory-friendly classrooms
-   Individualized plans
-   Family collaboration

### ABOUT-004 --- Team

Potential team categories:

-   Special educators
-   Speech therapists
-   Occupational therapists
-   ABA therapists
-   Shadow teachers
-   Parent coaches

Actual qualifications and certifications shall be confirmed before
publication.

## 11. Programs

### PROGRAM-001 --- Early Intervention

Target content:

-   Age: 2--6
-   Communication
-   Social skills
-   Sensory development
-   Pre-academic skills
-   Behavior/skill development

### PROGRAM-002 --- Special Education

Target content:

-   Age: 6--18
-   Academic readiness
-   Functional academics
-   Daily living skills
-   Social interaction
-   Emotional regulation

### PROGRAM-003 --- Therapy Programs

Include:

-   Speech Therapy
-   Occupational Therapy
-   ABA Therapy
-   Sensory Integration

### PROGRAM-004 --- Life Skills & Vocational Training

Potential content:

-   Cooking basics
-   Money handling
-   Grooming
-   Workplace behavior
-   Simple vocational tasks

### PROGRAM-005 --- Parent Coaching

Potential content:

-   Home-based strategies
-   Communication techniques
-   Behavior support
-   Sensory support

## 12. Therapy Page

### THER-001

The page shall explain the therapy philosophy using structured,
predictable and child-centered language.

### THER-002 --- Example Routine

Display a visual sequence:

``` text
Warm-up sensory activity
        ↓
Structured tasks
        ↓
Communication practice
        ↓
Movement break
        ↓
Review and reinforcement
```

### THER-003 --- Qualifications

Therapist qualification claims shall be based on verified organization
records before publication.

### THER-004 --- Progress

Potential progress features:

-   Monthly reports
-   IEP reviews
-   Parent meetings
-   Goal adjustments

### THER-005 --- Progress Stories

Before/after or progress stories shall use anonymized information unless
documented consent exists.

## 13. Admissions

### ADM-001 --- Eligibility

Current content identifies children aged 2--18 with possible support
needs including:

-   Autism
-   ADHD
-   Developmental delays
-   Learning difficulties
-   Sensory challenges

The organization shall confirm actual admission eligibility before
launch.

### ADM-002 --- Admission Workflow

``` text
Parent Inquiry
      ↓
School Visit
      ↓
Child Assessment
      ↓
IEP Planning
      ↓
Enrollment Confirmation
```

The future system shall support explicit application statuses.

Suggested statuses:

``` text
NEW
INQUIRY
ASSESSMENT_SCHEDULED
ASSESSMENT_COMPLETED
UNDER_REVIEW
IEP_PLANNING
OFFERED
ENROLLED
WAITLISTED
WITHDRAWN
```

### ADM-003 --- Required Documents

Potential documents:

-   Birth certificate
-   Medical reports
-   Previous school records
-   Parent ID proof

Actual requirements shall be confirmed before launch.

### ADM-004 --- Fees

The public site shall not display invented fee amounts.

It shall display the confirmed fee structure or state that fees are
shared during consultation.

### ADM-005 --- Admission Form

The form shall support:

-   Parent/guardian name
-   Email
-   Phone
-   Child name
-   Child date of birth
-   Program of interest
-   Preferred contact method
-   Message
-   Document uploads where required

### ADM-006 --- Form Validation

The system shall:

-   Validate required fields
-   Validate email format
-   Validate phone format
-   Validate file type/size
-   Display accessible validation messages
-   Prevent accidental duplicate submissions where practical
-   Display an accessible success state

### ADM-007 --- Notifications

A successful admission inquiry shall generate an appropriate
confirmation to the parent and notification to the admissions team,
subject to configured communication providers.

## 14. Gallery

### GAL-001

Gallery categories shall include:

-   Therapy rooms
-   Sensory gym
-   Classroom activities
-   Outdoor play
-   Parent workshops
-   Teacher/family interaction

### GAL-002

Images containing identifiable children shall only be published with
appropriate documented consent.

### GAL-003

Images shall be optimized for web performance.

## 15. Blog / Resources

### RES-001

The resources section shall support:

-   Understanding Autism
-   Sensory Needs
-   Communication Tips
-   Parenting Strategies
-   School Readiness
-   Bangalore Autism Support Resources

### RES-002

Content shall support categories, tags, search and readable article
layouts when the CMS is implemented.

## 16. Contact

### CONTACT-001

Display confirmed:

-   Address
-   Phone
-   WhatsApp
-   Email
-   Visiting hours

### CONTACT-002

The page shall provide a Bangalore map using the final confirmed
location.

### CONTACT-003

Contact information shall be maintained through a central
configuration/CMS source rather than duplicated throughout code.

## 17. Trainer Hiring

### HIRE-001 --- Purpose

Recruit:

-   Special Educators
-   ABA Therapists
-   Speech Therapists
-   Occupational Therapists
-   Shadow Teachers
-   Parent Coaches
-   Behavior Interventionists

### HIRE-002 --- Hero

Title:

**Join Our Mission --- Become a Trainer at Our Autism School**

### HIRE-003 --- Why Work With Us

Display:

-   Meaningful work
-   Supportive environment
-   Training provided
-   Growth opportunities

### HIRE-004 --- Qualifications

Potential requirements:

-   RCI certification/preference where applicable
-   Autism-specific training
-   Experience with neurodiverse children
-   Calm communication style

Actual qualification requirements shall be confirmed per job role.

### HIRE-005 --- Skills

Potential skills:

-   Patience
-   Structured teaching
-   Sensory-friendly communication
-   Documentation
-   Parent collaboration

### HIRE-006 --- Application Workflow

``` text
APPLICATION_SUBMITTED
        ↓
RESUME_REVIEW
        ↓
SHORTLISTED
        ↓
DEMO_SCHEDULED
        ↓
DEMO_COMPLETED
        ↓
INTERVIEW
        ↓
SELECTED / REJECTED
```

### HIRE-007 --- Application

The application shall support:

-   Candidate name
-   Contact information
-   Role
-   Education
-   Experience
-   Certifications
-   Resume upload
-   Availability
-   Additional information

### HIRE-008 --- HR Management

Phase 2 HR users shall be able to:

-   Create job postings
-   Edit job postings
-   Publish/unpublish jobs
-   Review candidates
-   Change candidate status
-   Record interview/demo information

## 18. Visual Schedules

### VS-001

The site shall support visual schedules using simple icons and text.

Example:

``` text
Arrival → Circle Time → Therapy → Snack → Play → Home
```

### VS-002

Schedules shall be understandable without relying only on color.

## 19. Social Stories

### SS-001

The initial social stories shall include:

-   My First Day at School
-   Meeting My Teacher
-   Therapy Time

### SS-002

A social story component should support:

-   Title
-   Illustration
-   Step-by-step content
-   Previous/Next
-   Progress indicator
-   Print-friendly layout
-   Sensory-safe presentation

## 20. Parent Training Portal --- Phase 2

### PTP-001

The portal shall support:

-   Video lessons
-   Worksheets
-   Progress reports
-   Parent learning content
-   Notifications/reminders

### PTP-002

Parent accounts shall only access authorized content and their
associated child records.

## 21. Multilingual Support

### I18N-001

The target languages are:

-   English
-   Kannada
-   Hindi

### I18N-002

The architecture shall support translation of:

-   Navigation
-   Page content
-   Forms
-   Validation messages
-   Buttons
-   Social stories
-   Parent portal content
-   Notifications where implemented

### I18N-003

Unicode-safe rendering shall be used throughout the application.

## 22. AI Features

AI features shall be treated as assistive features, not autonomous
clinical decision makers.

### AI-001 --- FAQ Assistant

The chatbot may answer approved parent FAQs using organization-approved
content.

### AI-002 --- Document OCR

OCR may extract information from admission documents.

Extracted information shall be treated as unverified until reviewed.

### AI-003 --- Appointment Assistance

AI may assist with appointment scheduling workflows subject to
configured business rules.

### AI-004 --- Progress Summary

AI may draft progress summaries from authorized structured information.

The workflow shall be:

``` text
Therapist Data
     ↓
AI Draft
     ↓
Therapist Review
     ↓
Edit / Approve
     ↓
Parent Report
```

AI-generated content shall not be published as a final therapy/clinical
report without appropriate human review.

### AI-005 --- Privacy

Sensitive child information shall not be sent to an AI provider unless
the selected architecture, agreements, configuration and applicable
privacy requirements explicitly permit it.

## 23. Security and Privacy

### SEC-001 --- HTTPS

All production traffic shall use HTTPS.

### SEC-002 --- Authentication

Authenticated portals shall use secure authentication.

### SEC-003 --- Authorization

Role-based access control shall be implemented for privileged and portal
functionality.

### SEC-004 --- Child Data Isolation

A parent shall only access records they are authorized to access.

### SEC-005 --- Private Documents

Medical reports, school records, resumes and other private documents
shall not be stored in publicly accessible URLs.

### SEC-006 --- File Upload Security

Uploaded files shall have:

-   Type validation
-   Size limits
-   Safe filenames
-   Secure storage
-   Malware scanning where supported
-   Access control

### SEC-007 --- Input Security

Server-side validation and sanitization shall be applied to all
user-controlled input.

### SEC-008 --- Audit Logging

Privileged changes to sensitive records shall be auditable in Phase 2.

### SEC-009 --- Secrets

API keys, credentials and private configuration shall never be committed
to source control.

### SEC-010 --- Least Privilege

Services and users shall receive only the permissions required for their
function.

## 24. Data Model --- Phase 2 Foundation

The initial domain model shall be designed around these entities:

``` text
User
Parent
Child
Therapist
Teacher
Program
Therapy
Appointment
Assessment
IEP
Goal
ProgressReport
AdmissionApplication
Document
Job
JobApplication
SocialStory
VisualSchedule
BlogPost
Resource
Notification
AuditLog
```

### DATA-001

Each entity shall have a stable unique identifier.

### DATA-002

Sensitive entities shall have appropriate ownership/authorization
relationships.

Example:

``` text
Parent
  └── Child
       ├── Program
       ├── Therapist
       ├── Assessment
       ├── IEP
       ├── Goal
       ├── Appointment
       └── ProgressReport
```

## 25. API Requirements --- Phase 2

The backend shall expose documented, authenticated endpoints as
required.

Illustrative endpoint groups:

``` text
POST   /api/admissions
GET    /api/admissions/:id
PATCH  /api/admissions/:id

POST   /api/appointments
GET    /api/appointments

POST   /api/trainer-applications
GET    /api/trainer-applications/:id

POST   /api/documents
GET    /api/documents/:id

GET    /api/programs
GET    /api/therapies

POST   /api/contact

POST   /api/auth/login
POST   /api/auth/logout
```

The final API contract shall define request schema, response schema,
validation, authorization, error codes and audit behavior.

## 26. Recommended Technology Stack

The source requirements identify React/Next.js. The implementation
target is:

### Frontend

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS
-   Accessible component primitives
-   React Hook Form
-   Zod

### UI

-   Reusable design-system components
-   Semantic HTML
-   Accessible dialogs, menus and forms
-   Lucide or equivalent accessible icon system

### Backend

Recommended architecture:

-   Next.js server/API capabilities or Node.js services
-   PostgreSQL
-   Prisma or equivalent ORM

### Testing

-   Playwright
-   Vitest
-   Testing Library
-   axe-core / axe-playwright
-   Visual regression testing

Final technology choices shall be confirmed before implementation.

## 27. Design System

### DESIGN-001 --- Color Palette

Source design palette:

  Token              Value       Purpose
  ------------------ ----------- -----------------
  Mint Green         `#A8D5BA`   Calm/supportive
  Turmeric Yellow    `#E8B400`   Warm accent
  Sandalwood Beige   `#F5E8D0`   Soft background
  Deep Teal          `#1A5E63`   Contrast/accent

The implementation shall validate actual text/background combinations
against WCAG AA. A visually appealing color does not override
accessibility requirements.

### DESIGN-002 --- Typography

Suggested:

-   Headings: Merriweather or Playfair Display
-   Body: Lato or Nunito

The final font selection shall prioritize readability, loading
performance and language support.

### DESIGN-003 --- Imagery

Use authentic India-focused imagery where appropriate, including:

-   Indian children
-   Indian families
-   Indian teachers/therapists
-   Bangalore/Indian environments
-   Therapy rooms
-   Sensory spaces
-   Classrooms

Real children shall not be identifiable in published imagery without
appropriate consent.

## 28. Image Content Requirements

The following source image concepts shall be supported:

1.  Occupational therapy room
2.  Sensory integration room
3.  Fine motor activity
4.  Speech therapy
5.  AAC device training
6.  Autism classroom
7.  Group activity
8.  Visual schedule board
9.  Art activity
10. Outdoor play
11. Sensory play
12. Teacher helping child
13. Parent meeting
14. Home-based training demonstration
15. Daily living skills
16. Cooking basics
17. Vocational tasks
18. Child assessment
19. School reception
20. Social story book
21. Sensory-Safe Mode interface

These descriptions are source content for image generation/design. They
shall not automatically be treated as accessibility alt text; alt text
should describe the actual final image concisely and functionally.

## 29. Performance Requirements

### PERF-001

The public site shall be optimized for fast loading.

### PERF-002

Target Core Web Vitals:

-   LCP ≤ 2.5 seconds
-   INP ≤ 200 ms
-   CLS ≤ 0.1

Targets shall be validated on representative mobile and desktop
environments.

### PERF-003

Images shall use responsive sizing and modern formats where supported.

### PERF-004

Below-the-fold images shall use appropriate lazy loading.

### PERF-005

Animations and third-party scripts shall be minimized.

## 29A. Internationalization and Hosting Decisions

### I18N-001 — Phase
English is the Phase 1 launch language.

Kannada and Hindi are Phase 2.

### I18N-002 — Framework
The application shall choose an i18n architecture during initial project setup rather than retrofit localization later.

Recommended approach:

- `next-intl` or an equivalent Next.js-compatible i18n solution
- Translation keys rather than hard-coded repeated strings
- Locale-aware routing where appropriate
- Unicode-safe fonts and rendering

### I18N-003
Adding a new language shall not require rewriting page components.

### HOST-001 — Hosting
Vercel is an acceptable hosting option for the Next.js public site, subject to final cost, security, privacy and operational review.

### HOST-002 — Mobile Performance
Performance shall be tested on representative slow/mobile network conditions, not only high-speed desktop connections.

### HOST-003 — Environments
At minimum, the project should support:

```text
Development
Preview/Test
Production
```

## 30. SEO Requirements

### SEO-001

Every indexable page shall have a unique title.

### SEO-002

Every indexable page shall have an appropriate meta description.

### SEO-003

The application shall support:

-   Canonical URLs
-   Sitemap
-   Robots directives
-   Open Graph metadata
-   Structured data where appropriate
-   Semantic HTML
-   Clean URLs
-   Internal links
-   Breadcrumbs where useful

### SEO-004 --- Local SEO

The site shall clearly represent the confirmed Bangalore location and
organization information.

## 31. Content Management

Phase 2 shall support management of:

-   Programs
-   Therapies
-   Blog posts
-   Resources
-   Social stories
-   Visual schedules
-   Gallery
-   Job postings
-   Contact information

Content changes should not require source-code deployment where a
CMS/admin interface is provided.

## 31A. Local SEO and Discovery

### LSEO-001
The website shall be optimized for relevant Bangalore/local search intent, including phrases such as:

- Autism school in Bangalore
- Autism therapy in Bangalore
- Special education Bangalore
- Early intervention Bangalore

Actual keyword strategy shall be based on approved business positioning rather than keyword stuffing.

### LSEO-002
The organization should maintain an accurate Google Business Profile with:

- Correct name
- Address
- Phone
- Hours
- Website
- Photos
- Services

### LSEO-003
The website's organization/contact information shall be consistent with the organization's approved local listings.

## 31B. Hiring Operations

### HIRE-009 — Application Destination
Before launch, the organization shall decide whether applications are delivered to:

- A controlled email inbox
- A secure database
- An approved recruiting workflow

A public Google Sheet shall not be used for resumes or sensitive applicant information.

### HIRE-010 — Resume Limits
The organization shall define:

- Accepted file types
- Maximum file size
- Retention period
- Who can access applications

### HIRE-011 — Spam Protection
The hiring form shall include appropriate anti-spam protection without creating unnecessary accessibility barriers.

## 31C. WhatsApp

### WA-001
The WhatsApp CTA shall use a click-to-chat mechanism with the organization's approved number.

### WA-002
The website shall not imply 24/7 support unless such support exists.

### WA-003
The organization shall define who monitors WhatsApp and during which hours.

### WA-004
The public WhatsApp workflow shall discourage users from sending sensitive medical/child records through ordinary chat.

## 31D. Content Maintenance

### CMS-001
The organization shall identify who is responsible for updating:

- Contact information
- Programs
- Fees
- Visiting hours
- Hiring roles
- Blog/resources
- Gallery
- Social stories

### CMS-002
Phase 1 may use controlled Markdown/static content if the organization does not need non-technical editing.

### CMS-003
A headless CMS may be introduced in Phase 2 when content editors need self-service updates.

## 32. Notifications

Future notification channels may include:

-   Email
-   WhatsApp
-   In-app notifications

Notifications shall not expose sensitive child information
unnecessarily.

## 33. Error Handling

### ERR-001

User-facing errors shall be written in simple, actionable language.

### ERR-002

Technical details such as stack traces shall never be exposed to public
users.

### ERR-003

Form failures shall preserve safe user-entered data where practical.

### ERR-004

The application shall provide a usable fallback when optional
third-party services fail.

## 34. Analytics and Observability

The final implementation may include privacy-conscious analytics and
application monitoring.

Track business events such as:

-   Admission inquiry submitted
-   Contact form submitted
-   Trainer application submitted
-   Program viewed
-   Therapy viewed
-   CTA selected

Do not collect unnecessary sensitive child information in analytics
systems.

## 35. Testing Requirements

### TEST-001 --- Unit Tests

Test:

-   Form validation
-   Utility functions
-   Business rules
-   Data transformations

### TEST-002 --- Component Tests

Test:

-   Buttons
-   Forms
-   Cards
-   Navigation
-   Dialogs
-   Sensory-Safe Mode
-   Visual schedule
-   Social stories

### TEST-003 --- Playwright E2E

Automate:

-   Navigation
-   Admissions
-   Contact
-   Trainer application
-   Responsive layouts
-   Sensory-Safe Mode
-   Social stories
-   Authentication in Phase 2
-   Parent workflows in Phase 2

### TEST-004 --- Accessibility

Automate:

-   axe checks
-   keyboard navigation
-   focus behavior
-   accessible names
-   form error handling
-   reduced-motion behavior

### TEST-005 --- Visual Regression

Capture baseline screenshots for key pages and compare against approved
baselines.

### TEST-006 --- API

Test:

-   Positive scenarios
-   Negative scenarios
-   Validation
-   Authentication
-   Authorization
-   Error handling

### TEST-007 --- Security

Test:

-   Unauthorized access
-   Role escalation
-   File upload restrictions
-   Input injection
-   Rate limiting
-   Sensitive data exposure

### TEST-008 --- Cross Browser

Target:

-   Chrome
-   Edge
-   Firefox
-   Safari

### TEST-009 --- Responsive

Validate:

-   Mobile
-   Tablet
-   Desktop

## 36. Selector Strategy for Playwright

Automation shall prefer resilient selectors in this order:

``` text
1. Accessible role/name
2. Label
3. Semantic text where stable
4. data-testid for complex/stable automation hooks
5. Stable semantic attributes
6. CSS selectors only when necessary
```

Avoid brittle selectors based on generated CSS class names or DOM
position.

## 37. Traceability Matrix

The implementation shall maintain traceability:

  -----------------------------------------------------------------------------------------------------------
  Requirement    UI                       API                           Data                   Test
  -------------- ------------------------ ----------------------------- ---------------------- --------------
  ADM-005        AdmissionForm            `/api/admissions`             AdmissionApplication   ADM-E2E-001
  Admission Form                                                                               

  HIRE-007 Job   TrainerApplicationForm   `/api/trainer-applications`   JobApplication         HIRE-E2E-001
  Application                                                                                  

  SSM-001        SensorySafeToggle        N/A                           Local preference       SSM-E2E-001
  Sensory Mode                                                                                 

  VS-001 Visual  VisualSchedule           CMS/API Phase 2               VisualSchedule         VS-E2E-001
  Schedule                                                                                     

  SS-001 Social  SocialStoryViewer        CMS/API Phase 2               SocialStory            SS-E2E-001
  Stories                                                                                      

  A11Y-002       Global UI                N/A                           N/A                    A11Y-E2E-001
  Keyboard                                                                                     

  SEO-001 Page   Page Metadata            N/A                           Content                SEO-AUTO-001
  Titles                                                                                       
  -----------------------------------------------------------------------------------------------------------

The matrix shall be expanded as requirements and implementation
components are created.

## 38. Acceptance Criteria

A feature shall not be considered complete until:

1.  Functional behavior is implemented.
2.  Validation is implemented.
3.  Error and success states are implemented.
4.  Responsive behavior is verified.
5.  Accessibility requirements are verified.
6.  Automated tests exist for critical behavior.
7.  No critical security issue remains open.
8.  Content placeholders are resolved or explicitly marked.
9.  Traceability is updated.
10. The feature is reviewed in the appropriate browser/device
    environments.

## 39. Definition of Done

A requirement is DONE when:

``` text
Requirement Defined
      ↓
UI Implemented
      ↓
API Implemented (if applicable)
      ↓
Database Implemented (if applicable)
      ↓
Validation Implemented
      ↓
Accessibility Verified
      ↓
Automated Tests Passed
      ↓
Visual Review Passed
      ↓
Security Review Passed
      ↓
Traceability Updated
```

## 40. Content Items Requiring Business Confirmation

Before production launch, confirm:

-   Organization/school name
-   Full Bangalore address
-   Phone number
-   WhatsApp number
-   Email
-   Visiting hours
-   Founder name
-   Actual programs
-   Actual age ranges
-   Actual admission eligibility
-   Actual therapist qualifications
-   Actual certifications
-   Fee structure
-   Accepted documents
-   Job roles
-   Job qualifications
-   Privacy/consent wording
-   Testimonials
-   Real photographs and image permissions
-   Actual therapy/service claims

## 40A. Content Governance and Claim Verification

### CONTENT-001 — Verified Claims Only
The public website shall not publish unverified claims about:

- Therapist certification
- RCI registration
- Evidence-based status
- Clinical outcomes
- Therapy effectiveness
- Student outcomes
- "Leading" or "best" status
- Partnerships or affiliations
- Government recognition

### CONTENT-002 — Service Language
The organization shall use terminology that accurately reflects its actual services and philosophy.

Potentially stigmatizing or overly behavior-focused wording such as "behavior modification" or "behavior shaping" should not be used automatically. Where accurate, preferred language may include:

- Skill building
- Positive support
- Communication development
- Functional skills
- Social learning
- Strengths-based support

Final terminology shall be approved by the organization.

### CONTENT-003 — Autism Terminology
The organization shall select and consistently use its preferred respectful terminology, such as "autistic children" and/or "children with autism", based on its communication policy.

### CONTENT-004 — Progress Stories
Progress/before-and-after stories require documented permission before publication. Anonymization alone shall not be treated as a substitute for an approved consent process.

### CONTENT-005 — Parent Testimonials
Testimonials shall be authentic and approved for publication. No fabricated or AI-generated testimonials shall be used.

### CONTENT-006 — Founder Story
The founder name, biography and story shall be confirmed before publication. A real founder photograph and authentic story should be prioritized over generic stock imagery where the organization is comfortable publishing them.

### CONTENT-007 — Organization Details
The following shall be confirmed before launch:

- Organization name
- Founder name
- Founder story
- Address
- Phone
- WhatsApp
- Email
- Visiting hours
- Student capacity, if published
- Class/program timings, if published
- Program availability
- Actual therapist qualifications
- RCI registration information, if applicable
- Fees or fee-contact wording
- Admission criteria

### CONTENT-008 — No "Indianized" Live-Site Language
"Indianized" shall be treated as an internal design/content-generation instruction, not public-facing website terminology.

The live site should use terms such as:

- India-focused
- Bangalore-based
- Local families
- Indian context

where relevant.

## 40B. Imagery and Consent

### IMG-001 — Real School Imagery
For launch, authentic photographs of the actual school, rooms, staff and activities are preferred over generic AI-generated photographs.

### IMG-002 — Child Image Consent
Identifiable children shall not appear in published photographs without appropriate documented consent.

### IMG-003 — AI Images
AI-generated child imagery may be used during design/development as placeholders. If used on the production site, it shall not be presented in a way that implies the depicted children are actual students.

### IMG-004 — Illustrations
Illustrations may be used for social stories, visual schedules and educational concepts where real photography is unnecessary.

### IMG-005 — UI Mockups
The Visual Schedule and Sensory-Safe Mode image concepts are UI/interface examples, not photographic alt-text requirements.

### IMG-006 — Alt Text
Alt text shall describe the actual final image and its purpose. The source image-generation prompts shall not be copied verbatim as alt text.

## 41. Source Content That Must Not Be Invented

The implementation team shall not invent:

-   Certifications
-   Medical/clinical claims
-   Therapist credentials
-   Fees
-   Admission eligibility
-   Testimonials
-   Addresses
-   Contact information
-   Government/registration status
-   Outcomes or guaranteed results

Placeholders shall remain visible during development until the business
owner provides approved values.

## 42. Prioritized Product Backlog

### P0 — Phase 1 Launch

- [ ] Project foundation
- [ ] Design system
- [ ] Global navigation/footer
- [ ] Home
- [ ] About
- [ ] Programs
- [ ] Therapies
- [ ] Admissions inquiry
- [ ] Contact
- [ ] Hiring Trainers
- [ ] Sensory-Safe Mode
- [ ] Accessibility foundation
- [ ] Privacy policy/consent
- [ ] Security baseline
- [ ] Local SEO
- [ ] Responsive/mobile optimization
- [ ] Playwright critical-path tests

### P1 — Phase 2

- [ ] Gallery
- [ ] Blog/Resources
- [ ] Visual Schedules
- [ ] Social Stories
- [ ] Kannada
- [ ] Hindi
- [ ] Content management improvements

### P2 — Phase 3

- [ ] Parent Portal
- [ ] Therapist/Teacher Portal
- [ ] HR/Admin Portal
- [ ] Child progress tracking
- [ ] Secure document management
- [ ] AI FAQ assistant
- [ ] OCR
- [ ] AI-assisted summaries
- [ ] Appointment assistance
- [ ] Virtual Tour
- [ ] Advanced notifications

### P3 — Reconsider / Business Case Required

- [ ] Any feature requiring storage of medical records
- [ ] Any autonomous AI therapy/clinical feature
- [ ] Any feature requiring complex clinical workflow
- [ ] Any feature whose privacy/security cost is disproportionate to its business value

## 43. Cursor AI Implementation Rules

Cursor shall follow these rules during implementation:

1.  Do not create duplicate page-specific components when a reusable
    component is appropriate.
2.  Use TypeScript throughout.
3.  Use semantic HTML.
4.  Do not bypass accessibility requirements to achieve visual effects.
5.  Do not add unnecessary animations.
6.  Do not invent business data.
7.  Keep business rules separate from presentation components.
8.  Keep validation schemas reusable.
9.  Keep API/data-access logic separate from UI components.
10. Add automated tests for every critical user workflow.
11. Use stable test selectors.
12. Do not expose secrets in client-side code.
13. Do not expose private child/parent documents publicly.
14. Preserve Sensory-Safe Mode behavior across applicable pages.
15. Keep the design calm, predictable and visually consistent.

## 44. Recommended Implementation Order

``` text
Phase 1
  ↓
Project foundation
  ↓
Design system
  ↓
Global layout/navigation
  ↓
Accessibility foundation
  ↓
Home
  ↓
About
  ↓
Programs
  ↓
Therapies
  ↓
Admissions
  ↓
Gallery
  ↓
Resources
  ↓
Contact
  ↓
Hiring
  ↓
Sensory-Safe Mode
  ↓
Visual Schedules
  ↓
Social Stories
  ↓
SEO + Performance
  ↓
Automated Testing

Phase 2
  ↓
Authentication
  ↓
Parent Portal
  ↓
Therapist Portal
  ↓
HR Portal
  ↓
Admin Portal
  ↓
Database/API
  ↓
Documents
  ↓
Appointments
  ↓
Progress Reports

Phase 3
  ↓
Multilingual expansion
  ↓
Virtual Tour
  ↓
WhatsApp
  ↓
AI FAQ
  ↓
OCR
  ↓
AI-assisted summaries
```

## 44A. Phase 1 Release Gate

Phase 1 shall not be released until:

### Product
- [ ] P0 backlog complete
- [ ] All business placeholders resolved or intentionally excluded
- [ ] No Phase 2/3 dependency blocks core flows

### Privacy
- [ ] Privacy policy published
- [ ] Consent wording approved
- [ ] Data retention rules approved
- [ ] Medical/child document upload disabled for Phase 1
- [ ] Contact/hiring data destination approved

### Accessibility
- [ ] Automated accessibility checks completed
- [ ] Keyboard-only testing passed
- [ ] NVDA or VoiceOver smoke test passed
- [ ] Reduced-motion behavior passed
- [ ] Sensory-Safe Mode passed across all Phase 1 pages
- [ ] Production color combinations contrast-tested

### Content
- [ ] Founder details approved
- [ ] Contact details approved
- [ ] Program/service claims verified
- [ ] Therapist qualification claims verified
- [ ] Testimonials approved
- [ ] Photo/illustration rights and consent verified

### Operations
- [ ] WhatsApp owner/hours defined
- [ ] Hiring application destination defined
- [ ] Resume retention defined
- [ ] Website maintenance owner identified
- [ ] Google Business Profile plan completed

## 45. Final Product Principle

The finished product shall feel:

-   Calm
-   Predictable
-   Safe
-   Accessible
-   Simple
-   Indian/Bangalore-focused
-   Parent-friendly
-   Professional
-   Modern without unnecessary visual complexity

The implementation should prioritize **clarity and usability over
decorative effects**.

------------------------------------------------------------------------

# Appendix A --- Original Image Concepts

The implementation may use the following approved source concepts for
image-generation/design prompts:

1.  Calm occupational therapy room with therapy equipment and Indian
    context.
2.  Sensory integration room with soft sensory materials.
3.  Fine-motor activity table with beads, threading tools, blocks and
    pegboards.
4.  Speech therapy session using picture cards.
5.  AAC device training using a tablet.
6.  Structured classroom with visual schedule.
7.  Small-group matching-card activity.
8.  Visual schedule board: Arrival, Circle Time, Therapy, Snack, Play,
    Home.
9.  Art activity.
10. Outdoor play.
11. Sensory play using safe sensory-bin materials.
12. Teacher helping child with writing.
13. Parent-teacher progress meeting.
14. Home-based training demonstration.
15. Daily living skill activity.
16. Supervised cooking basics.
17. Vocational sorting/packing activity.
18. Play-based child assessment.
19. School reception.
20. Social story book.
21. Sensory-Safe Mode interface.

# Appendix B --- Initial Component Inventory

``` text
AppShell
Header
Navigation
Footer
AccessibilityControls
SensorySafeToggle
LanguageSelector
HeroSection
CTAButton
ProgramCard
TherapyCard
TeamCard
TestimonialCard
GalleryGrid
GalleryLightbox
AdmissionForm
TrainerApplicationForm
ContactForm
FileUpload
FormField
FormError
SuccessMessage
VisualSchedule
SocialStoryViewer
BlogCard
BlogArticle
WhatsAppCTA
MapEmbed
VideoPlayer
AccessibleDialog
Cookie/PrivacyNotice (if required)
```

# Appendix C --- Initial Route Inventory

``` text
/
 /about
 /programs
 /therapies
 /admissions
 /gallery
 /resources
 /resources/blog
 /resources/social-stories
 /resources/visual-schedules
 /hiring
 /contact

Phase 2:
 /login
 /parent
 /parent/child
 /parent/appointments
 /parent/progress
 /parent/documents
 /therapist
 /hr
 /admin
```

# Appendix D --- Requirement ID Convention

``` text
BR-xxx      Business
UX-xxx      User Experience
A11Y-xxx    Accessibility
SSM-xxx     Sensory-Safe Mode
HOME-xxx    Home
ABOUT-xxx   About
PROGRAM-xxx Programs
THER-xxx    Therapies
ADM-xxx     Admissions
GAL-xxx     Gallery
RES-xxx     Resources
CONTACT-xxx Contact
HIRE-xxx    Hiring
VS-xxx      Visual Schedule
SS-xxx      Social Stories
PTP-xxx     Parent Training Portal
I18N-xxx    Internationalization
AI-xxx      Artificial Intelligence
SEC-xxx     Security
DATA-xxx    Data
API-xxx     API
PERF-xxx    Performance
SEO-xxx     SEO
TEST-xxx    Testing
ERR-xxx     Error Handling
```

# Appendix E --- Implementation Note

This V2 converts the supplied product/design requirements into an
implementation-oriented specification. It deliberately does **not**
invent organization-specific facts that were placeholders in the source.
Those values should be supplied by the organization before production
content is finalized.
