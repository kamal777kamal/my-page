document.addEventListener("DOMContentLoaded", () => {
    const currencyList = ["USD", "EUR", "GBP", "INR", "JPY", "AUD", "CAD"];
    const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");
    const amountInput = document.getElementById("amount");
    const convertBtn = document.getElementById("convertBtn");
    const resultDiv = document.getElementById("result");

    // Populate the select elements with currency options
    currencyList.forEach(currency => {
        let option = document.createElement("option");
        option.value = currency;
        option.textContent = currency;
        fromCurrency.appendChild(option);
        toCurrency.appendChild(option.cloneNode(true));
    });

    // Conversion rates (as an example)
    const conversionRates = {
        USD: { EUR: 0.84, GBP: 0.75, INR: 74.23, JPY: 110.59, AUD: 1.34, CAD: 1.25 },
        EUR: { USD: 1.19, GBP: 0.89, INR: 88.26, JPY: 131.70, AUD: 1.60, CAD: 1.49 },
        // Add other currency conversion rates here
    };

    // Handle conversion
    convertBtn.addEventListener("click", () => {
        const amount = parseFloat(amountInput.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (isNaN(amount) || from === to) {
            resultDiv.textContent = "Please enter a valid amount and select different currencies.";
            return;
        }

        const rate = conversionRates[from][to];
        const convertedAmount = amount * rate;

        resultDiv.textContent = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
    });
});