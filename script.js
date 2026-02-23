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



// step 2 filtering all tab btn
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectFilterBtn = document.getElementById("reject-filter-btn");

function filterStyleBtn(id){
    allFilterBtn.classList.remove("bg-[#3B82F6]", "text-white");
    interviewFilterBtn.classList.remove("bg-[#3B82F6]", "text-white");
    rejectFilterBtn.classList.remove("bg-[#3B82F6]", "text-white");

    allFilterBtn.classList.add("bg-white", "border", "border-[#F1F2F4]", "text-[#64748B]");
    interviewFilterBtn.classList.add("bg-white", "border", "border-[#F1F2F4]", "text-[#64748B]");
    rejectFilterBtn.classList.add("bg-white", "border", "border-[#F1F2F4]", "text-[#64748B]");

    const selected = document.getElementById(id);
    selected.classList.add("bg-[#3B82F6]", "text-white")
    selected.classList.remove("bg-white");
}

// step 3 catch the data form the main container
const mainContainer = document.querySelector('main');
mainContainer.addEventListener('click', function(event){
    if(event.target.classList.contains('interview_btn')){
        const parenNode = event.target.parentNode.parentNode;
        const companyName = parenNode.querySelector('.company_name').innerText;
        const positionName = parenNode.querySelector('.position_name').innerText;
        const jobTypeSalary = parenNode.querySelector('.jobType_salary').innerText;
        const status = parenNode.querySelector('.status').innerText;
        const description = parenNode.querySelector('.description').innerText;

        parenNode.querySelector('.status').innerText = "interview";

        const cardInfo = {
            companyName,
            positionName,
            jobTypeSalary,
            status: "INTERVIEW",
            description
        }

        const interviewExistItem = interviewList.find(item => item.companyName == cardInfo.companyName);

        if(!interviewExistItem){
            interviewList.push(cardInfo);
        }
    }


})