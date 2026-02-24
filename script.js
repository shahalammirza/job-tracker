// step 1 total cards count
let interviewList = [];
let rejectList = [];
let currentStatus = 'all';

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectCount = document.getElementById("reject-count");

const allCards = document.getElementById("all_cards");

// step 5
const totJobCount = document.querySelector('.job_count');

function calculateCount(){
    totalCount.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectList.length;

    // step 5 all jobs count for all tabs
    const allCards_length = allCards.children.length;
    if (currentStatus == 'all' || currentStatus == 'all-filter-btn'){
        totJobCount.innerHTML = `${allCards_length} jobs`;
    }
    else if(currentStatus == 'interview-filter-btn'){
        totJobCount.innerHTML = `${interviewList.length} of ${allCards_length} jobs`
    }
    else if(currentStatus == 'reject-filter-btn'){
        totJobCount.innerHTML = `${rejectList.length} of ${allCards_length} jobs`
    }
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
    currentStatus = id;
    selected.classList.add("bg-[#3B82F6]", "text-white")
    selected.classList.remove("bg-white");

    if(id === 'interview-filter-btn'){
        allCards.classList.add('hidden');
        filteredAllCards.classList.remove('hidden');
        renderingInterview();
    }else if(id == 'all-filter-btn'){
        allCards.classList.remove('hidden');
        filteredAllCards.classList.add('hidden');
    }else if(id === 'reject-filter-btn'){
        allCards.classList.add('hidden');
        filteredAllCards.classList.remove('hidden');
        renderingReject();
    }

    calculateCount();
}

console.log(interviewList)
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

        rejectList = rejectList.filter(item => item.companyName != cardInfo.companyName);
        if(currentStatus === 'reject-filter-btn'){
            renderingReject();
        }
        calculateCount();
    }
    else if(event.target.classList.contains('reject_btn')){
        const parenNode = event.target.parentNode.parentNode;
        const companyName = parenNode.querySelector('.company_name').innerText;
        const positionName = parenNode.querySelector('.position_name').innerText;
        const jobTypeSalary = parenNode.querySelector('.jobType_salary').innerText;
        const status = parenNode.querySelector('.status').innerText;
        const description = parenNode.querySelector('.description').innerText;

        parenNode.querySelector('.status').innerText = "REJECTED";

        const cardInfo = {
            companyName,
            positionName,
            jobTypeSalary,
            status: "REJECTED",
            description
        }

        const rejectExistItem = rejectList.find(item => item.companyName == cardInfo.companyName);

        if(!rejectExistItem){
            rejectList.push(cardInfo);
        }

        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName);
        if(currentStatus === 'interview-filter-btn'){
           renderingInterview();
        }
        calculateCount();
    }


})

// step 4 rendering interview list array information by index ways
const filteredAllCards = document.getElementById('filter_all_cards');

// interview rendering
function renderingInterview(){
    filteredAllCards.innerHTML = '';

    for(let interview of interviewList ){

        const div = document.createElement('div');
        div.className = 'card_wrap bg-white p-[24px] border border-[#F1F2F4] rounded-[8px] mt-[16px] flex justify-between';

        div.innerHTML = `
            <!-- card-left -->
            <div class="card_left">
                <!-- step1 -->
                <p class="company_name text-[18px] text-[#002C5C] font-semibold">${interview.companyName}</p>
                <!-- step2 -->
                <p class="position_name text-[16px] text-[#64748B]">${interview.positionName}</p>
                <!-- step3 -->
                <p class="jobType_salary text-[14px] text-[#64748B] mt-[20px]">${interview.jobTypeSalary}</p>
                <!-- step4 -->
                <p class="status font-medium text-[14px] text-[#323B49] uppercase px-[12px] py-[8px] bg-[#EEF4FF] inline-block mt-[20px]">${interview.status}</p>
                <!-- step5 -->
                <p class="description text-[14px] text-[#323B49] mt-[8px]">${interview.description}</p>
                <!-- step6 -->
                <div class="card_btn flex gap-[8px] mt-[20px]">
                    <button class="interview_btn text-[14px] font-bold uppercase px-[12px] py-[8px] rounded-[4px] border border-[#10B981] text-[#10B981] cursor-pointer">interview</button>
                    <button class="reject_btn text-[14px] font-bold uppercase px-[12px] py-[8px] rounded-[4px] border border-[#EF4444] text-[#EF4444] cursor-pointer">Rejected</button>
                </div>
            </div>

            <!-- card right -->
            <div class="card_right">
                <button class="delete_btn h-[32px] w-[32px] border border-[#F1F2F4] rounded-full flex justify-center items-center cursor-pointer"><img src="img/del.png" alt=""></button>
            </div>
        `
        filteredAllCards.appendChild(div);
    }

}

// reject rendering
function renderingReject(){
    filteredAllCards.innerHTML = '';

    for(let reject of rejectList ){

        const div = document.createElement('div');
        div.className = 'card_wrap bg-white p-[24px] border border-[#F1F2F4] rounded-[8px] mt-[16px] flex justify-between';

        div.innerHTML = `
            <!-- card-left -->
            <div class="card_left">
                <!-- step1 -->
                <p class="company_name text-[18px] text-[#002C5C] font-semibold">${reject.companyName}</p>
                <!-- step2 -->
                <p class="position_name text-[16px] text-[#64748B]">${reject.positionName}</p>
                <!-- step3 -->
                <p class="jobType_salary text-[14px] text-[#64748B] mt-[20px]">${reject.jobTypeSalary}</p>
                <!-- step4 -->
                <p class="status font-medium text-[14px] text-[#323B49] uppercase px-[12px] py-[8px] bg-[#EEF4FF] inline-block mt-[20px]">${reject.status}</p>
                <!-- step5 -->
                <p class="description text-[14px] text-[#323B49] mt-[8px]">${reject.description}</p>
                <!-- step6 -->
                <div class="card_btn flex gap-[8px] mt-[20px]">
                    <button class="interview_btn text-[14px] font-bold uppercase px-[12px] py-[8px] rounded-[4px] border border-[#10B981] text-[#10B981] cursor-pointer">interview</button>
                    <button class="reject_btn text-[14px] font-bold uppercase px-[12px] py-[8px] rounded-[4px] border border-[#EF4444] text-[#EF4444] cursor-pointer">Rejected</button>
                </div>
            </div>

            <!-- card right -->
            <div class="card_right">
                <button class="delete_btn h-[32px] w-[32px] border border-[#F1F2F4] rounded-full flex justify-center items-center cursor-pointer"><img src="img/del.png" alt=""></button>
            </div>
        `
        filteredAllCards.appendChild(div);
    }

}