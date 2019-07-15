/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

/* Select 6 links within Header Element */
var duh = document.querySelectorAll('header a');

/* Select ID from "./index.html#intro" ( 1st link with Header) */
var duhLogo = document.querySelector(duh[0].hash).id;