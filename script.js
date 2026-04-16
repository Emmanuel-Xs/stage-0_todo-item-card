document.addEventListener("DOMContentLoaded", () => {
  const todoCard = document.querySelector('[data-testid="test-todo-card"]');
  const checkbox = document.querySelector(
    '[data-testid="test-todo-complete-toggle"]',
  );
  const statusEl = document.querySelector('[data-testid="test-todo-status"]');
  const dueDate = document.querySelector('[data-testid="test-todo-due-date"]');
  const timeRemainingEl = document.querySelector(
    '[data-testid="test-todo-time-remaining"]',
  );
  const editBtn = document.querySelector(
    '[data-testid="test-todo-edit-button"]',
  );
  const deleteBtn = document.querySelector(
    '[data-testid="test-todo-delete-button"]',
  );

  const targetDateStr = dueDate?.getAttribute("datetime");
  const targetDate = targetDateStr
    ? new Date(targetDateStr)
    : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);

  const wrapperStates = ["upcoming", "overdue", "done"];
  const statusStates = ["pending", "in-progress", "completed"];

  function getTimeRemainingInfo(diff) {
    const absDiff = Math.abs(diff);
    const minutes = Math.floor(absDiff / (1000 * 60));
    const hours = Math.floor(absDiff / (1000 * 60 * 60));
    const days = Math.floor(absDiff / (1000 * 60 * 60 * 24));

    //overdue
    if (diff <= 0) {
      if (absDiff < 60000) {
        return { text: "Due now!", state: "overdue" };
      }

      if (absDiff < 1000 * 60 * 60) {
        return {
          text: `Overdue by ${minutes} minute${minutes > 1 ? "s" : ""}`,
          state: "overdue",
        };
      }

      if (days > 0) {
        return {
          text: `Overdue by ${days} day${days > 1 ? "s" : ""}`,
          state: "overdue",
        };
      }

      return {
        text: `Overdue by ${hours} hour${hours > 1 ? "s" : ""}`,
        state: "overdue",
      };
    }

    // upcoming
    if (days > 1) return { text: `Due in ${days} days`, state: "upcoming" };
    if (days === 1) return { text: "Due tomorrow", state: "upcoming" };
    if (hours > 0)
      return {
        text: `Due in ${hours} hour${hours > 1 ? "s" : ""}`,
        state: "upcoming",
      };
    return {
      text: `Due in ${minutes} minute${minutes > 1 ? "s" : ""}`,
      state: "upcoming",
    };
  }

  function updateTimeRemaining() {
    const wrapper = timeRemainingEl.parentElement;

    if (checkbox.checked) {
      timeRemainingEl.textContent = "Completed";
      wrapper.classList.remove(...wrapperStates);
      wrapper.classList.add("done");
      return;
    }

    const diff = targetDate.getTime() - Date.now();
    const { text, state } = getTimeRemainingInfo(diff);

    timeRemainingEl.textContent = text;
    wrapper.classList.remove(...wrapperStates);
    wrapper.classList.add(state);
  }

  checkbox.addEventListener("change", (e) => {
    const isChecked = e.target.checked;
    statusEl.classList.remove(...statusStates);

    if (isChecked) {
      todoCard.classList.add("completed");
      statusEl.classList.add("completed");
      statusEl.textContent = "Done";
    } else {
      todoCard.classList.remove("completed");
      statusEl.classList.add("pending");
      statusEl.textContent = "Pending";
    }

    updateTimeRemaining();
  });

  editBtn.addEventListener("click", () => {
    console.log("Edit clicked");
  });

  deleteBtn.addEventListener("click", () => {
    console.log("Delete clicked");
  });

  // Init
  updateTimeRemaining();
  setInterval(updateTimeRemaining, 30000);
});
