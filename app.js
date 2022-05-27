let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "orange";
      document.body.style.backgroundColor = "green";
    }
    if (count < 0) {
      value.style.color = "black";
      document.body.style.backgroundColor = "red";
    }
    if (count === 0) {
      document.body.style.backgroundColor = "grey";
    }
    value.textContent = count;
  });
});
