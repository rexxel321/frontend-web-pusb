import React from "react";
import pusblogo from "../../../assets/pusblogo2.png";
import fathinImg from "../../../assets/fathin fajrin.png";
import idaImg from "../../../assets/ida ayu diva prabawati.png";
import noreziImg from "../../../assets/norezi alberto cardoso.png";
import CardMinister from "../pusb-structure/_components/CardMinister";
import CardMember from "../pusb-structure/_components/CardMember";
import mariaImg from "../../../assets/maria dewi anggraeni sutjipto.png";
import zaharaImg from "../../../assets/Zahara Shabilla Putri.png";
import graceImg from "../../../assets/Grace Clarissa Simamora.png";
import shilviaImg from "../../../assets/Shilvia Novicha Silitonga .png";
import rizkhaImg from "../../../assets/RIZKHA RAMADHANI HAFIFAH.png";
import naylaImg from "../../../assets/Nayla Zahra Kamilah.png";
import dhiezellaImg from "../../../assets/Dhiezella Septiani Sihite.png";
import maulidyaImg from "../../../assets/Maulidya tanu Putri.png";
import feliceImg from "../../../assets/Felice Greciella.png";
import justineImg from "../../../assets/Justine Smith Wijaya.png";
import abdulImg from "../../../assets/Abdul Rahman Sole.png";
import syifaImg from "../../../assets/Syifa Salsabila.png";
import fashihahImg from "../../../assets/fashihah-removebg-preview.png";
import najwaImg from "../../../assets/Najwa Aghniya Khoirunnisa.png";
import zelvaroImg from "../../../assets/Zelvaro Athallah Hafiz Herhadi.png";
import aisyahImg from "../../../assets/Aisyah kautsar depan.png";
import rasmadhaniImg from "../../../assets/Rasmadhani IdadiSociety.png";
import megaImg from "../../../assets/Mega Maria Wilda Welan.png";
import faleviImg from "../../../assets/Muhamad FaLevi Armendo Tanjung.png";
import yufrizkaImg from "../../../assets/yufrizka naomi tunas.png";
import citraImg from "../../../assets/Citra Chyntia Ummulhaq .png";
import aqelaImg from "../../../assets/Aqela Firyal Zahira.png";
import odiliaImg from "../../../assets/Odilia Miyagi Jessica .png";
import steveImg from "../../../assets/Steve Immanuel Andaria.png";
import andiniImg from "../../../assets/Andini Nurfitriani.png";
import putriImg from "../../../assets/Putri Meirthalia Eka Wening.png";
import taneshaImg from "../../../assets/Tanesha Andrelyne.png";
import alvianoImg from "../../../assets/Alviano Fredo Immanuel Rambulangi.png";
import hauraImg from "../../../assets/Haura Fathya Agniaputri.png";
import ariefImg from "../../../assets/M Arief Khumaidurrohman.png";
import gabrielImg from "../../../assets/Gabriel Hamonangan Lumban Tobing.png";
import dhiyaImg from "../../../assets/m. dhiya ulhaq.png";
import donaImg from "../../../assets/Dona Audy Nayoris.png";
import liviaImg from "../../../assets/Livia Sativa.png";
import rafaelImg from "../../../assets/Rafael Ardiansyah.png";
import amebeatrixImg from "../../../assets/amebeatrix-removebg-preview.png";
import kevinImg from "../../../assets/Kevin Immanuel Chang.png";
import yulianiImg from "../../../assets/Yuliani Sukarni Zebua.png";
import graceShelaImg from "../../../assets/Grace Shela Rotua.png";
import azzikraImg from "../../../assets/Muhammad Azzikra.png";
import gloryImg from "../../../assets/Glory Kristy Widjojo.png";
import wahyuImg from "../../../assets/Wahyu Hidayat Saputra.png";
import salwaImg from "../../../assets/salwa ade aprilia dai.png";
import feliImg from "../../../assets/feli-removebg-preview.png";
import revaImg from "../../../assets/reva-removebg-preview.png";
import rendiImg from "../../../assets/Muhamad_Rendi_Raditya_Pribadie-removebg-preview.png";
import suciImg from "../../../assets/Suci_Khadijah_Siregar-removebg-preview.png";
import nabillaImg from "../../../assets/nabilla-removebg-preview.png";

const ministeriesData = [
  { id: "exec", title: "President & Vice President", ministers: [
    { name: "Fathin Fajrin", position: "President", image: fathinImg, socialLinks: { linkedin: "https://www.linkedin.com/in/fathiin-fajrin-51b113316", instagram: "https://www.instagram.com/fathiinfajrin" } },
    { name: "Ida Ayu Diva Prabawati", position: "Vice President", image: idaImg, socialLinks: { linkedin: "https://www.linkedin.com/in/ida-ayu-diva-prabawati-darmawan", instagram: "https://www.instagram.com/iadiva" } },
    { name: "Norezi Alberto Cardoso", position: "Vice President", image: noreziImg, socialLinks: { linkedin: "https://www.linkedin.com/in/norezi-alberto-cardoso", instagram: "https://www.instagram.com/iadiva" } },
  ]},
  { id: "mocs", title: "MOCS",
    ministers: [
      { name: "Maria Dewi Anggraeni Sutjipto", position: "Minister of Compliance & Secretariat", image: mariaImg, socialLinks: { linkedin: "https://www.linkedin.com/in/maria-dewi-anggraeni-sutjipto-646747321", instagram: "https://www.instagram.com/mareeadews" } }
    ],
    members: [
      { name: "Zahara Shabilla Putri", position: "Member of MOCS", image: zaharaImg, socialLinks: { instagram: "https://www.instagram.com/zhrazsp_" } },
      { name: "Grace Clarissa Simamora", position: "Member of MOCS", image: graceImg, socialLinks: { instagram: "https://www.instagram.com/shilvia11nov/", linkedin: "https://www.linkedin.com/in/grace-clarissa-simamora" } },
      { name: "Shilvia Novicha Silitonga", position: "Member of MOCS", image: shilviaImg, socialLinks: { instagram: "https://www.instagram.com/shilvia11nov/", linkedin: "https://www.linkedin.com/in/shilvia-novicha-silitonga-3b55b9350/" } },
      { name: "Rizkha Ramadhani Hafifah", position: "Member of MOCS", image: rizkhaImg, socialLinks: { instagram: "https://www.instagram.com/rizkhafifah", linkedin: "https://www.linkedin.com/in/rizkha-ramadhani-hafifah" } },
    ]
  },
  { id: "mof", title: "MOF",
    ministers: [
      { name: "Nayla Zahra Kamilah", position: "Minister of Finance", image: naylaImg, socialLinks: { instagram: "https://www.instagram.com/naylszahra", linkedin: "https://www.linkedin.com/in/nayla-zahra-kamilah" } }
    ],
    members: [
      { name: "Dhiezella Septiani Sihite", position: "Funding / Vice Minister", image: dhiezellaImg, socialLinks: { instagram: "https://www.instagram.com/_dhieello", linkedin: "https://www.linkedin.com/in/dhiezella-s-sihite-310727364/" } },
      { name: "Maulidya Tanu Putri", position: "Funding", image: maulidyaImg, socialLinks: { instagram: "https://www.instagram.com/maulidyaptrr", linkedin: "https://www.linkedin.com/in/maulidyatanu-putri-779620380/" } },
      { name: "Felice Greciella", position: "Accountant", image: feliceImg, socialLinks: { instagram: "https://www.instagram.com/aetherellaa_", linkedin: "https://www.linkedin.com/in/felice-greciella-903760380/" } },
      { name: "Justine Smith Wijaya", position: "Accountant", image: justineImg, socialLinks: { instagram: "https://www.instagram.com/wntxls_", linkedin: "https://www.linkedin.com/in/justine-wijaya-10bb76380/" }, imageClass: "scale-[0.85] origin-bottom" },
      { name: "Abdul Rahman Sole", position: "President Store", image: abdulImg, socialLinks: { instagram: "https://www.instagram.com/_rh.mn1", linkedin: "https://www.linkedin.com/in/abdul-sole-03468a392" } },
      { name: "Syifa Salsabila", position: "President Store", image: syifaImg, socialLinks: { instagram: "https://www.instagram.com/syfslbyy", linkedin: "https://www.linkedin.com/in/syifa-salsabila-0633a4203/" } },
    ]
  },
  { id: "mosa", title: "MOSA",
    ministers: [
      { name: "Fashihah Ardi Qut Karamah", position: "Minister of Student Activities", image: fashihahImg, socialLinks: { instagram: "http://www.instagram.com/ericacllsta", linkedin: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav" }, imageClass: "scale-[0.75] origin-bottom" },
      { name: "Najwa Aghniya Khoirunnisa", position: "Vice Minister of Student Activities", image: najwaImg, socialLinks: { instagram: "http://www.instagram.com/ericacllsta", linkedin: "http://www.linkedin.com/in/ida-ayu-diva-prabawati-darmawan" } },
    ],
    members: [
      { name: "Yufrizka Naomi Tunas", position: "Art", image: yufrizkaImg, socialLinks: { instagram: "https://www.instagram.com/yufrizka", linkedin: "https://www.linkedin.com/in/yufrizka-naomi-tunas-165a27380" } },
      { name: "Zelvaro Athallah Hafiz Herhadi", position: "Art", image: zelvaroImg, socialLinks: { instagram: "https://www.instagram.com/zelvaro.ath", linkedin: "https://www.linkedin.com/in/zelvaro-athallah-4b39ba380/" }, imageClass: "scale-[0.75] origin-bottom" },
      { name: "Aisyah Kautsar", position: "Society", image: aisyahImg, socialLinks: { instagram: "https://www.instagram.com/aisyah_kautsar07", linkedin: "https://www.linkedin.com/in/aisyah-kautsar-580127381/" } },
      { name: "Rasmadhani Idadi", position: "Society", image: rasmadhaniImg, socialLinks: { instagram: "https://www.instagram.com/arrsmdhni", linkedin: "https://www.linkedin.com/in/rasmadhani-idadi-8a0101381/" } },
      { name: "Mega Maria Wilda Welan", position: "Sport", image: megaImg, socialLinks: { instagram: "https://www.instagram.com/_______mega", linkedin: "https://www.linkedin.com/in/mega-welan-27aa25380/" } },
      { name: "Muhamad Fa'Levi Armendo Tanjung", position: "Sport", image: faleviImg, socialLinks: { instagram: "https://www.instagram.com/falevi_arm", linkedin: "https://www.linkedin.com/in/m-fa-levi-armendo-tanjung-3b5a79264/" } },
      { name: "Muhamad Rendi Raditya Pribadie", position: "Regular Night", image: rendiImg, socialLinks: { instagram: "https://www.instagram.com/muhamadrendi_20", linkedin: "https://www.linkedin.com/in/muhamad-rendi-b35866380/" } },
      { name: "Suci Khadijah Siregar", position: "Regular Night", image: suciImg, socialLinks: { instagram: "https://www.instagram.com/sucikhadijaah", linkedin: "https://www.linkedin.com/in/suci-khadijah-siregar-98a885327" } },
    ]
  },
  { id: "mosd", title: "MOSD",
    ministers: [
      { name: "Amebeatrix Celine Dwisyaputri", position: "Minister of MOSD", image: amebeatrixImg, socialLinks: { instagram: "https://www.instagram.com/amebeatrix_bc", linkedin: "https://www.linkedin.com/in/amebeatrix-celine-dwisyaputri" }, imageClass: "scale-[0.80] origin-bottom" },
    ],
    members: [
      { name: "Kevin Immanuel Chang", position: "Advocation", image: kevinImg, socialLinks: { instagram: "https://www.instagram.com/heykvinn", linkedin: "https://www.linkedin.com/in/kevin-immanuel-chang" }, imageClass: "scale-[0.80] origin-bottom" },
      { name: "Yuliani Sukarni Zebua", position: "Advocation", image: yulianiImg, socialLinks: { instagram: "https://www.instagram.com/zhe_liani", linkedin: "https://www.linkedin.com/in/yuliani-sukarni-zebua", imageClass: "scale-[0.80] origin-bottom" }},
      { name: "Grace Shela Rotua Natalie Butar Butar", position: "Research & Development", image: graceShelaImg, socialLinks: { instagram: "https://www.instagram.com/selaa.g_", linkedin: "https://www.linkedin.com/in/grace-shela-rotua" }, imageClass: "scale-[0.80] origin-bottom" },
      { name: "Muhammad Azzikra", position: "Research & Development", image: azzikraImg, socialLinks: { instagram: "https://www.instagram.com/mhmdzikk", linkedin: "https://www.linkedin.com/in/muhammad-azzikra" }, imageClass: "scale-[0.80] origin-bottom" },
      { name: "Glory Kristy Widjojo", position: "Skill & Knowledge", image: gloryImg, socialLinks: { instagram: "https://www.instagram.com/linum.sage", linkedin: "https://www.linkedin.com/in/glorykristy" } },
      { name: "Wahyu Hidayat Saputra", position: "Skill & Knowledge", image: wahyuImg, socialLinks: { instagram: "https://www.instagram.com/why_hy7", linkedin: "https://www.linkedin.com/in/wahyu-hidayat-saputra" } },
      { name: "Salwa Ade Aprilia Dai", position: "Character Building", image: salwaImg, socialLinks: { instagram: "https://www.instagram.com/prilia.0_0", linkedin: "https://www.linkedin.com/in/salwa-ade-aprilia-dai" } },
    ]
  },
  { id: "moc", title: "MOC",
    ministers: [
      { name: "Citra Chyntia Ummulhaq", position: "Minister of MOC", image: citraImg, socialLinks: { instagram: "https://www.instagram.com/citrachyntia_", linkedin: "https://www.linkedin.com/in/citra-chyntia-ummulhaq" } },
      { name: "Aqela Firyal Zahira", position: "Vice Minister of MOC", image: aqelaImg, socialLinks: { instagram: "https://www.instagram.com/qel_firry", linkedin: "https://www.linkedin.com/in/aqela-firyal-zahira" } },
    ],
    members: [ 
      { name: "Odilia Miyagi Jessica", position: "External Affairs", image: odiliaImg, socialLinks: { instagram: "https://www.instagram.com/namjcs_", linkedin: "https://www.linkedin.com/in/odilia-miyagi-jessica" }, imageClass: "scale-[0.80] origin-bottom" },
      { name: "Steve Immanuel Andaria", position: "External Affairs", image: steveImg, socialLinks: { instagram: "https://www.instagram.com/imm.stevee", linkedin: "https://www.linkedin.com/in/steve-andaria" }, imageClass: "scale-[0.80] origin-bottom" },
      { name: "Andini Nurfitriani", position: "Internal Affairs", image: andiniImg, socialLinks: { instagram: "https://www.instagram.com/andnnrftrnii_", linkedin: "https://www.linkedin.com/in/andini-nurfitriani" }, imageClass: "scale-[0.80] origin-bottom" },
      { name: "Putri Meirthalia Eka Wening", position: "Internal Affairs", image: putriImg, socialLinks: { instagram: "https://www.instagram.com/merthalkw", linkedin: "https://www.linkedin.com/in/putri-meirthalia-eka-wening" }, imageClass: "scale-[0.80] origin-bottom" },
      { name: "Tanesha Adrelyne", position: "Internal Affairs", image: taneshaImg, socialLinks: { instagram: "https://www.instagram.com/tnsha_lyne", linkedin: "https://www.linkedin.com/in/tanesha-andrelyne" }, imageClass: "scale-[0.80] origin-bottom" },
      { name: "Alviano Fredo Immanuel Rambulangi", position: "Multimedia", image: alvianoImg, socialLinks: { instagram: "https://www.instagram.com/aruviano", linkedin: "https://www.linkedin.com/in/alviano-f-i-r-🥶" }, imageClass: "scale-[0.80] origin-bottom" },
      { name: "Haura Fathya Agniaputri", position: "Multimedia", image: hauraImg, socialLinks: { instagram: "https://www.instagram.com/haurafthya", linkedin: "https://www.linkedin.com/in/haura-fathya-agniaputri" }, imageClass: "scale-[0.80] origin-bottom" },
      { name: "M Arief Khumaidurrohman", position: "Multimedia", image: ariefImg, socialLinks: { instagram: "https://www.instagram.com/arriefkm", linkedin: "https://www.linkedin.com/in/m-arief-khumaidurrohman" }, imageClass: "scale-[0.80] origin-bottom" },
      { name: "Nabilla Alifya Khaerunnisa", position: "Multimedia", image: nabillaImg, socialLinks: { instagram: "https://www.instagram.com/bylaavy__", linkedin: "https://www.linkedin.com/in/nabilla-alifya-khaerunnisa" }, imageClass: "scale-[0.80] origin-bottom" },
      { name: "Revalina Safitri Harahap", position: "Multimedia", image: revaImg, socialLinks: { instagram: "https://www.instagram.com/revalinvn", linkedin: "https://www.linkedin.com/in/revalina-safitri-harahap" }, imageClass: "scale-[0.80] origin-bottom" },
      { name: "Gabriel Hamonangan Lumban Tobing", position: "Web Developer", image: gabrielImg, socialLinks: { instagram: "https://www.instagram.com/gbrlhm", linkedin: "http://www.linkedin.com/in/gabrielhamonangan" }, imageClass: "scale-[0.80] origin-bottom" },
      { name: "Muhammad Dhiya Ulhaq", position: "Web Developer", image: dhiyaImg, socialLinks: { instagram: "https://www.instagram.com/muhammaddhiya._", linkedin: "https://www.linkedin.com/in/m-dhiya-ulhaq" }, imageClass: "scale-[0.80] origin-bottom" },
      { name: "Dona Audy Nayoris", position: "Social Media Specialist", image: donaImg, socialLinks: { instagram: "https://www.instagram.com/donaaaudy", linkedin: "https://www.linkedin.com/in/dona-audy-nayoris" }, imageClass: "scale-[0.80] origin-bottom" },
      { name: "Felia Oktavia", position: "Social Media Specialist", image: feliImg, socialLinks: { instagram: "https://www.instagram.com/pelyww", linkedin: "https://www.linkedin.com/in/felia-oktavia" }, imageClass: "scale-[0.80] origin-bottom" },
      { name: "Livia Sativa", position: "Social Media Specialist", image: liviaImg, socialLinks: { instagram: "https://www.instagram.com/livviastv", linkedin: "https://www.linkedin.com/in/livia-sativa" } },
      { name: "Rafael Ardiansyah", position: "Social Media Specialist", image: rafaelImg, socialLinks: { instagram: "https://www.instagram.com/__rafaelardsyh", linkedin: "https://www.linkedin.com/in/rafael-ardiansyah" }, imageClass: "scale-[0.80] origin-bottom" }
    ]
  },
];

const EmptyPhotoCard = ({ name, position, image }) => (
  <div className="flex flex-col items-center gap-2 p-2">
    <div className="w-28 h-36 lg:w-36 lg:h-44 rounded-xl overflow-hidden bg-gray-700/50 border-2 border-dashed border-gray-500 flex items-center justify-center">
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover object-top" />
      ) : (
        <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )}
    </div>
    <p className="text-center font-semibold text-sm text-white">{name}</p>
    <p className="text-center text-xs text-gray-400">{position}</p>
  </div>
);

const MinistrySection = ({ title, ministers = [], members = [] }) => (
  <div className="w-full px-8 lg:px-16 py-10 border-t border-white/10">
    <div className="w-full py-8 text-center" style={{ fontFamily: "Poppins" }}>
      <h2 className="text-4xl lg:text-6xl font-bold">{title}</h2>
    </div>
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-start gap-4">
      <div className="w-full flex flex-col items-center">
        <div className={`w-full grid gap-2 ${ministers.length === 1 ? "flex justify-center" : "grid-cols-2"}`}>
          {ministers.map((m, i) => (
            <div key={i} className="flex justify-center items-center">
              <CardMinister name={m.name} position={m.position} image={m.image} socialLinks={m.socialLinks} imageClass={m.imageClass || ""} size="lg" />
            </div>
          ))}
        </div>
        <div className="w-full mt-8 text-center" style={{ fontFamily: "Poppins" }}>
          <h2 className="text-[22px] lg:text-4xl font-semibold">
            {ministers.length === 1 ? `Minister of ${title}` : `Minister & Vice Minister of ${title}`}
          </h2>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-8 lg:mt-0">
        <h2 className="text-3xl font-semibold mb-6">Members of {title}</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4 lg:gap-6 lg:gap-y-8 place-items-center">
          {members.map((m, i) => (
            m.image ? (
              <CardMinister key={i} name={m.name} position={m.position} image={m.image} socialLinks={m.socialLinks || {}} imageClass={m.imageClass || ""} size="lg" />
            ) : (
              <EmptyPhotoCard key={i} name={m.name} position={m.position} />
            )
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Page = () => {
  return (
    <main className="w-full min-h-screen pb-20">
      {/* Hero Section */}
      <section className="w-full h-[86vh] bg-gray-900 flex flex-col justify-center items-center gap-4">
        <img
          src={pusblogo}
          alt="PUSB Logo"
          width={500}
          height={500}
          className="w-44 lg:w-56"
        />
        <div className="text-center px-4">
          <h2 className="text-2xl lg:text-5xl tracking-wide font-extrabold text-white">
            Cabinet Structure
          </h2>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-300">
            President University Student Board 2026
          </h2>
          <h2 className="text-2xl lg:text-4xl font-semibold text-yellow-400">
            Voxaris Cabinet
          </h2>
        </div>
      </section>

      {/* Ministry Sections */}
      {ministeriesData.map((ministry) =>
        ministry.id === "exec" ? (
          <section key={ministry.id} className="w-full px-4 lg:px-8 py-6 flex flex-col items-center">
            <div className="w-full py-4 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold font-poppins">
                {ministry.title}
              </h2>
            </div>
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 items-center">
                <div className="sm:col-start-1 sm:col-span-1 flex justify-end">
                  <CardMinister name={ministry.ministers[1].name} position={ministry.ministers[1].position} image={ministry.ministers[1].image} socialLinks={ministry.ministers[1].socialLinks} size="lg" />
                </div>
                <div className="sm:col-start-2 sm:col-span-1 flex justify-center">
                  <CardMinister name={ministry.ministers[0].name} position={ministry.ministers[0].position} image={ministry.ministers[0].image} socialLinks={ministry.ministers[0].socialLinks} size="xl" />
                </div>
                <div className="sm:col-start-3 sm:col-span-1 flex justify-start">
                  <CardMinister name={ministry.ministers[2].name} position={ministry.ministers[2].position} image={ministry.ministers[2].image} socialLinks={ministry.ministers[2].socialLinks} size="lg" />
                </div>
              </div>
            </div>
            <div className="w-full mt-8 sm:mt-12 text-center">
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold font-poppins">
                President &amp; Vice Presidents of Voxaris Cabinet
              </h2>
            </div>
          </section>
        ) : (
          <MinistrySection key={ministry.id} title={ministry.title} ministers={ministry.ministers} members={ministry.members} />
        )
      )}
    </main>
  );
};

export default Page;
