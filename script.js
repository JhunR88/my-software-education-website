// scroll ile animasyon BAŞLANGIÇ

const elements = document.querySelectorAll(".fade-in");

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.style.transition = "0.6s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
}

// scroll ile animasyon SON











// HEADER arka plan hafif dinamik hareket efekti BAŞLANGIÇ

document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.body.style.background = `rgb(${247 - x*10}, ${249 - y*10}, 252)`;
});

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

// HEADER arka plan hafif dinamik hareket efekti  SON

















// HAKKIMDA BUTONU BAŞLANGIÇ

const aboutText = {
  tr: `Benim adım Jayhun Rahimov ve 1988 yılında Azerbaycan’ın başkenti Bakü’de doğdum. Annem, babam, ağabeyim ve ben olmak üzere dört kişilik bir ailede büyüdüm. İlk öğrenimime 1996 yılında Bakü’de başladım ve 2006 yılında başarıyla mezun oldum. Köklerimle ve doğduğum şehirde aldığım eğitimle her zaman gurur duyuyorum.

Üniversite eğitimime 2006 yılında Azerbaycan Bakü’de Film Yönetmenliği bölümünde başladım. 2008 yılında Amerika Birleşik Devletleri’nde düzenlenen “Work and Travel” programını öğrendim ve ilk yurt dışı deneyimim için bu programa katılmaya karar verdim. Programa dahil olarak New York’ta McDowell’s adlı restoranda kasiyer olarak çalıştım. Program üç ay sürdü, ardından Bakü’ye geri dönerek üniversite eğitimime devam ettim ve 2010 yılında mezun oldum.

Mezuniyetimin ardından Azerbaycan’ın Nahçıvan bölgesinde bir yıl süren zorunlu askerlik görevimi tamamladım. 2011 yılında Bakü’ye dönerek kariyer fırsatları aramaya başladım. Ne yazık ki asıl mesleğim olan yönetmenlik alanında bir iş bulamadım. Yoğun iş arayışının ardından turizm sektörüne yöneldim.

2013 yılında Hilton Baku’da oda servisi çalışanı olarak işe başladım. İki yıl boyunca otelcilik sektöründe değerli deneyimler kazandım. 2015 yılında yeni açılan Chenot Palace Health and Wellness adlı otele geçmem için bir referans aldım ve burada Yiyecek & İçecek Departmanı’nda süpervizör olarak çalışmaya başladım. Performansım takdir edildi ve üç yıl içinde Yiyecek & İçecek Müdür Yardımcılığı pozisyonuna yükseldim.

2017 yılında tekrar yurt dışında kariyer fırsatlarını araştırmaya ilgi duymaya başladım. Türkiye’nin önemli turizm merkezlerinden biri olan Antalya’da akrabalarım vardı, bu yüzden onları ziyaret ederek turizm sektörünü daha yakından tanımaya karar verdim. 2018 yılında Antalya’ya geldiğimde şehrin güzelliğinden ve turizm sektöründeki fırsatlardan etkilendim. Kısa bir iş arayışının ardından Fame Residence Lara Hotel’de ön büro personeli olarak işe başladım ve Türkiye’deki turizm kariyerime resmen adım attım.

2020 yılında küresel COVID-19 pandemisi nedeniyle profesyonel hayatım kesintiye uğradı. Ancak dünya normalleşmeye başladığında kariyerime yeniden devam ettim. Antalya’daki üst segment otellerden biri olan Güral Premier’de Guest Relations Leader olarak çalışmaya başladım. Bu görev bana misafir ilişkileri, müşteri memnuniyeti ve otelcilik hizmetleri konusunda çok değerli deneyimler kazandırdı. Bu pozisyonda iki yıl görev yaptım.

2023 yılında, beş yıldır görmediğim ailemle vakit geçirmek için Bakü’ye kısa bir ara verme kararı aldım. Ancak beklenmeyen küresel çatışmalar ve istikrarsızlık nedeniyle planladığım şekilde Türkiye’ye geri dönemedim. Neyse ki 2025 yılında tekrar Antalya’ya dönmeyi başardım ve prestijli Gloria Hotels & Resorts bünyesinde çalışmaya başladım. Hâlen burada başarılı bir şekilde çalışıyor ve görevimden memnuniyet duyuyorum.

Ayrıca son dönemde hızla gelişen yazılım sektörüne yöneldim. C# ve SQL programlama dillerinin temellerini öğrenme fırsatı bulduğum bir yazılım kursuna katıldım. Şu ana kadar üç kişisel uygulama geliştirdim. Nihai hedefim bu alanda kendimi sürekli geliştirerek üst seviye bir yazılım geliştirici (Senior Software Developer) olmaktır`,

  en: `My name is Jayhun Rahimov, and I was born in 1988 in Baku, the capital city of Azerbaijan. I come from a family of four, including my mother, father, older brother, and myself. I began my primary education in Baku in 1996 and successfully graduated from school in 2006. I am proud of my roots and the education I received in my hometown.

I began my university education in Baku, Azerbaijan in 2006, majoring in Film Directing. In 2008, I learned about the "Work and Travel" program in the USA and decided to join it for my first travel experience abroad. I participated in the program and traveled to the United States, where I worked as a cashier at McDowell’s in New York City. The program lasted for three months, after which I returned to Baku and continued my university studies. I graduated in 2010.

Following my graduation, I completed my mandatory military service in Nakhchivan, Azerbaijan, which lasted for one year. In 2011, I returned to Baku and started searching for career opportunities. Unfortunately, I couldn’t find a position related to my original profession as a director. Through intensive job searching, I eventually found my way into the tourism sector.

In 2013, I was hired by Hilton Baku as a Room Service employee. Over two years, I gained valuable experience in the hospitality industry. In 2015, I received a recommendation to join a newly opened hotel called Chenot Palace Health and Wellness. I began working there as a Supervisor in the Food & Beverage Department. My performance was recognized, and over the next three years, I was promoted to Assistant Food & Beverage Director.

In 2017, I became interested in exploring career opportunities abroad once again. I had relatives in Antalya, Turkey — a major tourism destination — so I visited them to learn more about the tourism industry there. When I arrived in 2018, I was impressed by the beauty of the city and the opportunities in the tourism sector. After a short job search, I joined Fame Residence Lara Hotel as a Front Office staff member, officially starting my tourism career in Turkey.

In 2020, my professional life was interrupted due to the global COVID-19 pandemic. However, when the world began to return to normal, I resumed my career. I joined the premium-class hotel Güral Premier in Antalya as a Guest Relations Leader. This position provided me with valuable experience in guest relations, customer satisfaction, and hospitality services in one of the most important tourism cities in the world. I held this role for two years.

In 2023, I decided to take a short break to spend time with my family in Baku, whom I hadn’t seen in over five years. Unfortunately, due to unforeseen global conflicts and instability, I was unable to return to Turkey as planned. Fortunately, in 2025, I finally managed to return to Antalya and resumed my career by joining the prestigious Gloria Hotels & Resorts. I am currently working there successfully and am very happy with my position.

In addition, I have recently turned my focus toward the rapidly growing software industry. I enrolled in a software course where I had the opportunity to learn the fundamentals of C# and SQL programming languages. So far, I have developed three personal applications. My ultimate goal is to continuously improve myself in this field and become a highly skilled senior-level software developer.`,

  ru: `Меня зовут Джейхун Рахимов, и я родился в 1988 году в Баку, столице Азербайджана. Я вырос в семье из четырёх человек: мама, папа, старший брат и я. Я начал своё начальное образование в Баку в 1996 году и успешно окончил школу в 2006 году. Я всегда горжусь своими корнями и образованием, полученным в родном городе.

Я начал своё университетское образование в 2006 году в Баку, Азербайджан, по специальности «Режиссура кино». В 2008 году я узнал о программе «Work and Travel» в США и решил принять участие в ней для своего первого опыта поездки за границу. Я участвовал в программе и поехал в США, где работал кассиром в ресторане McDowell’s в Нью-Йорке. Программа длилась три месяца, после чего я вернулся в Баку и продолжил обучение в университете, который окончил в 2010 году.

После окончания университета я прошёл обязательную военную службу в Нахчыване, Азербайджан, которая длилась один год. В 2011 году я вернулся в Баку и начал искать карьерные возможности. К сожалению, я не смог найти работу по своей первоначальной профессии режиссёра. После интенсивного поиска работы я в итоге пришёл в сферу туризма.

В 2013 году я был принят на работу в отель Hilton Baku на должность сотрудника room service. За два года я получил ценный опыт в гостиничной сфере. В 2015 году я получил рекомендацию и перешёл в новый открывшийся отель Chenot Palace Health and Wellness. Там я начал работать супервайзером в отделе Food & Beverage. Моя работа была высоко оценена, и в течение трёх лет я был повышен до должности заместителя директора отдела Food & Beverage.

В 2017 году я снова начал интересоваться карьерными возможностями за границей. У меня были родственники в Анталии, одном из крупнейших туристических центров Турции, поэтому я решил поехать туда и изучить туристическую индустрию. В 2018 году, приехав в Анталию, я был впечатлён красотой города и возможностями в туристическом секторе. После недолгого поиска работы я начал работать в отеле Fame Residence Lara в качестве сотрудника front office, официально начав свою карьеру в туризме в Турции.

В 2020 году моя профессиональная деятельность была прервана из-за глобальной пандемии COVID-19. Однако после возвращения мира к нормальной жизни я возобновил карьеру и начал работать в отеле премиум-класса Güral Premier Antalya в должности Guest Relations Leader. Эта должность дала мне ценный опыт в области работы с гостями, обслуживания клиентов и гостиничного сервиса в одном из самых важных туристических городов мира. Я проработал на этой должности два года.

В 2023 году я решил взять небольшой перерыв, чтобы провести время с семьёй в Баку, которую я не видел более пяти лет. К сожалению, из-за неожиданных глобальных конфликтов и нестабильности я не смог вернуться в Турцию, как планировал. К счастью, в 2025 году мне удалось вернуться в Анталию и продолжить карьеру, присоединившись к престижной сети Gloria Hotels & Resorts. В настоящее время я успешно работаю там и доволен своей должностью.

Кроме того, в последнее время я переключил своё внимание на быстро развивающуюся сферу программного обеспечения. Я прошёл курс программирования, где изучал основы языков C# и SQL. На данный момент я разработал три персональных приложения. Моя конечная цель — постоянно развиваться в этой области и стать высококвалифицированным разработчиком уровня Senior.`
};

let currentLang = "tr";

function openAbout(){
  document.getElementById("aboutModal").style.display = "flex";

  // her açılışta kesin Türkçe başlat
  currentLang = "tr";
  setLang("tr");
}

function closeAbout(){
  document.getElementById("aboutModal").style.display = "none";
}

function setLang(lang){
  currentLang = lang;
  document.getElementById("aboutContent").innerText = aboutText[lang];
}

// HAKKIMDA BUTONU SON




















//HAZIR OLMAYAN DERS LİNKLERİNE TIKLANINCA VERDİĞİ MESAJ BAŞLANGIÇ

document.querySelectorAll(".blocked-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    alert("Sayın öğrenci, lütfen önce Web geliştirme eğitimine gir ve bitir. Bu senin için daha uygun olacaktır.");
  });
});

//HAZIR OLMAYAN DERS LİNKLERİNE TIKLANINCA VERDİĞİ MESAJ SON