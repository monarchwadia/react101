# React 101

## Stage 6b - Dropdown

Here's where we see React's true usefulness. React lets us isolate state from components, thereby allowing us to modify both in isolation from one another.

There's a lot going on in this stage. Walk through `App.js`, `components/CountdownClock.js` and `components/DateDropdown.js`. Try to understand how the application works.


## Stage 6a - State

What if we wanted to support multiple timers, and not just one for Christmas? And what if we wanted to switch between timers using a dropdown?

In this stage, we'll teach our code to change the target date based on a simple code change. This will lead into the next stage, where we'll apply the same change using a dropdown, in real time.

Look at `App.js` now. What do you see? What has changed? Where is the date being stored now, and how is it being retrieved before being passed into CountdownClock?

## Stage 5 - Prettier countdown timer

Make sure to `npm install` at this step, since we just installed the `moment` and `moment-countdown` libraries.

This is a rather simple change, and mostly unrelated to React -- see `components/CountdownClock.js` for details.


## Stage 4 - Updating the Timer

React is now automatically updating the timer 100 times a second.  (Also, we fixed our PropType errors).

This is sufficient to make the app work, but there is a better way to do it -- by isolating the update timer inside the Timer component. This way, only that component is updated 100 times a second, instead of React having to check the entire app for updates.

In the Workhaus Academy React course, we do a deep dive into component lifecycles in order to help you learn patterns that minimize bugs and maximize productivity -- but due to time constraints, we can't go into that stuff in the React 101 course.

In Stage 5, we will make the countdown timer a bit prettier than a millisecond countdown.

## Stage 3 - Passing Parameters

One of React's strengths is the ability to parcel and reuse the same code in multiple places. In this stage, we're going to pass "props" to CountdownClock so we can configure the date we're counting down to.

What does 'CountdownClock''s `render()` method do now? How are we passing properties into CountdownClock?

If you wanted to render a second clock that counted down to New Year 2019, how would you do so?

The next step makes the clock update automatically, like a real countdown timer should.

## Stage 2 - Our first component

We have now added a simple message indicating how much time is left until some date in the future. This element is contained in `components/CountdownClock.js`.

Spend some time looking at `CountdownClock`'s code, especially the comments that have been included in `components/CountdownClock.js` and in `App.js`.

## Stage 1 - Hello, World and Cleanup

Currently, the project is mostly empty. A simple `h1` and `p` tag are the only elements present on this single page app.

The entrypoint of the project is `src/index.js`. `create-react-app` bundles and inserts a `script` tag inside `public/index.html` during the build step, so you don't have to worry about manually linking to your script.

In Stage 2, we will add a new component: `CountdownClock`.
