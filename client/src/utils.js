export default function formatCurrency(num) {
    return "Kes " + Number(num.toFixed(1)).toLocaleString() + " ";
  }