import cpfField from "./validateCpf.js";
const formFields = document.querySelectorAll("[required]");

formFields.forEach((field) => {
    field.addEventListener('blur', () => checkField (field));
   
})

const checkField = (field) => {
    if (field.name === 'cpf' && field.value.length >= 11){
        cpfField(field);
    };
};