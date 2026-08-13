# Requirements: Login Styling and Team Page (Sprint 1)

**Feature:** Bootstrap Restyling — styled login page leading into a team page
**Author:** Naziba Radia (PM / BA)
**Sprint:** Sprint 1
**Status:** Draft for UX and Dev

---

## 1. Overview

This sprint delivers one feature: a restyled login page that leads, after
sign-in, into a team page showing each member of Team A. The work is built on
the existing boilerplate. The login page is a **styling-only** change — no
changes to how authentication works.

---

## 2. Login page requirements

- Scope is **styling only**. Do not modify authentication logic, input
  validation, or session handling.
- Apply the approved visual design to the existing boilerplate login page.
- All existing behaviour must keep working unchanged: sign in, sign up,
  error messages, and redirects.
- After a successful login, the user is redirected to the team page.

## 3. Team page requirements

The team page is shown only to logged-in users (redirect from login).

**Displays:**
- The team name (Team A).
- Each team member, shown as a card, with the fields below.

**Member fields and display rules:**

| Field | Required | Display rule |
|-------|----------|--------------|
| Photo | Yes | Shown as an avatar. Use a default placeholder if no photo is provided. |
| Name | Yes | Shown as the card heading. |
| Role | Yes | Shown directly under the name. |
| Blurb | Yes | Short text, one to two lines, under the role. |

**Team members to display:**
- Naziba Radia — PM
- Hoang Vo — Developer
- Mirna Isso — Developer
- Jerome Mangalindan — UX Designer

## 4. Edge cases

- **Missing photo:** show a default placeholder avatar, do not break the layout.
- **Long name or blurb:** text wraps and does not overflow or break the card.
- **Empty field:** the card still renders cleanly if a field is missing.
- **Not logged in:** trying to reach the team page redirects to the login page.

## 5. Out of scope

- No changes to authentication, validation, or session logic.
- No new features beyond the styled login page and the team page.
- No backend or database changes beyond what the boilerplate already provides.

## 6. Acceptance criteria

- [ ] Login page restyled to the approved design, existing behaviour unchanged.
- [ ] Successful login redirects to the team page.
- [ ] Team page shows the team name and all four members with photo, name,
      role, and blurb.
- [ ] Missing photo shows a placeholder.
- [ ] Team page is only reachable when logged in.
- [ ] Requirements reviewed by PM and shared with UX before design starts.
