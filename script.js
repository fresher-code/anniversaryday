const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCodes = ['amorzinho', 'Amorzinho', 'gadhi', 'Gadhi', 'Baby', 'baby', 'mine', 'pagl', 'pagal']; // List of correct names
const nextPageUrl = 'main.html'; // Redirect page

const funnyMessages = [
    "Ache se try kro madam",
    "Dekh jyada dimag mt laga, simple hai",
    "Ghutna daba ke du kya?",
    "Khudko nahi pehchanti kya",
    "Mere najro se dekho, apne aap pta chl jaega",
    "Na na tum meri baby nhi ho. Kon ho ?"
];

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing

    const userInput = codeInput.value.trim(); // Get input and remove spaces

    if (secretCodes.includes(userInput)) {
        resultDiv.innerHTML = 'Baby';
        setTimeout(() => {
            window.location.href = nextPageUrl; // Redirect to next page
        }, 1000);
    } else {
        const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
        resultDiv.innerHTML = randomMessage;
    }
});

// Add active class to form for fadeIn effect
window.onload = () => {
    setTimeout(() => {
        form.classList.add('active');
    }, 200);
};