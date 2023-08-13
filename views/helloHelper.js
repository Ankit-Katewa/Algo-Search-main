const takeInput = require('../hello');
const llmform = document.getElementById("llm_form");
const llmQuestion = llmform.title;
llmform.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Hello Triggered!");
    // let llmFormInput = llmQuestion.value;
    // takeInput(llmFormInput);
    // console.log("Function called", llmFormInput);
});