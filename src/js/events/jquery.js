import {randomTexts, createElementOnResult, createInputOnResult, loadImage, createForm, createCheckBox} from './javascript.js'
const result = document.getElementById('result-container-jq')

function showJQCode(eventName) {
    const textArea = document.getElementById('jq-code-textarea')
    textArea.value = jqEventsList[eventName]
}

const jqEventsList = {
    htmlLoad: function () {
        // preliminar code
        createElementOnResult('jq', 'DIV TESTING', result);

        // start
        $('document').ready(console.log('docu loaded on jquery'))
    },
    click: function () {
        // preliminar code
        createElementOnResult('jq', 'click on me', result);

        // start
        $('#result-test-div-jq').on('click', () => {
            $('#result-test-div-jq').text(randomTexts[Math.floor(Math.random()
                * randomTexts.length)])
        })
    },
    doubleClick: function () {
        // preliminar code
        createElementOnResult('jq', 'double click on me', result);

        // start
        $('#result-test-div-jq').on('dblclick', () => {
            $('#result-test-div-jq').text(randomTexts[Math.floor(Math.random()
                * randomTexts.length)])
        })
    },
    keyPress: function () {
        // preliminar code
        createElementOnResult('jq', 'press a key', result);

        // start
        $(document).keypress(() => {
            $('#result-test-div-jq').text(randomTexts[Math.floor(Math.random()
                * randomTexts.length)])
            $('#result-test-div-jq').css({backgroundColor: 'red'})
        })
    },
    moveCursor: function () {
        // preliminar code
        createElementOnResult('jq', 'move the cursor', result);

        // start
        $(document).mousemove(e => {
            $('#result-test-div-jq').text('Page X ' + e.pageX)
        })
    },
    changeValue: function () {
        // preliminar code
        createInputOnResult('jq', 'put text and press enter', result)

        // start 
        $('#result-test-input-jq').change(() => {
            $('#result-test-input-jq').css('padding', '+=5')
        })
    },
    imageLoad: function () {
        // preliminar code
        let img = []
        createElementOnResult('jq', 'load image', result)
        $('#result-test-div-jq').on('click', () => {
            img = loadImage('https://media4.giphy.com/media/LmNwrBhejkK9EFP504/200.gif', result)

            //start 
            $('img').on('load', () => {
                $('#result-test-div-jq').text('image loaded')
            })
        })
    },
    imageLoadFail: function () {
        // preliminar code
        let img = []
        createElementOnResult('jq', 'load image', result)
        $('#result-test-div-jq').on('click', () => {
            img = loadImage('httpsdia/LmNwrBhejkK9EFP504/200.gif', result)

            //start 
            $('img').attr('onerror', 'this.src="https://image.flaticon.com/icons/png/128/2748/2748441.png"').on('load', () => {
                $('#result-test-div-jq').text('url broken')
            })
        })
    },
    formSubmit: function () {
        // preliminar code
        createForm(result, 'jq')


        //start 
        $('#form-submit-jq').submit(e => {
            e.preventDefault();
            $('#form-submit-jq').css('border', '5px solid red')
            $('#form-input-text-jq').val('')
            $('#form-input-text-jq').attr('placeholder', 'Form submited! :)')
        })
    },
    changeOnSelect: function () {
        // preliminar code
        createForm(result, 'jq', 'select')


        //submit
        $('#form-submit-jq').submit(e => e.preventDefault())
        $('#form-input-text-jq').on('change', function () {
            $(this).css('border', '10px solid yellow')
            alert('change')
        })
    },
    mouseOver: function () {
        // preliminar code
        createElementOnResult('jq', 'mouse over me', result);


        //start
        $('#result-test-div-jq').on('mouseover', function () {
            $(this).text(randomTexts[Math.floor(Math.random()
                * randomTexts.length)])
        })
    },
    checkbox: function () {
        // preliminar code
        createCheckBox(result, 'jq')


        // start
        $('#choose-me-jq').on('change', function () {
            if ($(this).is(':checked')) {
                $('#label-me-jq').css('font-size', '2em')
                $('#label-me-jq').text('Checked')
            } else {
                $('#label-me-jq').css('font-size', '1.5em')
                $('#label-me-jq').text('Unchecked')
            }
        })
    },

}

function showResultJQ(eventName) {
    jqEventsList[eventName]()
}


export {showJQCode, showResultJQ}
