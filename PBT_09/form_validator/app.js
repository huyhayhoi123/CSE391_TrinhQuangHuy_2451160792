const form = document.querySelector('#registerForm');
const fullName = document.querySelector('#fullName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const phone = document.querySelector('#phone');
const submitBtn = document.querySelector('#submitBtn');
const modal = document.querySelector('#successModal');
const modalInfo = document.querySelector('#modalInfo');

const validators = {
    name: false,
    email: false,
    password: false,
    confirm: false,
    phone: false
};

function setMessage(elementId, ok, message) {
    const element = document.querySelector(elementId);
    element.textContent = (ok ? '✅ ' : '❌ ') + message;
    element.className = 'message ' + (ok ? 'valid' : 'invalid');
}

function updateSubmitState() {
    submitBtn.disabled = !Object.values(validators).every(Boolean);
}

function validateName() {
    const value = fullName.value.trim();
    validators.name = value.length >= 2 && value.length <= 50;
    setMessage('#nameMsg', validators.name, validators.name ? 'Tên hợp lệ' : 'Tên phải từ 2 đến 50 ký tự');
    updateSubmitState();
}

function validateEmail() {
    const value = email.value.trim();
    validators.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setMessage('#emailMsg', validators.email, validators.email ? 'Email hợp lệ' : 'Email chưa đúng định dạng');
    updateSubmitState();
}

function getPasswordStrength(value) {
    if (value.length < 8) return 'weak';
    if (/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(value) && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(value)) return 'medium';
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(value)) return 'strong';
    return 'weak';
}

function validatePassword() {
    const value = password.value;
    const strength = getPasswordStrength(value);
    const bar = document.querySelector('#strengthBar');
    bar.className = strength;

    validators.password = strength === 'strong';
    const text = strength === 'weak' ? 'Mật khẩu yếu' : strength === 'medium' ? 'Mật khẩu trung bình' : 'Mật khẩu mạnh';
    setMessage('#passwordMsg', validators.password, text);
    validateConfirm();
    updateSubmitState();
}

function validateConfirm() {
    validators.confirm = confirmPassword.value !== '' && confirmPassword.value === password.value;
    setMessage('#confirmMsg', validators.confirm, validators.confirm ? 'Mật khẩu khớp' : 'Mật khẩu chưa khớp');
    updateSubmitState();
}

function formatPhone(value) {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 4) return digits;
    if (digits.length <= 7) return digits.slice(0, 4) + '-' + digits.slice(4);
    return digits.slice(0, 4) + '-' + digits.slice(4, 7) + '-' + digits.slice(7);
}

function validatePhone() {
    phone.value = formatPhone(phone.value);
    const digits = phone.value.replace(/\D/g, '');
    validators.phone = /^[0-9]{10}$/.test(digits);
    setMessage('#phoneMsg', validators.phone, validators.phone ? 'Số điện thoại hợp lệ' : 'Số điện thoại phải có 10 chữ số');
    updateSubmitState();
}

fullName.addEventListener('input', validateName);
email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);
confirmPassword.addEventListener('input', validateConfirm);
phone.addEventListener('input', validatePhone);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (submitBtn.disabled) return;
    modalInfo.textContent = `Họ tên: ${fullName.value}. Email: ${email.value}. SĐT: ${phone.value}.`;
    modal.classList.add('open');
});

document.querySelector('#closeModal').addEventListener('click', () => modal.classList.remove('open'));
