const form = document.querySelector("form");
const questionElement = form.title;
const questions = document.querySelectorAll(".question");
const titles = document.querySelectorAll(".title");
const urls = document.querySelectorAll(".url");
const quesBody = document.querySelectorAll(".body");
const loadingDiv = document.querySelector(".loading");
const results = document.querySelector(".results");

// llm model form 
// const llmform = document.getElementById("llm_form");
// const llmQuestion = llmform.title;
//   const takeInput = require('./hello.js')
// import takeInput from './hello.js';
//   console.log(questions);
//   console.log(titles);
//   console.log(urls);
//   console.log(quesBody);
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let question = questionElement.value;
    question = question.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    question = question.replace(/\s{2,}/g, " ");
    console.log(question);
    // question=question.replace(/[^\w\s\']|_/g, "");
    // question=question.replace(/\s+/g, " ");
    for (let i = 0; i < 5; i++) {
        titles[i].innerHTML = ``;
        urls[i].innerHTML = ``;
        quesBody[i].innerHTML = ``;
        results.innerHTML = ``;
    }
    loadingDiv.innerHTML = `Loading...`;
    //fetch
    try {
        const res = await fetch(`/search?question=${question}`, {
            method: "GET",
        });
        const data = await res.json();
        loadingDiv.innerHTML = ``;
        const cursor = "Link";
        let que_results = "";
        for (let i = 0; i < 10; i++) {
            // que_results+="<h4>"+data[i].title+"</h4>"+"<br>";
            que_results += `<a href="/problem?qid=${data[i].id}"><h3>${data[i].title}</h3></a><br>`;
        }
        results.innerHTML = `${que_results}`;
        // for (let i = 0; i < 5; i++) {
        //   titles[i].innerHTML = `<center><h3 id="colstrip">${data[i].title}</h3></center><br>`;
        //   urls[i].innerHTML = `<a href=${data[i].url}>${cursor}</a><br>`;
        //   let cur_state=data[i].statement;
        //   // quesBody[i].innerHTML=`<h5>${cur_state}</h5>`;
        //   quesBody[i].innerHTML=`<h4>Problem : </h4><p>${cur_state}</p><br>`;
        //   // urls[i].setAttribute('href', data[i].url);
        // }
    } catch (error) {
        alert(error);
    }
});

