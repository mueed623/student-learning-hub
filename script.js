
document.getElementById("welcomeBtn").addEventListener("click", function() {
    document.getElementById("welcomeMessage").innerText =
        "Welcome! Start exploring our courses today.";
});

document.querySelectorAll(".courseBtn").forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Thank you for your interest! This course is coming soon.");
    });
});

$(document).ready(function() {

    $("#toggleBtn").click(function() {
        $("#extraInfo").slideToggle();

        if ($(this).text() === "Show More") {
            $(this).text("Show Less");
        } else {
            $(this).text("Show More");
        }
    });

});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.innerText = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formMessage.innerText = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.innerText = "Thank you! Your message has been submitted.";
    formMessage.style.color = "green";

    document.getElementById("contactForm").reset();
});
