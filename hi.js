function moveToNext(currentInput, nextInputId) {
    if (currentInput.value.length === 1) {
        document.getElementById(nextInputId).focus();
    }
}

function verifyOTP() {
    const otp = document.getElementById("digit1").value +
                document.getElementById("digit2").value +
                document.getElementById("digit3").value +
                document.getElementById("digit4").value;

    // Replace this with your actual OTP validation logic
    const validOTP = "kiru"; // Change this to your expected OTP

    if (otp === validOTP) {
        document.getElementById("message").textContent = "OTP Verified!";
    } else {
        document.getElementById("message").textContent = "OTP Invalid. Please try again.";
    }
}
