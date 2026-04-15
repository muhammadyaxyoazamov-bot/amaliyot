// 1-topshiriq

// async function salom() {
//     return "Assalomu alaykum, async dunyosi!"
// }
// salom()
//     .then((value) => console.log(value))

// 2-topshiriq

// function ikkilikKutish() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("2 soniya o'tdi ✅"), 2000);
//     });
// }

// async function boshla() {
//     console.log("Boshlandim...");

//     const natija = await ikkilikKutish();
//     console.log(natija);

//     console.log("Tugadim.");
// }

// boshla();

// 3-topshiriq

// function foydalanuvchiniOl(id) {
//     return new Promise((resolve, reject) => {
//         if (id > 0) {
//             resolve({ id, ism: "Sardor", yosh: 22 });
//         } else {
//             reject("Xato: ID musbat bo'lishi kerak!");
//         }
//     });
// }

// async function profilniKorshat(id) {
//     try {
//         const foydalanuvchi = await foydalanuvchiniOl(id);
//         console.log(foydalanuvchi);

//     } catch (xato) {
//         console.log(xato);

//     }
// }

// profilniKorshat(3);
// profilniKorshat(-1);

// 4-topshiriq

// function tayyorla(taom, vaqt) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`${taom} tayyor ✅`), vaqt);
//     });
// }

// async function oshpazlik() {

//     const piyoz = await tayyorla("piyoz", 1000)
//     console.log(piyoz);

//     const gosht = await tayyorla("go'sht", 2000)
//     console.log(gosht);

//     const shorva = await tayyorla("sho'rva", 1000)
//     console.log(shorva);

//     console.log("Taomnoma tayyor! 🍲");

// }
// oshpazlik();

// 5-topshiriq
// async function kvadrat(son) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const natija = son * son
//             resolve(natija);

//         }, 1000)
//     })
// }

// async function hisoblash() {
//     const natija = await kvadrat(7)
//     console.log(`7 ning kvadrati: ${natija}`);

// }
// hisoblash()

// 6-topshiriq

// function loginQil(login, parol) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (parol === 1234) resolve(`👤 ${login} tizimga kirdi`)
//             else reject("❌ Parol noto'g'ri!")
//         }, 1000)
//     })
// }

// function balansnikor() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("💰 Balans: 3,500,000 so'm")
//         }, 1000)
//     })
// }

// function tarixniKor() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("📋 So'nggi to'lov: 150,000 so'm")
//         }, 1000);
//     })
// }

// async function bankIlovasi(login, parol) {
//     try {
//         // login
//         const loginParol = await loginQil(login, parol)
//         console.log(loginParol);

//         // balans
//         const balans = await balansnikor()
//         console.log(balans);

//         // tarix
//         const tarix = await tarixniKor()
//         console.log(tarix);

//     } catch (error) {
//         console.log("❌ Parol noto'g'ri!");

//     }
// }
// bankIlovasi("Muhammadyahyo", 1234)
// bankIlovasi("Alisher", 1235)

// 7-topshiriq

// function yangliklar() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("📰 Yangiliklar yuklandi"), 1000);
//     })
// }

// function obHavo() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("☀️ Ob-havo: +24°C"), 1000)
//     })
// }

// function kurs() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("💵 Dollar: 12,800 so'm"), 1000)
//     })
// }

// async function dasturBoshqaruv() {
//     console.log("Yuklanmoqda...");
//     const [yangilik, havo, valyuta] = await Promise.all([yangliklar(), obHavo(), kurs()])
//     console.log(yangilik);
//     console.log(havo);
//     console.log(valyuta);
//     console.log("✅ Barchasi 1 soniyada yuklandi!");
// }

// dasturBoshqaruv()

// 8-topshiriq

// function faylniYukla(fayl) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (fayl.endsWith(".pdf")) resolve(`📄 ${fayl} yuklandi`);
//             else reject(`⛔ ${fayl} — noto'g'ri format!`);
//         }, 1500);
//     });
// }

// async function yuklash(fayl) {
//     console.log(`⏳ ${fayl} yuklanmoqda...`);
//     try {
//         const natija = await faylniYukla(fayl);
//         console.log(natija);
//     } catch (xato) {
//         console.log(xato);
//     } finally {
//         console.log("Yuklanish tugadi");

//     }
// }

// yuklash("hisobot.pdf");
// yuklash("rasm.jpg");

// 9-topshiriq

// function bahoni_hisoblash(ball) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (ball > 85) resolve("Alo")
//             if (ball > 70 && ball <= 85) resolve("Yaxshi")
//             if (ball > 55 && ball <= 70) resolve("Qoniqarli")
//             if (ball <= 55) reject("Qoniqarsiz")

//         }, 500);
//     });
// }

// async function talabaniBaholasin(ism, ball) {
//     try {
//         const baho = await bahoni_hisoblash(ball);
//         console.log(`${ism}: ${ball} ball → ${baho}`);
//     } catch (xato) {
//         console.log(`${ism}: ${ball} ball → ${xato}`);
//     }
// }

// talabaniBaholasin("Kamola", 92);
// talabaniBaholasin("Bobur", 74);
// talabaniBaholasin("Nilufar", 61);
// talabaniBaholasin("Sherzod", 40);

// 10-topshiriq

// // 1dan 5gacha bo'lgan Xonadon id sini ko'rsatadi
// async function xonadonniTekshir(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (id >= 1 && id <= 5) {
//                 resolve(`Xonadon mavjud ${id} -xona`)
//             } else {
//                 reject("Bunday xonadon yo'q")
//             }
//         }, 1000)
//     })
// }

// // Ijarachi Ismi
// async function ijarachiMalumot(ism) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (ism && ism.trim()) {
//                 resolve(`Ijirachi: ${ism} ✅`)
//             } else {
//                 reject("Ism kiritilmagan")
//             }
//         }, 1000)
//     })
// }

// // Xonadon id si va Ijarachi ismi yani shartnoma
// async function shartnomaTuzish(xonadon, xaridor) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`📝 Shartnoma tuzildi: ${xonadon} — ${xaridor}`), 1500)
//     })
// }


// // Rasmiylashtirish
// async function ijaraRasmiylashtirish(xonaId, xaridorId) {
//     try {
//         const xona = await xonadonniTekshir(xonaId)
//         console.log(xona);

//         const ijarachi = await ijarachiMalumot(xaridorId)
//         console.log(ijarachi);

//         const shartnoma = await shartnomaTuzish(xonaId, xaridorId)
//         console.log(shartnoma);

//         console.log("🎉 Ijara muvaffaqiyatli rasmiylashtirildi!");


//     } catch (error) {
//         console.log("❌ Xato:", error);

//     }
// }

// ijaraRasmiylashtirish(3, "A'zamov Muhammadyahyo")
// ijaraRasmiylashtirish(6, "A'zamov Muhammadyusuf")


// salom git    