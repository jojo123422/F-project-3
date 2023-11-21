const ideaData = JSON.parse(localStorage.getItem('ideaData'));

if (ideaData) {
    document.getElementById('idea_name').innerHTML = ideaData.name;
    document.getElementById('idea_description').innerHTML = ideaData.description;
    document.getElementById('idea_patentType').innerHTML = ideaData.patentTypes;
} else {
    document.getElementById('idea-details').innerHTML = 'No idea data available.';
}

let auctionValue = document.getElementById("box");
const button = document.getElementById('request');
const listAuction=document.getElementById("listAuction");


button.addEventListener("click", function(){
    if(auctionValue.value != 1000000000){
        const valuee = auctionValue.value;
        
 
        let newItem = document.createElement("li");
        newItem.id = "newvalue" ;
 
        
 
        newItem.innerHTML = `
        <div class="auction">
            <div class="icon"><i class="fa-solid fa-circle-user fa-2x" style="color: #2f5d8c;"></i></div>
            <div class="textBox">
                <div class="textContent">
                    <p class="h1">${valuee} ر.س.</p>
                       <span class="span">الأن</span>
               </div>
           <div>
        </div>
        `;
        listAuction.appendChild(newItem);
        Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "لقد تمت إضافة مزايدتك بنجاح! ترقبنا على بريدك الالكتروني لمعرفة من الرابح",
                        showConfirmButton: false,
                        timer: 6000,
            });
 
    }else{
        Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "الف مبروك! ربحت المزاد",
                    showConfirmButton: false,
                    timer: 6000,
                  });


    }
})


