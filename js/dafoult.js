let outputResult = document.getElementsByClassName('outputResult');

let outputProcess = document.getElementsByClassName('output_process');

let outputOperator = document.getElementsByClassName('output_operator');




let topBtnC = document.getElementsByClassName('top_btn_c');

let topBtnCe = document.getElementsByClassName('top_btn_ce');










let topBtnPercentage = document.getElementsByClassName('top_btn_percent');

let topBtnSlash = document.getElementsByClassName('top_btn_slash');

let topBtnUmn = document.getElementsByClassName('top_btn_umn');

let topBtnMin = document.getElementsByClassName('top_btn_min');

let topBtnPlus = document.getElementsByClassName('top_btn_plus');

let topBtnCom = document.getElementsByClassName('top_btn_com');

let topBtnResult = document.getElementsByClassName('top_btn_result');

let topBtn = Array.from(document.getElementsByClassName('top_btn'));








topBtn.map( top_btn => {

    top_btn.addEventListener('click', (e) => {

        switch(e.target.innerText){

            default:

                outputResult.innerText += e.target.innerText;
        };

    });

});