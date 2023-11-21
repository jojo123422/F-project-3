// const counters = document.querySelectorAll('.number');
// counters.forEach(counter => {
//   counter.innerText = '0';
  
//   const updateCounter = () => {
//     const target = +counter.getAttribute('data-target');
//     const c = +counter.innerText;

//     const increment = target / 200;

//     if(c < target) {
//       counter.innerText = `${Math.ceil(c + increment)}`;
//       setTimeout(updateCounter, 1);
//     } else {
//       counter.innerText = target;
//     }
//   };
  
//   updateCounter();
// });
// for the first info-box
document.addEventListener("DOMContentLoaded", function () {
    const numbers = document.querySelectorAll('.number1');

    numbers.forEach(number => {
        const updateCount = () => {
            const target = +number.getAttribute('data-target');
            const count = +number.innerText;

            const increment = target / 600;

            if (count < target) {
                number.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 5);
            } else {
                number.innerText = target;
            }
        };

        updateCount();
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const numbers = document.querySelectorAll('.number');

    numbers.forEach(number => {
        const updateCount = () => {
            const target = +number.getAttribute('data-target');
            const count = +number.innerText;

            const increment = target / 6000;

            if (count < target) {
                number.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 5);
            } else {
                number.innerText = target;
            }
        };

        updateCount();
    });
});
const data = [
    {
        "name": "المملكة السعوديةالعربية ",
        "approval_time": "تقريباً 24 شهراً",
        "patent_holders": "5,009 تقريباً",
        "foriegn": "4.8%",
        "famous_inventions": "KAUST",
        "id": "1"
    },
    {
        "name": "الولايات المتحدة",
        "approval_time": "تقريباً 24 شهراً",
        "patent_holders": "382,559",
        "foriegn": "58%",
        "famous_inventions": "اللمبة الكهربائة من تومس اديسون",
        "id": "2"
    },
    {
        "name": " الصين",
        "approval_time": "تقريباً 36 شهراً",
        "patent_holders": "4,212,265",
        "foriegn": "34%",
        "famous_inventions": "Digital Quick ODN من شركة هواوي",
        "id": "3"
    }
];

const searchBox = document.getElementById('search');
const resultsDiv = document.getElementById('results');

searchBox.addEventListener('input', function() {
    const searchTerm = searchBox.value.trim().toLowerCase();
    const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm));

    let html = '';
    for (const item of filteredData) {
        html += `
            <div class="suggest" data-id="${item.id}">${item.name}</div>
        `;
    }
    
    resultsDiv.innerHTML = html;

    document.querySelectorAll('.suggest').forEach(item => {
        item.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const selectedItem = data.find(d => d.id === id);
            displayFullInfo(selectedItem);
        });
    });
});

function displayFullInfo(item) {
    resultsDiv.innerHTML = `
        <div class="card">
            <h2>${item.name}</h2>
            <p>زمن الموافقة: ${item.approval_time}</p>
            <p>عدد حاملي البراءات: ${item.patent_holders}</p>
            <p>نسبة الأجانب: ${item.foriegn}</p>
            <p>اختراعات مشهورة: ${item.famous_inventions}</p>
        </div>
    `;
}





