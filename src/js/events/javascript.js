const result = document.getElementById('result-container-js')
const randomTexts = ['random', 'text', 'windows sucks', 'linux rocks']

//Show JS code
function showJSCode(eventName) {
    const textArea = document.getElementById('js-code-textarea')
    textArea.value = jsEventsList[eventName]
}

function createElementOnResult(lang, text, result) {
    const div = document.createElement('div');
    div.classList.add('result-test-div', 'no-select')
    div.id = `result-test-div-${lang}`
    div.textContent = text
    result.innerHTML = ''
    result.append(div)
}

function createInputOnResult(lang, placeholder, result) {
    const input = document.createElement('input')
    input.classList.add('result-test-input', `result-test-input-${lang}`)
    input.id = `result-test-input-${lang}`
    input.placeholder = placeholder
    result.innerHTML = ''
    result.append(input)
}

function loadImage(url) {
    const img = document.createElement('img')
    img.src = url
    img.name = 'img-name'
    result.append(img)
}

const jsEventsList = {
    htmlLoad: function () {
        // preliminar code
        createElementOnResult('js', 'DIV TESTING', result);

        // start 
        document.onload = console.log('docu loaded on javascript');
    },
    click: function () {
        // preliminar code
        createElementOnResult('js', 'click on me', result);
        const div = document.getElementById('result-test-div-js')

        // start
        div.addEventListener('click', () => {
            div.textContent = randomTexts[Math.floor(Math.random()
                * randomTexts.length)]
        })
    },
    doubleClick: function () {
        // preliminar code
        createElementOnResult('js', 'double click on me', result);
        const div = document.getElementById('result-test-div-js')

        // start
        div.addEventListener('dblclick', () => {
            div.textContent = randomTexts[Math.floor(Math.random()
                * randomTexts.length)]
        })
    },
    keyPress: function () {
        // preliminar code
        createElementOnResult('js', 'press a key', result);
        const div = document.getElementById('result-test-div-js')

        // start
        document.addEventListener('keypress', () => {
            div.textContent = randomTexts[Math.floor(Math.random()
                * randomTexts.length)]
            div.style.backgroundColor = 'red'
        })
    },
    moveCursor: function () {
        // preliminar code
        createElementOnResult('js', 'move the cursor', result);
        const div = document.getElementById('result-test-div-js')

        // start
        document.addEventListener('mousemove', e => {
            div.innerText = 'Page Y ' + e.pageY
        })
    },
    changeValue: function () {
        // preliminar code
        createInputOnResult('js', 'put text here', result)
        const input = document.getElementById('result-test-input-js')

        // start 
        input.addEventListener('input', () => {
            console.log(input.classList.toggle('big-input'))
        })
    },
    imageLoad: function () {
        // preliminar code
        createElementOnResult('js', 'load image', result)
        const div = document.getElementById('result-test-div-js')
        div.addEventListener('click', loadImage('https://preview.redd.it/l4ksbp3ttpa61.jpg?width=640&crop=smart&auto=webp&s=40cd316bf41cae8a3b9b9577b4a803bcf70e3761'))

        //start
    },


}

// Show result
function showResultJS(eventName) {
    jsEventsList[eventName]()
}



export {showJSCode, showResultJS, result, randomTexts, createElementOnResult, createInputOnResult}
