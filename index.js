

let countNumber =  document.getElementById('counterr'); 
let prevEntries = document.getElementById('entries');

let count = 0 ;

function add(){
    count += 1;
    countNumber.innerText = count ;
    
}

function save() {
    let results = count + ' - ';
    prevEntries.textContent += results;
    countNumber.innerText = 0 ;
    count = 0;
}
