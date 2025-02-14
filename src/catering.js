// Grabbing Elements
let Guests = document.getElementById("Guests");
let FoodItem = document.getElementById("FoodItem");
let Quantity = document.getElementById("Quantity");
let Submit = document.getElementById("submit");
let budget = document.getElementById("budget");
let removeButton = document.getElementById("remove");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let budgetCalc1 = document.getElementById("budgetCalc1");
let budgetCalc2 = document.getElementById("budgetCalc2");
let pilauButton=document.getElementById("pilau");
let ugaliButton=document.getElementById("ugali");
let chapatiButton=document.getElementById("chapati");
let ButtonGenerateList=document.getElementById("GenerateList");
let dishList1=document.getElementById("dishList1");
let dishList2=document.getElementById("dishList2");
let dishList3=document.getElementById("dishList3");
let Guests2=document.getElementById("Guests2");
let costDishes=document.getElementById("costDishes");


//array of dishes

const Dishes=[
    {
   
    },
]






// Food prices
let RiceQuantity = 0.5; // in kg
let RicePrice = 60 * RiceQuantity;
let BeanQuantity = 100; // in grams
let MeatQuantity=100;// in grams
let MeatPrice=100;
let wheatQuantity=1;//kg
let wheatPrice=200;//ksh
let flourPricePerKg = 200; // Price per kg of flour
let oilPricePerMl = 0.5; // Price per ml of oil

let spices=10; //in grams
let spicesPrice=50;//price for 1gram

let BeanPrice = 288 * (BeanQuantity / 1000);

// Dish tracking variable
let selectedDish = '';





// Event listeners for each card's Select button

// Pilau
pilauButton.addEventListener("click", pilauLogic);
function pilauLogic() {
    resetButtonColors(); // Reset colors for all buttons
    pilauButton.classList.add("bg-red-900");
    selectedDish = "pilau";
}

// Chapati
chapatiButton.addEventListener("click", chapatiLogic);
function chapatiLogic() {
    resetButtonColors(); // Reset colors for all buttons
    chapatiButton.classList.add("bg-red-900");
    selectedDish = "chapati";
}

// Ugali
ugaliButton.addEventListener("click", ugaliLogic);
function ugaliLogic() {
    resetButtonColors(); // Reset colors for all buttons
    ugaliButton.classList.add("bg-red-900");
    selectedDish = "ugali";
}

// Function to reset button colors
function resetButtonColors() {
    pilauButton.classList.remove("bg-red-900");
    chapatiButton.classList.remove("bg-red-900");
    ugaliButton.classList.remove("bg-red-900");
}

// Calculating dishes logic and providing ingredients



ButtonGenerateList.addEventListener("click", generateList);
function generateList() {
    if (selectedDish === 'pilau') {
        dishList1.textContent = "Rice: " + Guests2.value * RiceQuantity + " kg";
        let totalMeat = MeatQuantity * Guests2.value;

        if (totalMeat >= 1000) {
            dishList2.textContent = `Meat: ${(totalMeat / 1000).toFixed(2)} kg`;
        } else {
            dishList2.textContent = `Meat: ${totalMeat} grams`;
        }
        dishList3.textContent = `Spices: ${spices * Guests2.value} g`;
        let totalCost = (RicePrice * Guests2.value) + (spicesPrice * Guests2.value) + (MeatPrice * Guests2.value);
        costDishes.textContent = "Total cost = " + totalCost + " ksh";

    } else if (selectedDish === 'chapati') {
        if (Guests2.value < 10) {
            alert("Number of guests needs to be more than 10 for Chapati.");
            return;
        }
        let flourNeeded = Guests2.value * 0.1; // 100 grams per chapati
        let oilNeeded = Guests2.value * 5; // 5 ml of oil per chapati
        let flourCost = flourNeeded * flourPricePerKg;
        let oilCost = oilNeeded * oilPricePerMl;

        dishList1.textContent = `Flour: ${flourNeeded.toFixed(2)} kg`;
        dishList2.textContent = `Oil: ${oilNeeded.toFixed(2)} ml`;
        let totalCost = flourCost + oilCost;
        costDishes.textContent = "Total cost = " + totalCost.toFixed(2) + " ksh";

    } else if (selectedDish === 'ugali') {
        let maizeFlourNeeded = Math.ceil(Guests2.value / 10); // Assume 1 kg serves 10 people
        let maizeFlourCost = maizeFlourNeeded * flourPricePerKg;

        dishList1.textContent = `Maize Flour: ${maizeFlourNeeded} kg`;
        costDishes.textContent = "Total cost = " + maizeFlourCost.toFixed(2) + " ksh";

    } else {
        alert("Please select a dish.");
    }
}








// Toggle Display of Choice 1
choice1.addEventListener("click", function() {
   // budgetCalc1.classList.toggle("hidden");
    budgetCalc2.classList.add("hidden"); // Ensure budgetCalc2 is hidden
   // choice2.classList.toggle("hidden");
});

// Toggle Display of Choice 2
choice2.addEventListener("click", function() {
    budgetCalc2.classList.toggle("hidden");
    budgetCalc1.classList.add("hidden"); // Ensure budgetCalc1 is hidden
    choice1.classList.toggle("hidden");
});

//create new budgetlist paragraphs
let newParagraph = document.createElement('p');
newParagraph.classList.add("text-gray-700");
budget.appendChild(newParagraph);


// Handle Calculation
Submit.addEventListener("click", function() {
  

    if (FoodItem.value.toLowerCase() === 'rice') {
        newParagraph.innerHTML += `The amount of rice required is ${RiceQuantity * Guests.value} Kg and the price = ${RicePrice * Guests.value} Ksh<br>`;
    }

    if (FoodItem.value.toLowerCase() === 'beans') {
        let quantity = Guests.value <= 10 ? BeanQuantity * Guests.value : (BeanQuantity / 100) * Guests.value;
        newParagraph.innerHTML += `The amount of beans required is ${quantity} ${Guests.value <= 10 ? 'g' : 'kg'} and the price = ${BeanPrice * Guests.value} Ksh<br>`;
    }
});

//delete budget list

removeButton.addEventListener('click',()=>{
    newParagraph.textContent='';
})



//AOU
AOS.init({
    once: false // This makes sure animations happen every time you scroll back up
  });
  