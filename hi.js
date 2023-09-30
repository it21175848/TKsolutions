function verifyOTP() {
    const otp = document.getElementById("digit1").value +
                document.getElementById("digit2").value +
                document.getElementById("digit3").value +
                document.getElementById("digit4").value;

    // Replace this with your actual OTP validation logic
    const validOTP = "kiru"; // Change this to your expected OTP

    if (otp === validOTP) {
        alert("OTP Verified!");
    } else {
        alert("OTP Invalid. Please try again.");
    }
}
