# Dev 2 Test Script — Login and Team Page

Tester: Mirna Isso  
Date: 14 August 2026  
Deployed URL: https://garage-boilerplate-task1-frontend.vercel.app  
Browsers: Safari and Google Chrome

## Test 1 — Valid login and redirect

Steps:
1. Open the deployed website.
2. Enter a valid verified email and correct password.
3. Select Login.
4. Check the page shown after login.

Expected result:
The login succeeds and automatically redirects to the Team page.

## Test 2 — Team page content

Steps:
1. Sign in successfully.
2. Check the team name.
3. Check all four member cards.
4. Check each member’s name, role, avatar/photo area and blurb.

Expected result:
All required team information displays correctly without broken or overlapping content.

## Test 3 — Invalid login

Steps:
1. Enter a valid email with an incorrect password.
2. Select Login.

Expected result:
Login is rejected and an error message is displayed.

## Test 4 — Direct Team page access without login

Steps:
1. Sign out.
2. Open a private/incognito window.
3. Open https://garage-boilerplate-task1-frontend.vercel.app/team

Expected result:
The user is redirected to the sign-in page.

## Test 5 — Missing photo

Steps:
1. Open the Team page.
2. Check member cards where a photo is unavailable.

Expected result:
A placeholder avatar appears and the card layout does not break.

## Test 6 — Long blurb

Steps:
1. Open a Team page version containing a very long member blurb.
2. Check the member card and surrounding layout.

Expected result:
The long text remains readable and does not overlap or break the page.
