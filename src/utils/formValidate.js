import { nameRegex, emailRegex, passwordRegex } from "./regex";

const validateFormData = (type, firstName, lastName, email, password) => {
  const firstNameCheck = nameRegex.test(firstName);
  const lastNameCheck = nameRegex.test(lastName);
  const emailCheck = emailRegex.test(email);
  const passwordCheck = passwordRegex.test(password);

  if (!firstNameCheck && type !== "signin")
    return "Enter appropriate First Name.";
  if (!lastNameCheck && type !== "signin")
    return "Enter appropriate Last Name.";
  if (!emailCheck) return "Enter appropriate Email.";
  if (!passwordCheck) return "Enter appropriate password.";

  return null;
};

export default validateFormData;
