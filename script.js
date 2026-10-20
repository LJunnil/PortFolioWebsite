// Junnil Jay Estillore – portfolio script (theme, mobile menu, i18n)
const $ = (s, r = document) => r.querySelector(s);
const body = document.body;

/* ---------- Theme ---------- */
if (localStorage.getItem('theme') === 'light') body.classList.add('light-mode');
$('#theme-toggle').addEventListener('click', () => {
  body.classList.toggle('light-mode');
  localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
});

/* ---------- Mobile menu ---------- */
const burger = $('#burger'), menu = $('#menu');
const setMenu = open => { menu.classList.toggle('open', open); burger.setAttribute('aria-expanded', open); };
burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.addEventListener('click', e => { if (e.target.tagName === 'A') setMenu(false); });

/* ---------- Translations ----------
   To add a language: copy one block below, translate it, and add it to LANGS. */
const T = {
en: {'nav.home':'Home','nav.about':'About','nav.skills':'Skills','nav.work':'Work','nav.contact':'Contact',
 'hero.badge':'Available for freelance','hero.t1':'Full-Stack Developer','hero.t2':'Building digital products that work',
 'hero.desc':'5+ years of experience creating scalable, user-centric web applications that help businesses grow.',
 'hero.cta1':'View projects','hero.cta2':'Get in touch','hero.s1':'Years of experience','hero.s2':'Projects completed','hero.s3':'Client satisfaction',
 city:'Cebu, Philippines','about.t':'About me','about.h':'Crafting exceptional digital experiences',
 'about.p1':"I'm a Full-Stack Developer based in Cebu, Philippines, delivering high-quality web solutions across modern frontend frameworks, robust backend systems and intuitive mobile apps.",
 'about.p2':'From e-commerce platforms to corporate websites, I combine technical excellence with creative problem-solving to build fast, seamless applications.',
 'skills.t':'Technical skills','sk.1':'Frontend development','sk.2':'Backend development','sk.3':'Mobile development','sk.4':'CMS & e-commerce','sk.5':'Database management','sk.6':'Automation & tools',
 'work.t':'Featured projects','work.s':"Recent websites and systems I've built.",'work.all':'View all system projects',
 'c.ecom':'E-commerce platform','c.folio':'Professional portfolio','c.sys':'Internal system','c.corp':'Company website','c.brand':'Personal brand','c.author':'Author website','c.legal':'Legal services','c.health':'Healthcare platform',
 'ct.t':"Let's work together",'ct.p':'Whether you need a complete website, a mobile app, or just want to talk through an idea, reach out any time.','ct.email':'Email','ct.loc':'Location',
 'f.name':'Your name','f.email':'Your email','f.subject':'Subject','f.msg':'Your message','f.send':'Send message',sending:'Sending…',rights:'All rights reserved.'},
'zh-TW': {'nav.home':'首頁','nav.about':'關於','nav.skills':'技能','nav.work':'作品','nav.contact':'聯絡',
 'hero.badge':'接受自由接案','hero.t1':'全端開發工程師','hero.t2':'打造真正好用的數位產品',
 'hero.desc':'擁有 5 年以上經驗，專注於打造可擴充、以使用者為中心的網頁應用程式，協助企業成長。',
 'hero.cta1':'查看作品','hero.cta2':'與我聯絡','hero.s1':'年經驗','hero.s2':'完成專案','hero.s3':'客戶滿意度',
 city:'菲律賓 宿霧','about.t':'關於我','about.h':'打造出色的數位體驗',
 'about.p1':'我是常駐菲律賓宿霧的全端開發工程師，擅長現代前端框架、穩健的後端系統與直覺的行動應用程式，提供高品質的網站解決方案。',
 'about.p2':'從電商平台到企業網站，我結合技術實力與創意解決問題，打造快速、流暢的應用程式。',
 'skills.t':'技術專長','sk.1':'前端開發','sk.2':'後端開發','sk.3':'行動應用開發','sk.4':'CMS 與電商','sk.5':'資料庫管理','sk.6':'自動化與工具',
 'work.t':'精選專案','work.s':'近期完成的網站與系統。','work.all':'查看所有系統專案',
 'c.ecom':'電商平台','c.folio':'個人作品集','c.sys':'內部系統','c.corp':'企業網站','c.brand':'個人品牌','c.author':'作者網站','c.legal':'法律服務','c.health':'醫療平台',
 'ct.t':'一起合作吧','ct.p':'無論是完整網站、行動應用，或只是想聊聊想法，歡迎隨時聯絡我。','ct.email':'電子郵件','ct.loc':'所在地',
 'f.name':'您的姓名','f.email':'您的電子郵件','f.subject':'主旨','f.msg':'您的訊息','f.send':'送出訊息',sending:'傳送中…',rights:'版權所有。'},
'zh-CN': {'nav.home':'首页','nav.about':'关于','nav.skills':'技能','nav.work':'作品','nav.contact':'联系',
 'hero.badge':'接受自由职业项目','hero.t1':'全栈开发工程师','hero.t2':'打造真正好用的数字产品',
 'hero.desc':'拥有 5 年以上经验，专注于构建可扩展、以用户为中心的 Web 应用，助力企业增长。',
 'hero.cta1':'查看作品','hero.cta2':'联系我','hero.s1':'年经验','hero.s2':'完成项目','hero.s3':'客户满意度',
 city:'菲律宾 宿务','about.t':'关于我','about.h':'打造出色的数字体验',
 'about.p1':'我是常驻菲律宾宿务的全栈开发工程师，擅长现代前端框架、稳健的后端系统和直观的移动应用，提供高质量的网站解决方案。',
 'about.p2':'从电商平台到企业网站，我将技术实力与创造性思维结合，打造快速、流畅的应用。',
 'skills.t':'技术专长','sk.1':'前端开发','sk.2':'后端开发','sk.3':'移动应用开发','sk.4':'CMS 与电商','sk.5':'数据库管理','sk.6':'自动化与工具',
 'work.t':'精选项目','work.s':'近期完成的网站与系统。','work.all':'查看所有系统项目',
 'c.ecom':'电商平台','c.folio':'个人作品集','c.sys':'内部系统','c.corp':'企业网站','c.brand':'个人品牌','c.author':'作者网站','c.legal':'法律服务','c.health':'医疗平台',
 'ct.t':'一起合作吧','ct.p':'无论是完整网站、移动应用，还是只想聊聊想法，欢迎随时联系我。','ct.email':'电子邮件','ct.loc':'所在地',
 'f.name':'您的姓名','f.email':'您的邮箱','f.subject':'主题','f.msg':'您的留言','f.send':'发送消息',sending:'发送中…',rights:'版权所有。'},
es: {'nav.home':'Inicio','nav.about':'Sobre mí','nav.skills':'Habilidades','nav.work':'Trabajos','nav.contact':'Contacto',
 'hero.badge':'Disponible para freelance','hero.t1':'Desarrollador Full-Stack','hero.t2':'Creando productos digitales que funcionan',
 'hero.desc':'Más de 5 años de experiencia creando aplicaciones web escalables y centradas en el usuario que impulsan el crecimiento de los negocios.',
 'hero.cta1':'Ver proyectos','hero.cta2':'Contactar','hero.s1':'Años de experiencia','hero.s2':'Proyectos completados','hero.s3':'Satisfacción del cliente',
 city:'Cebú, Filipinas','about.t':'Sobre mí','about.h':'Creando experiencias digitales excepcionales',
 'about.p1':'Soy desarrollador Full-Stack en Cebú, Filipinas, y ofrezco soluciones web de alta calidad con frameworks frontend modernos, backends robustos y apps móviles intuitivas.',
 'about.p2':'Desde tiendas en línea hasta sitios corporativos, combino excelencia técnica y resolución creativa de problemas para crear aplicaciones rápidas y fluidas.',
 'skills.t':'Habilidades técnicas','sk.1':'Desarrollo frontend','sk.2':'Desarrollo backend','sk.3':'Desarrollo móvil','sk.4':'CMS y e-commerce','sk.5':'Gestión de bases de datos','sk.6':'Automatización y herramientas',
 'work.t':'Proyectos destacados','work.s':'Sitios web y sistemas recientes.','work.all':'Ver todos los sistemas',
 'c.ecom':'Plataforma e-commerce','c.folio':'Portafolio profesional','c.sys':'Sistema interno','c.corp':'Sitio corporativo','c.brand':'Marca personal','c.author':'Sitio de autor','c.legal':'Servicios legales','c.health':'Plataforma de salud',
 'ct.t':'Trabajemos juntos','ct.p':'Ya sea un sitio web completo, una app móvil o solo una idea, escríbeme cuando quieras.','ct.email':'Correo','ct.loc':'Ubicación',
 'f.name':'Tu nombre','f.email':'Tu correo','f.subject':'Asunto','f.msg':'Tu mensaje','f.send':'Enviar mensaje',sending:'Enviando…',rights:'Todos los derechos reservados.'}
};
const LANGS = {en:['English','EN'],'zh-TW':['繁體中文','繁'],'zh-CN':['简体中文','简'],es:['Español','ES']};

/* ---------- Detect language: saved choice > browser > time zone > English ---------- */
function detect() {
  const saved = localStorage.getItem('lang');
  if (saved && T[saved]) return saved;
  for (const l of navigator.languages || [navigator.language]) {
    const c = (l || '').toLowerCase();
    if (c === 'zh-cn' || c === 'zh-sg' || c.startsWith('zh-hans')) return 'zh-CN';
    if (c.startsWith('zh')) return 'zh-TW'; // zh-TW, zh-HK, zh-MO, bare zh
    if (T[c.slice(0, 2)]) return c.slice(0, 2);
  }
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  if (/Taipei|Hong_Kong|Macau/.test(tz)) return 'zh-TW';
  if (/Shanghai|Chongqing|Urumqi|Singapore/.test(tz)) return 'zh-CN';
  if (/Madrid|Mexico|Bogota|Lima|Buenos_Aires|Santiago/.test(tz)) return 'es';
  return 'en';
}

let lang = 'en';
function apply(code) {
  lang = code; const d = T[code];
  document.documentElement.lang = code;
  document.querySelectorAll('[data-i18n]').forEach(el => { const v = d[el.dataset.i18n]; if (v) el.textContent = v; });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { const v = d[el.dataset.i18nPh]; if (v) el.placeholder = v; });
  $('#lang-label').textContent = LANGS[code][1];
  document.querySelectorAll('#lang-list li').forEach(li => li.setAttribute('aria-selected', li.dataset.code === code));
}

const list = $('#lang-list'), btn = $('#lang-btn');
Object.entries(LANGS).forEach(([code, [name]]) => {
  const li = document.createElement('li');
  li.dataset.code = code; li.textContent = name; li.setAttribute('role', 'option'); li.tabIndex = 0;
  const pick = () => { localStorage.setItem('lang', code); apply(code); toggleList(false); };
  li.addEventListener('click', pick);
  li.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); } });
  list.appendChild(li);
});
function toggleList(open) { list.hidden = !open; btn.setAttribute('aria-expanded', open); }
btn.addEventListener('click', e => { e.stopPropagation(); toggleList(list.hidden); });
document.addEventListener('click', e => { if (!list.contains(e.target)) toggleList(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { toggleList(false); setMenu(false); } });
apply(detect());

/* ---------- Form + footer year ---------- */
$('.form').addEventListener('submit', function () {
  const b = this.querySelector('button'); b.textContent = T[lang].sending; b.disabled = true;
});
$('#year').textContent = new Date().getFullYear();
