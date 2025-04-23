const button = document.querySelector("button");
const errorTextParagraph = document.querySelector("#feedback-error");

const getElementValueById = (id) => {
  const element = document.getElementById(id);

  if (element) {
    return element.value;
  }

  return undefined;
};

const checkUser = (department, user) => {
  switch (department) {
    case "comercial":
      return user === "CMCL12";
    case "rh":
      return user === "98HR";
    case "ti":
      return user === "DEV4567TI";

    default:
      return false;
  }
};

const checkPassword = (department, password) => {
  switch (department) {
    case "comercial":
      return password === "Com&c1@l";
    case "rh":
      return password === "RH!@2025";
    case "ti":
      return password === "IT&&||==2025";

    default:
      return false;
  }
};

const redirect = (path) => {
  window.location.href = path;
};

const redirectToDepartmentPage = (department) => {
  switch (department) {
    case "comercial":
      return redirect("./comertial.html");
    case "rh":
      return null;
    case "ti":
      return null;

    default:
      return null;
  }
};

const verifyDepartmentPassword = (e) => {
  errorTextParagraph.textContent = "";

  const departmentValue = getElementValueById("department");
  const userValue = getElementValueById("user");
  const passwordValue = getElementValueById("password");

  if (!departmentValue || !userValue || !passwordValue) {
    e.preventDefault();
    errorTextParagraph.textContent =
      "Preencha os dados solicitados no formulário.";
    return;
  }

  const isValidUser = checkUser(departmentValue, userValue);
  const isValidPassword = checkPassword(departmentValue, passwordValue);

  if (isValidUser && isValidPassword) {
    e.preventDefault();
    return redirectToDepartmentPage(departmentValue);
  }

  e.preventDefault();
  errorTextParagraph.textContent =
    "Usuário e/ou senha estão erradas para o setor escolhido.";
};

button?.addEventListener("click", (e) => {
  verifyDepartmentPassword(e);
});
