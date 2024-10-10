"use strict";

const $ = selector => document.querySelector(selector);

const processEntires = () => {
    const subtotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#tax_rate").value);
    if (isNaN(subtotal) || subtotal < 0 || subtotal > 10000) {
        alert("Subtotal must be > 0 and < 10000");
        $("#subtotal").focus();
    } else if (isNaN(taxRate) || taxRate < 0 || taxRate > 12) {
        alert("Tax Rate must be > 0 and < 12")
        $("#tax_rate").focus();
    } else {
        let salesTax = 0;
    salesTax = (subtotal * taxRate) / 100;
    $("#sales_tax").value = salesTax.toFixed(2);
    let total = 0;
    total = subtotal + salesTax
    $("#total").value = total.toFixed(2);
    }
    $("#subtotal").focus();
}

const clearEntries = () => {
    $("#sales_tax").value = "";
    $("#total").value= "";
    $("#subtotal").focus();
};

const clearSubtotal = () => {
    $("#subtotal").value= "";
}

const clearTaxRate = () => {
    $("#tax_rate").value="";
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener( "click", processEntires);
    $("#clear").addEventListener( "click", clearEntries);
    $("#subtotal").addEventListener( "click", clearSubtotal);
    $("#tax_rate").addEventListener( "click", clearTaxRate);
})