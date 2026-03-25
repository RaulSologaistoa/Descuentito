npm install
npm install qrcode.react


====== para los id unicos ======
const uuid = crypto.randomUUID(); //id unicos

//para los cupones amigables
function generateCouponCode() {
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `CUP-${random}`;
}

====== JSON para los cupones con qr ======
const coupon = {
  id: crypto.randomUUID(),
  code: generateCouponCode(),
  title: "Cena para dos",
};