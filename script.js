// Placeholder variables for case study
const currentProduct = "18-44"; // the product page user is on

// null if user didn’t take the quiz
// Example: userQuizResult = "Postpartum" if they did
const userQuizResult = "Stress";

let allReviews = [];
let visibleCount = 6;
let currentProductFilter = "all";
let currentCategoryFilter = "all";

async function loadReviews() {
  const res = await fetch("reviews.json");
  allReviews = await res.json();
  renderReviews(getFilteredReviews());
}

function getFilteredReviews() {
  let filtered = allReviews;

  // Product filter
  if (currentProductFilter !== "all") {
    filtered = filtered.filter(r => r.categories && r.categories.includes(currentProductFilter));
  }

  // Category filter
  if (currentCategoryFilter !== "all") {
    filtered = filtered.filter(r => r.categories && r.categories.includes(currentCategoryFilter));
  }

  // Highlight logic (based on product page or quiz)
  filtered = filtered.map(r => {
    r.highlight = false;
    if (
      (r.product && r.product === currentProduct) ||
      (userQuizResult && r.categories.includes(userQuizResult))
    ) {
      r.highlight = true;
    }
    return r;
  });

  // Separate highlighted and normal reviews
  const highlighted = filtered.filter(r => r.highlight).slice(0, 2);
  const normal = filtered.filter(r => !r.highlight);

  return [...highlighted, ...normal].slice(0, visibleCount);
}

function renderReviews(reviews) {
  const grid = document.getElementById("review-grid");
  grid.innerHTML = "";

  reviews.forEach(r => {
    const card = document.createElement("div");
    card.className = "review-card" + (r.highlight ? " highlight" : "");
    card.innerHTML = `
      <div class="review-header">
        <div class="review-name">${r.name}</div>
        <div class="review-age">${r.age} • ${r.categories.join(", ")}</div>
      </div>
      <p>${r.text}</p>
    `;
    grid.appendChild(card);
  });
}

// Load more button
document.getElementById("load-more").addEventListener("click", () => {
  visibleCount += 6;
  renderReviews(getFilteredReviews());
});

// Dropdown filters
document.getElementById("product-filter").addEventListener("change", (e) => {
  currentProductFilter = e.target.value;
  visibleCount = 6;
  renderReviews(getFilteredReviews());
});

document.getElementById("category-filter").addEventListener("change", (e) => {
  currentCategoryFilter = e.target.value;
  visibleCount = 6;
  renderReviews(getFilteredReviews());
});

loadReviews();