# Task 7 — Edge-Case Test Report

**Tester:** Mirna Isso
**Role:** Dev 2
**Date:** 15 August 2026
**Deployed URL:** https://garage-boilerplate-task1-frontend.vercel.app

## Testing environments

* Google Chrome on desktop
* Safari on mobile

## Test results

### 1. Invalid login

**Result: PASS**

* Empty email and password fields displayed validation messages.
* An invalid email format was rejected.
* An incorrect email or password displayed “Invalid email or password.”

### 2. Direct team-page access without login

**Result: PASS**

* Opened the `/team` page in a private/incognito browser without signing in.
* The application redirected to the sign-in page.

### 3. Missing-photo fallback

**Result: PASS**

* The placeholder image displayed when a member photo was unavailable.
* The team-page layout remained usable and did not break.

### 4. Long-blurb test

**Result: PASS**

* Tested a temporary long blurb on desktop Chrome and mobile Safari.
* The text remained inside the member card.
* The card expanded correctly without overlapping the next card.
* The page remained scrollable and usable.

### 5. Member photos and responsive layout

**Result: PASS**

* The real member photos displayed correctly.
* On mobile, the team cards stacked vertically.
* No overlapping content or broken layout was found.

## Bugs and observations

No blocking bugs were found. The temporary long test blurb should be changed back to the normal team-member blurb before final submission.

## Overall result

All Task 7 edge-case tests passed. The feature is ready for PM review.
