const planOptions = document.querySelectorAll(".plan-option");
const planCost = document.querySelector(".plan-cost h1");
const planDetails = document.querySelector(".plan-details h4");

planOptions.forEach((plan) => {
  plan.addEventListener("click", () => {
    // console.log(plan.textContent);
    const price = plan.getAttribute("data-price");
    // console.log(price);
    planCost.textContent = `₹${price}`;
    planDetails.textContent = `What's included on ${plan.textContent}`;
  });
});
