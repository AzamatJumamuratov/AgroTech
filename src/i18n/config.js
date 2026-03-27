// src/i18n/config.js

// Core i18next library.
import i18n from "i18next";
// Bindings for React: allow components to
// re-render when language changes.
import { initReactI18next } from "react-i18next";

i18n
  // Add React bindings as a plugin.
  .use(initReactI18next)
  // Initialize the i18next instance.
  .init({
    // Config options

    // Specifies the default language (locale) used
    // when a user visits our site for the first time.
    // We use RU here, but feel free to use
    // whichever locale you want.
    lng: localStorage.getItem("language") || "ru",

    // Fallback locale used when a translation is
    // missing in the active locale. Again, use your
    // preferred locale here.
    fallbackLng: "ru",

    // Enables useful output in the browser’s
    // dev console.
    debug: false,

    // Normally, we want `escapeValue: true` as it
    // ensures that i18next escapes any code in
    // translation messages, safeguarding against
    // XSS (cross-site scripting) attacks. However,
    // React does this escaping itself, so we turn
    // it off in i18next.
    interpolation: {
      escapeValue: false,
    },

    // Translation messages. Add any languages
    // you want here.
    resources: {
      ru: {
        // `translation` is the default namespace.
        // More details about namespaces shortly.
        translation: {
          search: "Поиск по сайту..",
          link_home: "Главная",
          link_about: "О компании",
          link_projects: "Проекты",
          link_agroschool: "Агрошкола",
          link_partners: "Партнеры",
          link_news: "Новости",
          link_contacts: "Контакты",
          link_chat: "Чат",
          chat_title: "AgroTech Чат",
          chat_description: "Эта функция скоро появится. Следите за обновлениями!",
          footer_contacts: "Контактная информация",
          footer_links: "Быстрые ссылки",
          banner_title: "Развиваем сельское хозяйство будущего",
          banner_desc:
            "Инновационные решения для увеличения сельскохозяйственной продукции и устойчивого развития агросектора",
          banner_btn: "Связаться с нами",
          lastNews_title: "Последние новости",
          lastNews_link: "Посмотреть все",
          about_company_title: "О Компании",
          // about_company_desc:
          //   "Наша сельскохозяйственная компания специализируется на увеличении сельскохозяйственной продукции и внедрении современных технологий агросектор.",
          projects_title: "Наши проекты",
          partners_title: "Наши партнеры",
          partners_desc:
            "Мы сотрудничаем с ведущими организациями в области сельского хозяйства как на национальном, так и на международном уровне.",
          news_title: "Новости и объявления",
          news_item_others_text: "Другие интересные Новости",
          contacts_title: "Свяжитесь с нами",
          projects_form_title: "Форма для связи по проектам",
          projects_form_button: "Отправить Запрос",
          projects_form_input_name: "Название проекта",
          projects_form_message: "Ваше сообщение",
          partners_info: "Информация для инвесторов",
          partners_info_text:
            "Мы открыты для сотрудничества с инвесторами, заинтересованными в развитии устойчивого сельского хозяйства и внедрении инновационных технологий.",
          projects_item_others_text: "Другие интересные Проекты",
          contacts_form_title: "Форма для связи по проектам",
          contacts_form_button: "Отправить сообщение",
          contacts_form_name: "Имя*",
          contacts_form_email: "Email*",
          contacts_form_phone: "Телефон*",
          contacts_form_message: "Сообщение*",
          agroschool_title: "Сельскохозяйственная школа",
          agroschool_desc:
            "Наша агрошкола предоставляет современное образование в области сельского хозяйства, готовя квалифицированных специалистов для агросектора.",
          agroschool_directions: "Основные направления обучения:",
          agroschool_l1: "Растениеводство и агрономия",
          agroschool_l2: "Животноводство и ветеринария",
          agroschool_l3: "Сельскохозяйственная техника",
          agroschool_l4: "Экологическое земледелие",
          agroschool_l5: "Агробизнес и управление",
          homepage_empty: "Нет Недавних новостей для текущего языка...",
          about_empty: "Информации нет на выбранном языке.",
          projects_empty: "Нет доступных проектов на выбранном языке.",
          partners_empty: "Нет партнеров для текущего языка...",
          news_empty: "Нет новостей на выбранном языке или по запросу.",
          empty: "нет данных",
          news_search_empty: "не нашлось данных по поиску",
        },
      },
      kk: {
        translation: {
          search: "Saytta izlew...",
          link_home: "Bas bet",
          link_about: "Kompaniya haqqında",
          link_projects: "Joybarlar",
          link_agroschool: "Agromektep",
          link_partners: "Sherikler",
          link_news: "Jańalıqlar",
          link_contacts: "Baylanıs",
          link_chat: "Chat",
          chat_title: "AgroTech Chat",
          chat_description: "Bul funkciya jaqın arada payda boladı. Jańalıqlardı gútiń!",
          footer_contacts: "Baylanıs maǵlıwmatları",
          footer_links: "Tez siltemeler",
          banner_title: "Keleshek awıl xojalıǵın rawajlandırıw",
          banner_desc:
            "Awıl xojalıǵı ónimlerin kóbeytiw hám agrosektrdi turaqlı rawajlandırıw ushın innovaciyalıq sheshimler",
          banner_btn: "Biz benen baylanısıń",
          lastNews_title: "Sońǵı jańalıqlar",
          lastNews_link: "Bárin kóriw",
          about_company_title: "Kompaniya haqqında",
          // about_company_desc:
          //   "Biziń awıl xojalıǵı kompaniyamız awıl xojalıǵı ónimlerin kóbeytiw hám agrosektorǵa zamanagóy texnologiyalardı engiziwge qánigelesken.",
          projects_title: "Bizdiń proektlerimiz",
          partners_title: "Bizdiń sheriklerimiz",
          partners_desc:
            "Biz milliy hám xalıqaralıq kólemde awıl xojalıǵı tarawında jetekshi shólkemler menen birge islesip kelmektemiz.",
          news_title: "Jańalıqlar hám jaŕıyalawlar",
          news_item_others_text: "Basqa qızıqlı jańalıqlar",
          contacts_title: "Bizben baylanısıń",
          projects_form_title: "Joybarlar boyınsha baylanıs forması",
          projects_form_button: "Soraw jiberiw",
          projects_form_input_name: "Joybardıń atı",
          projects_form_message: "Xabarińız",
          partners_info: "Investorlar ushın maǵlıwmat",
          partners_info_text:
            "Biz turaqlı awıl xojalıǵın rawajlandırıw hám innovaciyalıq texnologiyalardı engiziwden mápdar investorlar menen birge islesiw ushın ashıqpız.",
          projects_item_others_text: "Basqa da qızıqlı joybarlar",
          contacts_form_title: "Joybarlar ushın baylanıs forması",
          contacts_form_button: "Xabardi jiberiw",
          contacts_form_name: "Atıńız*",
          contacts_form_email: "Email Pochtańız*",
          contacts_form_phone: "Telefon Nomerińiz*",
          contacts_form_message: "Xabar*",
          agroschool_title: "Awıl xojalıǵı mektebi",
          agroschool_desc:
            "Agromektebimizde awıl xojalıǵı tarawında zamanagóy bilim berilip, agrar taraw ushın maman qánigeler tayarlanbaqta.",
          agroschool_directions: "Tiykarǵi oqıw baǵıtları:",
          agroschool_l1: "Ósimlikshılıq hám agronomiya,",
          agroschool_l2: "Sharwashılıq hám veterinariya,",
          agroschool_l3: "Awıl xojalıǵı texnikası,",
          agroschool_l4: "Ekologiyalıq diyqanshılıq,",
          agroschool_l5: "Agrobiznes hám basqarıw,",
          homepage_empty: "Házirgi til ushın sońǵı jańalıqlar joq...",
          about_empty: "Tanlangan tilde magliwmat joq.",
          projects_empty: "Tańlanǵan tilde joybarlar joq.",
          partners_empty: "Házirgi til ushın Sherikler joq...",
          news_empty: "Tańlanǵan tilde yamasa soraw boyınsha jańalıq joq.",
          empty: "maǵlıwmat joq",
          news_search_empty: "izlengen maǵlıwmatlar tabılmadı",
        },
      },
      uz: {
        translation: {
          search: "Saytdan izlash...",
          link_home: "Asosiy",
          link_about: "Kompaniya haqida",
          link_projects: "Loyihalar",
          link_agroschool: "Agromaktab",
          link_partners: "Hamkorlar",
          link_news: "Yangiliklar",
          link_contacts: "Kontaktlar",
          link_chat: "Chat",
          chat_title: "AgroTech Chat",
          chat_description: "Bu funksiya tez orada paydo bo'ladi. Yangiliklarni kuzatib boring!",
          footer_contacts: "Aloqa ma’lumotlari",
          footer_links: "Tezkor havolalar",
          banner_title: "Kelajak qishloq xo‘jaligini rivojlantiramiz",
          banner_desc:
            "Qishloq xo‘jaligi mahsulotlarini ko‘paytirish va agrosektorni barqaror rivojlantirish uchun innovatsion yechimlar",
          banner_btn: "Biz bilan aloqa",
          lastNews_title: "So‘nggi yangiliklar",
          lastNews_link: "Hammasini ko‘rish",
          about_company_title: "Kompaniya haqida",
          // about_company_desc:
          //   "Bizning qishloq xo‘jaligi kompaniyamiz qishloq xo‘jaligi mahsulotlarini ko‘paytirish va agrosektorga zamonaviy texnologiyalarni joriy etishga ixtisoslashgan.",
          projects_title: "Loyihalarimiz",
          partners_title: "Hamkorlarimiz",
          partners_desc:
            "Biz milliy va xalqaro miqyosda qishloq xo‘jaligi sohasidagi yetakchi tashkilotlar bilan hamkorlik qilamiz.",
          news_title: "Yangiliklar va e’lonlar",
          news_item_others_text: "Boshqa qiziqarli yangiliklar",
          contacts_title: "Biz bilan bog‘lanish",
          projects_form_title: "Loyiha bo‘yicha bog‘lanish formasi",
          projects_form_button: "So‘rov yuborish",
          projects_form_input_name: "Loyiha nomi",
          projects_form_message: "Xabaringiz",
          partners_info: "Investorlar uchun ma’lumot",
          partners_info_text:
            "Biz barqaror qishloq xo‘jaligini rivojlantirish va innovatsion texnologiyalarni joriy etishdan manfaatdor bo‘lgan investorlar bilan hamkorlik qilish uchun ochiqmiz.",
          projects_item_others_text: "Boshqa qiziqarli loyihalar",
          contacts_form_title: "Loyiha uchun bog‘lanish formasi",
          contacts_form_button: "Xabar yuborish",
          contacts_form_name: "Ism*",
          contacts_form_email: "Email*",
          contacts_form_phone: "Telefon*",
          contacts_form_message: "Xabar*",
          agroschool_title: "Qishloq xo‘jaligi maktabi",
          agroschool_desc:
            "Bizning agro maktab zamonaviy qishloq xo‘jaligi ta’limini taqdim etadi va agrosoha uchun malakali mutaxassislar tayyorlaydi.",
          agroschool_directions: "Asosiy o‘quv yo‘nalishlari:",
          agroschool_l1: "O‘simlikshunoslik va agronomiya",
          agroschool_l2: "Chorvachilik va veterinariya",
          agroschool_l3: "Qishloq xo‘jaligi texnikasi",
          agroschool_l4: "Ekologik dehqonchilik",
          agroschool_l5: "Agrobiznes va boshqaruv",
          homepage_empty: "Joriy til uchun oxirgi yangiliklar yo‘q...",
          about_empty: "Tanlangan tilda axborot mavjud emas.",
          projects_empty: "Tanlangan tilda hech qanday loyiha mavjud emas.",
          partners_empty: "Joriy til uchun hamkor topilmadi...",
          news_empty:
            "Tanlangan til yoki so‘rov bo‘yicha yangiliklar mavjud emas.",
          empty: "ma’lumotlar yo‘q",
          news_search_empty: "qidiruv ma’lumotlari topilmadi",
        },
      },

      en: {
        translation: {
          search: "Searching on Website...",
          link_home: "Home",
          link_about: "About Us",
          link_projects: "Projects",
          link_agroschool: "Agroschool",
          link_partners: "Partners",
          link_news: "News",
          link_contacts: "Contacts",
          link_chat: "Chat",
          chat_title: "AgroTech Chat",
          chat_description: "This feature is coming soon. Stay tuned for updates!",
          footer_contacts: "Contact Information",
          footer_links: "Quick Links",
          banner_title: "Developing the Future of Agriculture",
          banner_desc:
            "Innovative solutions for increasing agricultural production and sustainable agro-sector development",
          banner_btn: "Contact Us",
          lastNews_title: "Latest News",
          lastNews_link: "View All",
          about_company_title: "About the Company",
          // about_company_desc:
          //   "Our agricultural company specializes in increasing agricultural production and implementing modern technologies in the agro-sector.",
          projects_title: "Our Projects",
          partners_title: "Our Partners",
          partners_desc:
            "We cooperate with leading organizations in the field of agriculture both nationally and internationally.",
          projects_item_others_text: "Other interesting projects",
          news_title: "News and Announcements",
          news_item_others_text: "More interesting news",
          contacts_title: "Contact Us",
          projects_form_title: "Project Inquiry Form",
          projects_form_button: "Send Request",
          projects_form_input_name: "Project Name",
          projects_form_message: "Your Message",
          partners_info: "Investor Information",
          partners_info_text:
            "We are open to cooperating with investors interested in the development of sustainable agriculture and the implementation of innovative technologies.",
          projects_form_title: "Project Inquiry Form",
          projects_form_button: "Send Request",
          projects_form_input_name: "Project Name",
          projects_form_message: "Your Message",
          contacts_form_title: "Project Contact Form",
          contacts_form_button: "Send Message",
          contacts_form_name: "Name*",
          contacts_form_email: "Email*",
          contacts_form_phone: "Phone*",
          contacts_form_message: "Message*",
          agroschool_title: "Agricultural School",
          agroschool_desc:
            "Our agricultural school provides modern education in the field of agriculture, preparing qualified specialists for the agro-sector.",
          agroschool_directions: "Main training areas:",
          agroschool_l1: "Crop production and agronomy",
          agroschool_l2: "Animal husbandry and veterinary medicine",
          agroschool_l3: "Agricultural machinery",
          agroschool_l4: "Ecological farming",
          agroschool_l5: "Agrobusiness and management",
          homepage_empty: "No Recent News for the current language...",
          about_empty: "There is no information in the selected language.",
          projects_empty: "No projects available in the selected language.",
          partners_empty: "No partners for the current language...",
          news_empty: "No news in your preferred language or requested.",
          empty: "no data",
          news_search_empty: "no search data found",
        },
      },
    },
  });

export default i18n;
