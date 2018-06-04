# React 101

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
