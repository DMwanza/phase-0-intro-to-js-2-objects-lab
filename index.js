// Write your solution in this file!
const employee={
    name:"Sam",
    streetAddress:"11 Broadway",
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj={...employee,"name":"Sam","streetAddress":"11 Broadway"}
    return newObj
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee["streetAddress"]="12 Broadway"
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee={...employee[key]}
    delete newEmployee[key]
    return newEmployee

}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}