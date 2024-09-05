document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById("user-input");
  const checkBtn = document.getElementById("check-btn");
  const clearBtn = document.getElementById("clear-btn");
  const resultSection = document.getElementById("results-div");
  
  clearBtn.addEventListener("click",()=>{
  resultSection.innerHTML = "";
  });
  
  
  const number_RegExe =
  /^(1\s?)? ?(\(\d{3}\) ?\d{3}-|\d{3} ?(\d{3} ?|-\d{3}-))\d{4}$/ 
  
  checkBtn.addEventListener("click", ()=>{
  
    const numberToCheck = input.value;
    if(numberToCheck != ""){
        let resultElement = document.createElement('p');
        if (number_RegExe.test(numberToCheck)) {
          resultElement.className = 'valid_Number';
          resultElement.innerHTML = `Valid US number:<br> ${numberToCheck}`;
        } else {
          resultElement.className = 'invalid_Number';
          resultElement.innerHTML = `Invalid US number:<br> ${numberToCheck}`;
        }
        resultSection.appendChild(resultElement);
  
        requestAnimationFrame(() => {
          resultElement.classList.add('fade-in');
        });
  
        input.value = "";
        resultSection.scrollTop = resultSection.scrollHeight;
  
    }else{
      alert("Please provide a phone number");
    }
      
  })
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      checkBtn.click();
    }
  });
  
  }
  )
  
  