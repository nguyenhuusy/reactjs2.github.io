export default function(data) {
  const errors = {};

  if (!data.name.trim().length) {
    errors.name = 'Name is required';
  }

  if (!data.gender.trim().length) {
    errors.gender = 'Gender is required';
  }

  if (!data.math.trim().length) {
    errors.math = 'Math is required';
  }

  if (!data.english.trim().length) {
    errors.english = 'English is required';
  }

  return {
    isValid: !Object.keys(errors).length,
    errors
  }
}