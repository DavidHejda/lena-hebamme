/**
 * Custom hook for form validation utilities
 */

const useValidation = () => {
  /**
   * Validates an email address using a regular expression
   * @param {string} email - The email address to validate
   * @returns {boolean} - True if the email is valid, false otherwise
   */
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return {
    validateEmail,
  };
};

export default useValidation;
