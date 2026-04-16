# 📝 HNG Stage 0 — Todo Item Card

A clean, accessible, and testable Todo Item Card built with semantic HTML, modern CSS, and vanilla JavaScript.

This project focuses on **testability, accessibility, and responsiveness** as required for the HNG Stage 0 frontend task.

---

## 🚀 Live Demo
👉 [View Live Project](#)  
👉 [GitHub Repository](https://github.com/Emmanuel-Xs/stage-0_todo-item-card)

---

## 📌 Features

- ✅ Fully testable using required `data-testid` attributes
- ♿ Accessible (ARIA labels, keyboard navigation, semantic HTML)
- 📱 Responsive design (320px → 1200px)
- ⏱ Dynamic time-remaining calculation
- ✔ Toggle task completion state
- 🎯 Clean and modern UI design

---

## 🧪 Test IDs Implemented

All required test IDs are included:

- `test-todo-card`
- `test-todo-title`
- `test-todo-description`
- `test-todo-priority`
- `test-todo-due-date`
- `test-todo-time-remaining`
- `test-todo-status`
- `test-todo-complete-toggle`
- `test-todo-tags`
- `test-todo-tag-work`
- `test-todo-tag-urgent`
- `test-todo-edit-button`
- `test-todo-delete-button`

---

## 🏗️ Built With

- HTML5 (Semantic structure)
- CSS3 (Custom properties, Flexbox, responsive design)
- JavaScript (DOM manipulation, time calculations)

---

## ⚙️ Functionality

### ⏳ Time Remaining Logic
Displays:
- "Due in X days"
- "Due tomorrow"
- "Due in X hours/minutes"
- "Overdue by X time"
- "Due now!"

Automatically updates every 30 seconds.

---

### ✔ Task Completion
- Checkbox toggles task state
- Updates:
  - Status → "Done"
  - Title → strikethrough
  - Time display → "Completed"

---

### 🛠 Actions
- Edit button → logs action
- Delete button → logs action

---

## ♿ Accessibility

- Semantic elements (`<article>`, `<h2>`, `<time>`, `<button>`)
- Checkbox linked with label
- `aria-live="polite"` for time updates
- Keyboard navigable (Tab + Enter/Space)
- Visible focus states

---

## 📱 Responsiveness

- Mobile-first design
- Fluid layout using `min()` and Flexbox
- Tags wrap properly
- No horizontal overflow

---

## 📂 Project Structure
index.html
style.css
script.js
README.md
