function verifyOTP() {
    const digit1 = document.getElementById("digit1").value;
    const digit2 = document.getElementById("digit2").value;
    const digit3 = document.getElementById("digit3").value;
    const digit4 = document.getElementById("digit4").value;

    const otp = digit1 + digit2 + digit3 + digit4;

    // Replace this with your actual OTP validation logic
    const validOTP = "1234"; // Change this to your expected OTP

    if (otp === validOTP) {
        document.getElementById("message").innerText = "OTP Verified!";
    } else {
        document.getElementById("message").innerText = "OTP Invalid. Please try again.";
    }
}
