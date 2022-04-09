const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// set time where the giveaway will ends
// dapatkan element yang akan kita gunakan nati
const deadline = document.querySelector('.deadline');
const giveaway = document.querySelector('.giveaway');
const h4 = document.querySelectorAll('.deadline-format h4');

// dapatkan waktu hari ini
let tempDate = new Date();
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

// tambah kan satu hari dan jamnya berakhi jam 6 sore
let feature = new Date(tempYear, tempMonth, tempDay+1, 18);

// dapatkan waktunya secara detail
let year =  feature.getFullYear();
let month = feature.getMonth();
month = months[month];
let hari = feature.getDay();
hari = weekdays[hari];
let tanggal = feature.getDate();
let hour = feature.getHours();
let minute = feature.getMinutes();
let second = feature.getSeconds();

// tempel di giveaway waktu
giveaway.innerHTML = `Giveaway ends on ${hari}, ${tanggal} ${month} ${year} ${hour}:${minute}am`



// get the diffrence in ms

// mendapatkan masa depan dalam ms
let featureTime = feature.getTime();

let getRemainingTime = ()=>{
  // mendapatkan masa sekarang dalam ms
  let hariIni = new Date().getTime();
  // perbedaan antara masa depan dan masa sekarang dalam ms
  let t = featureTime-hariIni;
  // merubah hari | jam | menit ke ms
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000
  // time to calculate
  let days = Math.floor(t/oneDay);
  let hours = Math.floor((t%oneDay)/oneHour);
  let minutes = Math.floor((t%oneHour) / oneMinute);
  let seconds = Math.floor((t%oneMinute) / 1000)
  // console.log(`${days} ${hours} ${minutes} ${seconds}`)

  // simpan dalam array
  let values = [days,hours,minutes,seconds]

  // fungsi 
  let format = (item)=>{
    if(item < 10){
      return `0${item}`
    }else{
      return item
    }
  }

  // waktunya tempel di h4
  h4.forEach((element, index) => {
      element.innerHTML = `${format(values[index])}`
  });

  // cek jika waktu habis
  if(t<0){
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">Sorry, The giveaway is expired</h4>`
  }
}

// memanggil getRemainingTime setiap 1 detik
let countdown = setInterval(getRemainingTime,1000)

// pangil getRemainigTime()
getRemainingTime()