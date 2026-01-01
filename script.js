const regForm = document.getElementById("reg-form");

regForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = regForm.elements["name"].value;
  const email = regForm.elements["email"].value;
  const gender = regForm.elements["gender"].value;
  const maritalStatus = regForm.elements["maritalstatus"].value;
  const subscribe = regForm.elements["subscribe"].checked;
  console.log({
    name,
    gender,
    maritalStatus,
    email,
    subscribe,
  });
  regForm.reset();
});
