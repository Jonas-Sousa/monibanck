export default function ofLegalAge (field) {
    const dateOfBirth = new Date(field.value);
    validateAge(dateOfBirth);

    console.log(validateAge(dateOfBirth));
}

function validateAge(date) {
    const currentDate = new Date();
    const datePlus18 = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return currentDate >= datePlus18;
}