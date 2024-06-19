// utils/form_validation.js

export function setupValidation() {
  document.addEventListener("DOMContentLoaded", function() {
    // Hàm thiết lập thông báo lỗi tùy chỉnh
    const setCustomMessage = (input, message) => {
      input.setCustomValidity(message);
    };

    // Hàm kiểm tra chấp nhận điều khoản
    const validateAcceptTerms = () => {
      const acceptTerms = document.getElementById('acceptTerms');
      if (acceptTerms) {
        // Thiết lập thông báo lỗi khi không hợp lệ
        acceptTerms.addEventListener('invalid', function(event) {
          setCustomMessage(this, this.dataset.message);
        });

        // Reset lại thông báo lỗi khi hợp lệ
        acceptTerms.addEventListener('change', function() {
          if (this.checked) {
            setCustomMessage(this, '');
          }
        });
      }
    };

    // Gọi hàm kiểm tra chấp nhận điều khoản
    validateAcceptTerms();
  });
}
