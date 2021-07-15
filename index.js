function updateEmployeeWithKeyAndValue(employee, key, value) {
  /*updated = Object.assign({}, employee, { [key]: value });
  return updated*/
  return { ...employee, ...{[key]:value}}
  }

function destructivelyUpdateEmploeeWithKeyAndValue(employee, key, value) {
  employee[key]= value
  return employee
}

function deleteFromEmployeeByKey(employee, key) {
  /*updated = Object.assign({}, employee)
  delete updated[key];
  return updated;*/
  new = {... employee}
  delete new[key]
  return new
}

destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee
}