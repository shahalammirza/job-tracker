// step 1 total cards count
let interviewList = [];
let rejectList = [];

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectCount = document.getElementById("reject-count");

const allCards = document.getElementById("all_cards");

function calculateCount(){
    totalCount.innerText = allCards.children.length;
    interviewCount.innerText = rejectList.length;
    rejectCount.innerText = rejectList.length;
}
calculateCount();