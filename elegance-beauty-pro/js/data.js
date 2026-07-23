// =============================================================================
// MA'LUMOTLAR: Xizmatlar va barberlar ro'yxati
// =============================================================================

export const SERVICES = [
  { id: 'classic_cut',   name: "Klassik soch kesish",     desc: "Konsultatsiya + yuvish + kesish + ukladka",        duration: 40,  price: 90000,  icon: 'fa-scissors' },
  { id: 'fade_cut',      name: "Fade / dizaynli kesish",  desc: "Zamonaviy fade, ombre va dizaynli kesimlar",        duration: 50,  price: 110000, icon: 'fa-user-tie' },
  { id: 'kids_cut',      name: "Bolalar soch kesish",     desc: "14 yoshgacha bo'lgan mijozlar uchun",                duration: 30,  price: 65000,  icon: 'fa-child' },
  { id: 'beard_trim',    name: "Soqol shakllantirish",    desc: "Soqol modellashtirish + issiq sochiq bilan tarash", duration: 30,  price: 65000,  icon: 'fa-user-tie' },
  { id: 'royal_shave',   name: "Qirolona tarash",         desc: "Ustara bilan klassik tarash, issiq sochiq va parvarish", duration: 40, price: 95000, icon: 'fa-droplet' },
  { id: 'cut_beard_combo',name: "Soch + soqol kombosi",   desc: "To'liq kesish va soqol shakllantirish paketi",       duration: 70,  price: 140000, icon: 'fa-star' },
  { id: 'hair_color_men', name: "Erkaklar sochini bo'yash", desc: "Oq sochlarni tabiiy tusga bo'yash yoki dizaynli rang", duration: 60, price: 180000, icon: 'fa-palette' },
  { id: 'hair_tattoo',   name: "Soch dizayni (hair tattoo)", desc: "Zamonaviy naqshli sartaroshlik dizayni",           duration: 30,  price: 70000,  icon: 'fa-wand-magic-sparkles' },
  { id: 'head_massage',  name: "Bosh massaji",            desc: "Bo'shashtiruvchi bosh va bo'yin massaji",            duration: 25,  price: 60000,  icon: 'fa-hands' },
  { id: 'hair_therapy_men', name: "Soch davolash (keratin)", desc: "Keratin bilan sochni tiklash va parvarish",        duration: 60,  price: 220000, icon: 'fa-droplet' },
  { id: 'groom_package', name: "To'y kuni paketi",        desc: "Kuyov uchun soch + soqol + parvarish to'liq paket",  duration: 120, price: 380000, icon: 'fa-crown' },
];

export const MASTERS = [
  { id: 'alisher', name: 'Alisher Yusupov',  role: "Bosh barber",           exp: "12 yillik tajriba", img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=400&auto=format&fit=crop', specialties: ['classic_cut', 'fade_cut', 'cut_beard_combo'] },
  { id: 'jasur',   name: 'Jasur Rahimov',    role: "Barber / Soqol ustasi", exp: "10 yillik tajriba", img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=400&auto=format&fit=crop', specialties: ['beard_trim', 'royal_shave'] },
  { id: 'sardor',  name: 'Sardor Nazarov',   role: "Fade ustasi",           exp: "7 yillik tajriba",  img: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?q=80&w=400&auto=format&fit=crop', specialties: ['fade_cut', 'hair_tattoo'] },
  { id: 'otabek',  name: 'Otabek Qodirov',   role: "Rang ustasi",           exp: "8 yillik tajriba",  img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop', specialties: ['hair_color_men', 'hair_therapy_men'] },
  { id: 'diyor',   name: 'Diyor Ergashev',   role: "Bolalar bo'yicha barber", exp: "5 yillik tajriba", img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop', specialties: ['kids_cut', 'classic_cut'] },
  { id: 'bekzod',  name: 'Bekzod Tursunov',  role: "Massaj ustasi",         exp: "6 yillik tajriba",  img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop', specialties: ['head_massage', 'groom_package'] },
];

/** Narxni "250 000 so'm" ko'rinishida formatlaydi */
export function money(n) {
  return n.toLocaleString('ru-RU').replace(/,/g, ' ') + " so'm";
}

/** Sanani "24-iyul, Payshanba" ko'rinishida formatlaydi */
export function formatDateUz(dateStr) {
  if (!dateStr) return '—';
  const days = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
  const months = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'];
  const d = new Date(dateStr + 'T00:00:00');
  return `${d.getDate()}-${months[d.getMonth()]}, ${days[d.getDay()]}`;
}

/** Ish kuni uchun 09:00–19:30 oralig'ida 30 daqiqalik slotlar ro'yxati */
export function generateDaySlots() {
  const slots = [];
  for (let h = 9; h < 20; h++) {
    slots.push(`${String(h).padStart(2, '0')}:00`);
    slots.push(`${String(h).padStart(2, '0')}:30`);
  }
  return slots;
}
