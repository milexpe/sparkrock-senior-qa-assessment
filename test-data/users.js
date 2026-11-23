module.exports = {
  standardUser: { username: 'standard_user', password: 'secret_sauce' },
  customer: { firstName: 'John', lastName: 'Doe', postalCode: '90210' },
  products: { backpack: 'Sauce Labs Backpack', bikeLight: 'Sauce Labs Bike Light' },
  requiredFieldCases: [
    { name: 'missing first name', firstName: '', lastName: 'Doe', postalCode: '90210', error: 'Error: First Name is required' },
    { name: 'missing last name', firstName: 'John', lastName: '', postalCode: '90210', error: 'Error: Last Name is required' },
    { name: 'missing postal code', firstName: 'John', lastName: 'Doe', postalCode: '', error: 'Error: Postal Code is required' },
    { name: 'all fields empty', firstName: '', lastName: '', postalCode: '', error: 'Error: First Name is required' },
  ],
};
