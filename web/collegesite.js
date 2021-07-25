let my_js_key = "";
eel.expose("set_key"); 
function set_key(key){
    my_js_key = key;
}



let control_div = document.getElementById("control-div");
const school_name = document.getElementById("university-name"); 
const school_location = document.getElementById("location"); 
const school_price = document.getElementById("tuition-price"); 
const price_header = document.getElementById("tuition-header"); 
const school_size = document.getElementById("school-size"); 
const school_sat = document.getElementById("sat-scores"); 
const school_url = document.getElementById("school-link"); 
const school_acceptance = document.getElementById("acceptance-rate"); 
const communication_major = document.getElementById("communications-major");
const computer_major = document.getElementById("computer-major");
const engineering_major = document.getElementById("engineering-major");
const english_major = document.getElementById("english-major");
const biology_major = document.getElementById("biology-major");
const math_major = document.getElementById("math-major");
const psychology_major = document.getElementById("psychology-major");
const physical_sciences_major = document.getElementById("physical-science-major");
const social_sciences_major = document.getElementById("social-science-major");
const arts_major = document.getElementById("arts-major");
const health_major = document.getElementById("health-major");
const business_major = document.getElementById("business-major");
const history_major = document.getElementById("history-major");

document.getElementById("schools-submit-button").onclick = async function() {
    control_div.className = "control-div-open"; 
    const school_input = document.getElementById("colleges-search").value.toLowerCase();
    const api_url = `https://api.data.gov/ed/collegescorecard/v1/schools?school.name=${school_input}&api_key=${my_js_key}`;
    const response = await fetch(api_url);
    const data = await response.json();
    school_acceptance.innerHTML = data.results[0].latest.admissions.admission_rate.overall;
    school_name.innerHTML = data.results[0].school.name; 
    school_location.innerHTML = data.results[0].school.city + ', ' + data.results[0].school.state; 
    school_url.innerHTML = data.results[0].school.school_url;
    school_url.href = data.results[0].school.school_url;
    if(data.results[0].latest.cost.avg_net_price.private === null) {
        price_header.innerHTML = 'Average Cost of Tuition (In-State Students Only):'
        school_price.innerHTML = '$' + data.results[0].latest.cost.avg_net_price.public;
    } else {
        price_header.innerHTML = 'Average Cost of Tuition:'
        school_price.innerHTML = '$' + data.results[0].latest.cost.avg_net_price.private;
    }
    school_size.innerHTML = data.results[0].latest.student.size;
    school_sat.innerHTML = data.results[0].latest.admissions.sat_scores.average.overall;
    communication_major.innerHTML = 'Communication and Journalism: ' + data.results[0].latest.academics.program_percentage.communication; 
    computer_major.innerHTML = 'Computer and Information Services: ' + data.results[0].latest.academics.program_percentage.computer; 
    engineering_major.innerHTML = 'Engineering: ' + data.results[0].latest.academics.program_percentage.engineering;
    english_major.innerHTML = 'English Language and Literature: ' + data.results[0].latest.academics.program_percentage.english;
    biology_major.innerHTML = 'Biology: ' + data.results[0].latest.academics.program_percentage.biological
    math_major.innerHTML = 'Mathematics and Statistics: ' + data.results[0].latest.academics.program_percentage.mathematics;
    psychology_major.innerHTML = 'Psychology: ' + data.results[0].latest.academics.program_percentage.psychology;
    physical_sciences_major.innerHTML = 'Physical Sciences: ' + data.results[0].latest.academics.program_percentage.physical_science;
    social_sciences_major.innerHTML = 'Social Sciences: ' + data.results[0].latest.academics.program_percentage.social_science;
    arts_major.innerHTML = 'Visual and Performing Arts: ' + data.results[0].latest.academics.program_percentage.visual_performing;
    health_major.innerHTML = 'Health: ' + data.results[0].latest.academics.program_percentage.health;
    business_major.innerHTML = 'Business, Management, and Marketing: ' + data.results[0].latest.academics.program_percentage.business_marketing;
    history_major.innerHTML = 'History: ' + data.results[0].latest.academics.program_percentage.history;
    
}

const isPublicOrPrivate = (data) => {
    if(data.results[0].latest.cost.avg_net_price.private === null) {

    }
}


 