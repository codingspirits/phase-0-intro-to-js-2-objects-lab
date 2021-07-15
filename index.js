function updateEmployeeWithKeyAndValue(employee, key, value) {
  /*const updated = Object.assign({}, employee, { [key]: value });
  return updated*/
  return { ...employee, ...{[key]:value}
  }
  
function destructivelyUpdateEmploeeWithKeyAndValue(employee, key, value) {
  employee[key]= value;
  return employee
}

function deleteFromEmployeeByKey(employee, key) {
  /*const updated = Object.assign({}, employee)
  delete updated[key];
  return updated;*/
  new = {... employee}
  delete new[key]
  return new
}

function deleteFromEmployeeByKey(employee, key) {
    // Alternate using ES6 Spread operators:
    // const newObj = { ...employee }
    const newObj = Object.assign({}, employee);
  
    delete newObj[key];
  
    return newObj;
  }
  
