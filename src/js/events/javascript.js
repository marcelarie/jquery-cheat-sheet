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

function loadImage(url, result) {
    const img = new Image();
    img.src = url
    result.append(img)
    return img;
}

function createForm(result, lang, select) {
    const form = document.createElement('form')
    let inputText = ''
    if (select) {
        inputText = document.createElement('select')
        const optionA = document.createElement('option')
        const optionB = document.createElement('option')
        optionA.textContent = 'Option A'
        optionB.textContent = 'Option B'
        inputText.append(optionA, optionB)
    } else {
        inputText = document.createElement('input')
    }
    inputText.placeholder = 'Write something'
    const submit = document.createElement('input')
    submit.type = 'submit'
    form.id = `form-submit-${lang}`
    inputText.id = `form-input-text-${lang}`
    form.append(inputText, submit)
    result.innerHTML = ''
    result.append(form)
}

function createCheckBox(result, lang) {
    const check = document.createElement('input')
    const label = document.createElement('label')
    check.type = 'checkbox'
    check.id = `choose-me-${lang}`
    label.id = `label-me-${lang}`
    label.textContent = 'Choose me!'
    check.for = `choose-me-${lang}`
    result.innerHTML = ''
    result.append(check, label)
}

function createListItems(result, lang) {
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    li.textContent = 'Item list'
    ul.id = `ul-list-${lang}`
    ul.append(li)

    result.innerHTML = ''
    result.append(ul)
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
        let img = []
        div.addEventListener('click', () => {
            img = loadImage(
                'https://media4.giphy.com/media/LmNwrBhejkK9EFP504/200.gif', result)


            // start
            img.addEventListener('load', () => {
                div.textContent = 'image loaded'
            })
        })
    },
    imageLoadFail: function () {
        // preliminar code
        createElementOnResult('js', 'load image', result)
        const div = document.getElementById('result-test-div-js')
        let img = []
        div.addEventListener('click', () => {
            img = loadImage(
                'httpsm/media/LmNwrBhejkK9EFP504/200.gif', result)


            // start
            img.addEventListener('error', () => {
                img.src = 'https://image.flaticon.com/icons/png/128/2748/2748441.png'
                div.textContent = 'url broken'
            })
        })
    },
    formSubmit: function () {
        // preliminar code
        createForm(result, 'js')
        const form = document.getElementById('form-submit-js')
        const inputText = document.getElementById('form-input-text-js')

        // start 
        form.addEventListener('submit', e => {
            e.preventDefault();
            form.style.border = '5px solid red'
            inputText.value = ''
            inputText.placeholder = 'Form submited! :)'
        })
    },
    changeOnSelect: function () {
        // preliminar code
        createForm(result, 'js', 'select')
        const form = document.getElementById('form-submit-js')
        const inputText = document.getElementById('form-input-text-js')


        // start 
        form.addEventListener('submit', e => e.preventDefault())
        inputText.addEventListener('change', () => {
            form.style.border = '10px solid magenta'
            alert('change')
        })
    },
    mouseOver: function () {
        // preliminar code
        createElementOnResult('js', 'mouse over me', result);
        const div = document.getElementById('result-test-div-js')

        // start
        div.addEventListener('mouseover', function () {
            this.textContent = randomTexts[Math.floor(Math.random()
                * randomTexts.length)]
        })
    },
    checkbox: function () {
        // preliminar code
        createCheckBox(result, 'js')
        const check = document.getElementById('choose-me-js')
        const label = document.getElementById('label-me-js')

        // start
        check.addEventListener('change', function () {
            if (this.checked) {
                label.style.fontSize = '2em'
                label.textContent = 'Checked'
            } else {
                label.style.fontSize = '1.5em'
                label.textContent = 'Unchecked'
            }
        })
    },
    listItemClick: function () {
        // preliminar code
        createListItems(result, 'js');
        const ul = document.getElementById('ul-list-js')

        // start
        ul.addEventListener('click', function (e) {
            for (let li = 0; li < ul.children.length; li++) {
                if (e.target === ul.children[li]) {
                    e.target.style.fontSize = '20px'
                    e.target.style.fontWeight = 'bold'
                    e.target.style.color = 'red'
                }
            }
        })
    },
    createText: function () {
        // preliminar code
        createElementOnResult('js', 'create text', result);
        const div = document.getElementById('result-test-div-js')

        // start 
        div.addEventListener('click', function () {
            const h3 = document.createElement('h3')
            h3.textContent = 'thanks for giving me life!!'
            result.append(h3)
        })
    },
    removeText: function () {
        // preliminar code
        createElementOnResult('js', 'remove text', result);
        const div = document.getElementById('result-test-div-js')
        const h3 = document.createElement('h3')
        h3.textContent = 'thanks for giving me life!!'
        result.append(h3)

        // start
        div.addEventListener('click', function () {
            try {
                result.removeChild(h3)
            } catch (error) {
                alert('NO MORE TEXT')
            }
        })
    },

}

// Show result
function showResultJS(eventName) {
    jsEventsList[eventName]()
}



export {showJSCode, showResultJS, result, randomTexts, createElementOnResult, createInputOnResult, loadImage, createForm, createCheckBox, createListItems}
