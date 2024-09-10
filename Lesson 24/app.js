let n = +prompt("rəqəm daxil edin");
const CPUDAKI_EDED = Math.floor(Math.random() * 100) + 1;
let tryCount = 1;

while (n !== CPUDAKI_EDED) {
  if (n < CPUDAKI_EDED) {
    alert("Yuxarı qalx⬆️");
  } else {
    alert("Aşağı düş⬇️");
  }
  tryCount += 1;
  n = +prompt("rəqəm daxil edin");
}

if (tryCount <= 2) {
  alert(`siz ${tryCount} dəfəyə tapdığınız üçün 10000$ qazandınız💸`);
} else if (tryCount <= 10) {
  alert(`siz ${tryCount} dəfəyə tapdığınız üçün 5000$ qazandınız💸`);
} else {
  alert(
    `siz ${tryCount} dəfəyə tapdığınız üçün, sizin şərəfinizə yandırırıq🚬`
  );
}



