'use strict';

let outputResult = document.getElementById('outputResult');

let outputProcess = document.getElementById('outputProcess');

let outputOperator = document.getElementsByClassName('output_operator');




let topBtnC = document.getElementsByClassName('top_btn_c');

let topBtnCe = document.getElementsByClassName('top_btn_ce');










let topBtnSym = Array.from(document.getElementsByClassName('top_btnr'));

let topBtnRes = Array.from(document.getElementById('topBtnResult'));

let topBtn = Array.from(document.getElementsByClassName('top_btn'));








topBtn.map(top_btn => {

    top_btn.addEventListener('click', (e) => {

        switch (e.target.innerText) {

            case 'C':

                outputResult.innerText = outputProcess.innerText = '';

                break;

            case 'CE':

                outputResult.innerText = '';

                break;






            default:

                outputResult.innerText += e.target.innerText;

        };

    });

});





topBtnSym.map(top_btnr => {

    top_btnr.addEventListener('click', (e) => {

        switch (e.target.innerText) {


            case '=':
                try {
                    outputProcess.innerText = outputResult.innerText;
                    outputResult.innerText = eval(outputResult.innerText);

                } catch {

                    outputProcess.innerText = 'WTF? Really?';
                }
                break;

            default:

                outputResult.innerText += e.target.innerText;



        };

    });

});