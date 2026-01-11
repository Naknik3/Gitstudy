const PriceBox = document.getElementById("priceBox");
const result = document.getElementById("result");

function getVat() {
    const price = Number(PriceBox.value);

    if (isNaN(price) || price <= 0) {
        return null;
    }

    return price * 0.18;
}

function display() {
    const vat = getVat();

    if (vat === null) {
        result.textContent = "Please enter a valid price";
        return;
    }

    result.textContent = `The VAT is ${vat.toFixed(2)}`;
}
