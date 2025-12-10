# Nutrafol Review Section - Case Study

This repository contains a functional review section for the Nutrafol Core for Women product page, designed as part of a take-home case study. The review section aims to enhance the product experience and support conversion by surfacing relevant customer feedback in a structured, interactive, and mobile-friendly layout.

Task 1 is written inside of task-1.md, and Task 2 is every other file. 

---

## Features

### 1. Highlighted Reviews
- Up to **2 highlighted reviews** appear at the top of the section.
- Highlighted reviews are selected based on:
  - **Current product page**: reviews associated with the product.
  - **Optional quiz result**: if the user has taken the quiz, reviews matching the user’s category are also highlighted.
- Highlighted reviews are visually distinguished with a border and background color.

### 2. Review Layout
- **One review per row** for clarity and readability.
- Each review displays:
  - Reviewer name
  - Age and category tags
  - Review text
- Mobile-friendly design ensures readability on all devices.

### 3. Filtering & Interactions
- Two **dropdown filters**:
  1. **Product group** (e.g., Women 18-44, Women 45+, Vegan, Postpartum)
  2. **Category** (e.g., Stress, PCOS, Menopause, Postpartum)
- **Load More** button to progressively reveal additional reviews.
- Filters and “Load More” respect highlighting logic and maintain order of reviews.
- Smooth rendering with **ARIA live region** for screen readers.

### 4. Accessibility
- Alt text for all images.
- Focus-visible styles for interactive elements.
- Keyboard-accessible dropdowns and buttons.
- Proper semantic HTML (`<article>` for each review, `<section>` for container).

### 5. Mobile Considerations
- Responsive design with media queries.
- Touch-friendly dropdowns and buttons.
- Scales gracefully on smaller devices.

---

## Technologies Used
- HTML, CSS, JavaScript (vanilla)
- JSON for review data (`reviews.json`)
- No frameworks required; can be deployed on **GitHub Pages, CodeSandbox, or Vercel**

---

## Setup Instructions
1. Clone the repository:
   ```bash

   git clone (https://github.com/jphan345/pacagen-case-study.git)


