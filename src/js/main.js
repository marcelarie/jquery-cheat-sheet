import {showJSCode, showResult} from './events/javascript.js'
import {showJQCode} from './events/jquery.js'


// Listen to submit on selector
function submitListener() {
    document.getElementById('selector-form').addEventListener('submit', e => {
        e.preventDefault();
        const selectedEvent = document.getElementById('jquery-vs-js').value
        showResult(selectedEvent);
        showJSCode(selectedEvent);
        showJQCode(selectedEvent);
    })
}

submitListener()

