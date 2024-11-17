function createPatient(name, ssn) {
    // private PII
    const PII = {
        name: name,
        ssn: ssn
    };

    //public method to controll access
    return {
        getName: function() {
            return PII.name; // gets the name property
        },
        getSSN: function() {
            return PII.ssn;
        }
    }
}
// create a patient
const patient = createPatient("John", "123-45-6789") 

//ttest outputt
console.log(patient.name)
console.log(patient.ssn)
console.log(patient.getName())
console.log(patient.getSSN())