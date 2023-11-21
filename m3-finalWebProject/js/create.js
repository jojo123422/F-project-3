document.addEventListener("DOMContentLoaded", function() {
          const form = document.getElementById("idea-form");
          const patentCDiv = document.getElementById('patentcountries');
          const selectedCountriesDiv = document.getElementById('selectedCountries');
          const patentType = document.getElementById('patentType')
          let selectedCountries = [];
      
          const continentCountryMapping = {
              'أمريكا الشمالية': ['الولايات المتحدة', 'كندا', 'المكسيك'],
              'أوروبا': ['المملكة المتحدة', 'ألمانيا', 'فرنسا'],
              'آسيا': ['الصين', 'اليابان', 'كوريا الجنوبية'],
              'الشرق الأوسط': ['المملكة العربية السعودية', '', 'الإمارات العربية المتحدة'],
              'أوقيانوسيا': ['أستراليا', 'نيوزيلندا'],
              'أمريكا الجنوبية': ['البرازيل', 'الأرجنتين', 'تشيلي'],
              'إفريقيا': ['جنوب إفريقيا', 'مصر', 'نيجيريا']
          };
      
          function filterResults(term) {
            patentCDiv.innerHTML = ""; // Clear current displayed countries
    
            if (term === "") return;
            if (continentCountryMapping[term]) {
                continentCountryMapping[term].forEach(country => {
                    createCountryDiv(country, patentCDiv);
                });
            } else {
                for (let continent in continentCountryMapping) {
                    for (let country of continentCountryMapping[continent]) {
                        if (country.includes(term)) {
                            createCountryDiv(country, patentCDiv);
                        }
                    }
                }
            }
        }
      
          function createCountryDiv(country, container) {
              const countryDiv = document.createElement('div');
              countryDiv.textContent = country;
              countryDiv.className = "country";
              countryDiv.addEventListener('click', function() {
                  addCountryToSelection(country);
              });
              container.appendChild(countryDiv);
          }
      
          function addCountryToSelection(country) {
              if (!selectedCountries.includes(country)) { // عشان ما يعيد
                  selectedCountries.push(country);
                  createCountryDiv(country, selectedCountriesDiv);
              }
              filterResults(""); 
         
         
            }
          document.getElementById('countrySearch').addEventListener('input', function() {
            filterResults(this.value.trim());
        });
    
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            
            const data = {
                name: formData.get("name"),
                description: formData.get("description"),
                patentType: formData.get("patentType"),
                patentCountries: selectedCountries,
            };
      
              fetch("https://65082eef56db83a34d9be320.mockapi.io/IDEAS", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify(data)
              })
              .then(response => response.json())
              .then(data => {
                  console.log("Idea submitted successfully:", data);
              })
              .catch((error) => {
                  console.error("Error:", error);
              });
          });
      });
  