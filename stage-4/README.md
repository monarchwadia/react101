# React 101 - Stage 4 - Updating the Timer

React is now automatically updating the timer 100 times a second.  (Also, we fixed our PropType errors).

This is sufficient to make the app work, but there is a better way to do it -- by isolating the update timer inside the Timer component. This way, only that component is updated 100 times a second, instead of React having to check the entire app for updates.

In the Workhaus Academy React course, we do a deep dive into component lifecycles in order to help you learn patterns that minimize bugs and maximize productivity -- but due to time constraints, we can't go into that stuff in the React 101 course.

In Stage 5, we will make the countdown timer a bit prettier than a millisecond countdown.
