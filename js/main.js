/* Yaosheng Technology (H.K.) — main.js
   Features: sticky header, mobile nav, product search, EN/中文 i18n switch,
   inquiry form (mailto), live chat widget, lightbox gallery, smooth anchor. */
(function () {
  'use strict';

  /* ---------- i18n ---------- */
  var I18N = {
    en: {
      'nav.about': 'About', 'nav.advantages': 'Advantages', 'nav.services': 'Services',
      'nav.products': 'Products', 'nav.gallery': 'Gallery', 'nav.applications': 'Applications',
      'nav.contact': 'Contact', 'nav.quote': 'Get a Quote',
      'hero.eyebrow': 'Authorized RF & Microwave Component Distributor since 2010',
      'hero.title': 'Yaosheng Technology<br><span class="grad">(Hong Kong) Co., Limited</span>',
      'hero.desc': 'Your reliable sourcing partner for RF & microwave components, semiconductors, connectors, sensors, relays and passive components — backed by authorized lines from world-class manufacturers.',
      'hero.cta1': 'Explore Products', 'hero.cta2': 'Request a Quote',
      'hero.stat1': 'Founded', 'hero.stat2': 'Authorized Lines', 'hero.stat3': 'Team Members', 'hero.stat4': 'Offices',
      'about.eyebrow': 'Who We Are', 'about.title': 'About Yaosheng Technology',
      'about.sub': 'Established in August 2010, we are a professional authorized distributor dedicated to RF & microwave components and electronic parts sourcing.',
      'about.cap': 'On-hand inventory & logistics management',
      'about.h3': 'Complete Distribution Solutions for RF & Microwave Components',
      'about.p1': 'Yaosheng Technology (Hong Kong) Co., Limited was founded in August 2010 with a registered capital of RMB 5,000,000. Our 13-member professional team is led by Chairman Mr. Li Bin, combining strong technical, managerial and cost-control capabilities.',
      'about.p2': 'We are authorized to distribute world-leading brands such as Dalicap, Renesas, ST, TI, NXP, SPSEMI, Murata and TDK, serving customers across telecom infrastructure, automotive electronics, IoT, security, satellite communication and industrial RF applications.',
      'about.f1': 'Founded', 'about.f2': 'Capital', 'about.f3': 'Headquarters', 'about.f4': 'Operation',
      'adv.eyebrow': 'Why Choose Us', 'adv.title': 'Competitive Advantages',
      'adv.sub': 'Three pillars built into every order: technology, management and cost.',
      'adv.t1': 'Technical Strength', 'adv.d1': 'In-depth RF & microwave domain knowledge, datasheet guidance and application-level technical support from enquiry to design-in.',
      'adv.t2': 'Management Efficiency', 'adv.d2': 'Streamlined order, logistics and documentation processes with reliable inventory control and professional export handling.',
      'adv.t3': 'Cost Advantage', 'adv.d3': 'Competitive pricing from authorized distribution channels, helping you reduce total procurement cost with guaranteed authenticity.',
      'adv.t4': 'Authorized & Genuine', 'adv.d4': 'Official authorization from world-class manufacturers ensures 100% genuine parts with full traceability.',
      'adv.t5': 'Fast Response', 'adv.d5': 'Quick quotation turnaround and responsive support via phone, email and online inquiry channels.',
      'adv.t6': 'Global Sourcing', 'adv.d6': 'Sourcing across worldwide supply chains with flexible stocking and delivery arrangements.',
      'svc.eyebrow': 'How We Work', 'svc.title': 'Our Service Process',
      'svc.sub': 'A clear four-step process from first enquiry to after-sales support.',
      'svc.s1': 'Inquiry', 'svc.s1d': 'Send us your BOM, part numbers or requirements via the inquiry form or email.',
      'svc.s2': 'Quotation & Technical Support', 'svc.s2d': 'Receive a competitive quote with availability, pricing and technical guidance.',
      'svc.s3': 'Order & Logistics', 'svc.s3d': 'Confirm order, arrange payment, export documentation and worldwide shipping.',
      'svc.s4': 'After-Sales', 'svc.s4d': 'Ongoing support with quality assurance and responsive after-sales service.',
      'prod.eyebrow': 'What We Distribute', 'prod.title': 'Authorized & Distribution Product Lines',
      'prod.sub': 'Five major categories with authorized brands: Dalicap, Renesas, ST, TI, NXP, SPSEMI, Murata, TDK.',
      'prod.search_label': 'Search products', 'prod.search_ph': 'Search products / brands / keywords...',
      'prod.p1': 'Semiconductors', 'prod.p1d': 'RF amplifiers, switches, ICs, MCUs and discrete semiconductors from authorized lines.',
      'prod.p2': 'Connectors', 'prod.p2d': 'RF connectors, cable assemblies and interconnect solutions for telecom and industrial use.',
      'prod.p3': 'Sensors', 'prod.p3d': 'MEMS and general-purpose sensors for smart home, IoT, automotive and industrial systems.',
      'prod.p4': 'Relays', 'prod.p4d': 'Signal and power relays, RF switches and switching devices for reliable control.',
      'prod.p5': 'Passive Components', 'prod.p5d': 'Capacitors, inductors, resistors, filters and other passive components for RF circuits.',
      'prod.brands': 'Authorized Brands',
      'gal.eyebrow': 'Use Cases', 'gal.title': 'Application Gallery',
      'gal.sub': 'Real-world RF & microwave application scenarios we support.',
      'gal.g1': 'Telecom Base Stations', 'gal.g2': 'Satellite Communication', 'gal.g3': 'Automotive Electronics',
      'gal.g4': 'Smart Home & IoT', 'gal.g5': 'Security & Surveillance', 'gal.g6': 'RF Testing & Measurement',
      'app.eyebrow': 'Where We Serve', 'app.title': 'Applications',
      'app.sub': 'Components supplied for a wide range of RF & microwave applications.',
      'br.eyebrow': 'Trusted Partners', 'br.title': 'Brands & Partners',
      'br.sub': 'Authorized distribution brands and long-term business partners.',
      'ct.eyebrow': 'Get in Touch', 'ct.title': 'Contact Us',
      'ct.sub': 'Send your inquiry — our team will respond within 1 business day.',
      'ct.form_title': 'Online Inquiry', 'ct.fname': 'Your Name *', 'ct.femail': 'Email *',
      'ct.fcompany': 'Company', 'ct.fproduct': 'Product / Part Number', 'ct.fmsg': 'Message *',
      'ct.submit': 'Send Inquiry', 'ct.tip': 'Your inquiry will open in your mail client, addressed to sales@ystech-hk.com.',
      'ft.desc': 'Authorized distributor of RF & microwave components, semiconductors, connectors, sensors, relays and passive components.',
      'ft.nav': 'Navigation', 'ft.contact': 'Contact',
      'ft.rights': '© 2026 Yaosheng Technology (Hong Kong) Co., Limited. All rights reserved.',
      'chat.title': 'Live Chat', 'chat.welcome': 'Hi! Thanks for visiting Yaosheng Technology. Please leave your part number and quantity, our sales team will reply via email shortly.',
      'chat.ph': 'Type your message...', 'chat.send': 'Send'
    },
    zh: {
      'nav.about': '关于我们', 'nav.advantages': '核心优势', 'nav.services': '服务流程',
      'nav.products': '产品线', 'nav.gallery': '应用图册', 'nav.applications': '应用领域',
      'nav.contact': '联系我们', 'nav.quote': '在线询价',
      'hero.eyebrow': '授权 RF & 微波元件分销商 · 始于 2010',
      'hero.title': '耀盛科技<br><span class="grad">（香港）有限公司</span>',
      'hero.desc': '您值得信赖的射频微波元件、半导体、连接器、传感器、继电器及无源元件采购伙伴——背靠全球一线制造商的官方授权。',
      'hero.cta1': '浏览产品', 'hero.cta2': '立即询价',
      'hero.stat1': '成立年份', 'hero.stat2': '授权品牌', 'hero.stat3': '专业团队', 'hero.stat4': '双地办公',
      'about.eyebrow': '公司简介', 'about.title': '关于耀盛科技',
      'about.sub': '公司成立于 2010 年 8 月，是专注于 RF & 微波元件及电子元器件分销的专业授权代理商。',
      'about.cap': '现货库存与物流管理',
      'about.h3': 'RF & 微波元件一站式分销解决方案',
      'about.p1': '耀盛科技（香港）有限公司成立于 2010 年 8 月，注册资本人民币 500 万元，由董事长李斌先生带领 13 人专业团队，兼具技术、管理与成本控制优势。',
      'about.p2': '公司授权代理 Dalicap、Renesas、ST、TI、NXP、SPSEMI、Murata、TDK 等世界知名品牌，服务覆盖通信基础设施、汽车电子、物联网、安防、卫星通信及工业射频等应用。',
      'about.f1': '成立时间', 'about.f2': '注册资本', 'about.f3': '总部', 'about.f4': '运营中心',
      'adv.eyebrow': '选择我们的理由', 'adv.title': '核心竞争优势',
      'adv.sub': '每一个订单背后的三大支柱：技术、管理与成本。',
      'adv.t1': '技术实力', 'adv.d1': '深厚的射频微波领域知识，从询价到设计导入提供数据手册指导与应用级技术支持。',
      'adv.t2': '管理效率', 'adv.d2': '标准化的订单、物流与文档流程，配合可靠的库存管理与专业出口操作。',
      'adv.t3': '成本优势', 'adv.d3': '经由授权分销渠道获得有竞争力的价格，在确保原装正品的前提下降低总采购成本。',
      'adv.t4': '授权正品', 'adv.d4': '来自世界级制造商的官方授权，确保 100% 原装正品、全程可追溯。',
      'adv.t5': '快速响应', 'adv.d5': '电话、邮件与在线询价多渠道快速报价与响应支持。',
      'adv.t6': '全球采购', 'adv.d6': '覆盖全球供应链的采购能力，灵活安排备货与交付。',
      'svc.eyebrow': '服务模式', 'svc.title': '服务流程',
      'svc.sub': '从首次询价到售后支持的清晰四步流程。',
      'svc.s1': '询价', 'svc.s1d': '通过在线询价表单或邮件发送您的 BOM、型号或需求。',
      'svc.s2': '报价与技术支援', 'svc.s2d': '获得含货期、价格与技术建议的竞争性报价。',
      'svc.s3': '下单与物流', 'svc.s3d': '确认订单、安排付款、出口单据与全球运输。',
      'svc.s4': '售后服务', 'svc.s4d': '持续的质量保障与快速响应的售后支持。',
      'prod.eyebrow': '分销产品', 'prod.title': '授权与分销产品线',
      'prod.sub': '五大品类，授权品牌：Dalicap、Renesas、ST、TI、NXP、SPSEMI、Murata、TDK。',
      'prod.search_label': '搜索产品', 'prod.search_ph': '搜索产品 / 品牌 / 关键词...',
      'prod.p1': '半导体', 'prod.p1d': '授权产线射频放大器、开关、IC、MCU 及分立半导体器件。',
      'prod.p2': '连接器', 'prod.p2d': '射频连接器、线缆组件及面向通信与工业应用的互连方案。',
      'prod.p3': '传感器', 'prod.p3d': '面向智能家居、物联网、汽车与工业系统的 MEMS 及通用传感器。',
      'prod.p4': '继电器', 'prod.p4d': '信号与功率继电器、射频开关及可靠控制用切换器件。',
      'prod.p5': '无源元件', 'prod.p5d': '电容、电感、电阻、滤波器及射频电路用其它无源元件。',
      'prod.brands': '授权品牌',
      'gal.eyebrow': '应用案例', 'gal.title': '应用图册',
      'gal.sub': '我们支持的 RF & 微波真实应用场景。',
      'gal.g1': '通信基站', 'gal.g2': '卫星通信', 'gal.g3': '汽车电子',
      'gal.g4': '智能家居与物联网', 'gal.g5': '安防监控', 'gal.g6': '射频测试与测量',
      'app.eyebrow': '服务领域', 'app.title': '应用领域',
      'app.sub': '为广泛的 RF & 微波应用供应元器件。',
      'br.eyebrow': '合作伙伴', 'br.title': '品牌与合作伙伴',
      'br.sub': '授权分销品牌与长期业务合作伙伴。',
      'ct.eyebrow': '取得联系', 'ct.title': '联系我们',
      'ct.sub': '发送您的询价，团队将在 1 个工作日内回复。',
      'ct.form_title': '在线询价', 'ct.fname': '您的姓名 *', 'ct.femail': '邮箱 *',
      'ct.fcompany': '公司', 'ct.fproduct': '产品 / 料号', 'ct.fmsg': '留言 *',
      'ct.submit': '发送询价', 'ct.tip': '提交后将在您的邮件客户端打开询价邮件，收件人为 sales@ystech-hk.com。',
      'ft.desc': 'RF & 微波元件、半导体、连接器、传感器、继电器及无源元件的授权分销商。',
      'ft.nav': '导航', 'ft.contact': '联系方式',
      'ft.rights': '© 2026 耀盛科技（香港）有限公司 版权所有。',
      'chat.title': '在线客服', 'chat.welcome': '您好！感谢访问耀盛科技。请留下料号与数量，销售团队将尽快通过邮件回复您。',
      'chat.ph': '请输入您的问题...', 'chat.send': '发送'
    }
  };

  var LANG_KEY = 'ys_lang';
  var current = localStorage.getItem(LANG_KEY) || 'en';
  if (!I18N[current]) current = 'en';

  function applyLang(lang) {
    current = lang;
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
    document.documentElement.setAttribute('data-lang', lang);
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      var val = I18N[lang][key];
      if (val === undefined) continue;
      if (val.indexOf('<') !== -1) { els[i].innerHTML = val; }
      else { els[i].textContent = val; }
    }
    var phs = document.querySelectorAll('[data-i18n-ph]');
    for (var j = 0; j < phs.length; j++) {
      var pkey = phs[j].getAttribute('data-i18n-ph');
      var pval = I18N[lang][pkey];
      if (pval !== undefined) phs[j].setAttribute('placeholder', pval);
    }
    var sw = document.getElementById('langSwitch');
    if (sw) sw.textContent = lang === 'zh' ? 'EN' : '中文';
    localStorage.setItem(LANG_KEY, lang);
  }

  /* ---------- Header / nav ---------- */
  var header = document.querySelector('.site-header');
  function onScroll() { if (header) header.classList.toggle('scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('open');
      mainNav.classList.toggle('open');
    });
    mainNav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { navToggle.classList.remove('open'); mainNav.classList.remove('open'); }
    });
  }

  var langSwitch = document.getElementById('langSwitch');
  if (langSwitch) {
    langSwitch.addEventListener('click', function () {
      applyLang(current === 'zh' ? 'en' : 'zh');
    });
  }

  /* ---------- Product search ---------- */
  var searchInput = document.getElementById('productSearch');
  var searchStatus = document.getElementById('searchStatus');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      var q = searchInput.value.trim().toLowerCase();
      var cards = document.querySelectorAll('.product-card');
      var shown = 0;
      for (var i = 0; i < cards.length; i++) {
        var c = cards[i];
        var text = (c.textContent + ' ' + (c.getAttribute('data-tags') || '')).toLowerCase();
        var match = q === '' || text.indexOf(q) !== -1;
        c.classList.toggle('hide', !match);
        if (match) shown++;
      }
      if (searchStatus) {
        if (q === '') { searchStatus.hidden = true; }
        else if (shown === 0) { searchStatus.hidden = false; searchStatus.textContent = 'No matching products found. Try another keyword.'; }
        else { searchStatus.hidden = false; searchStatus.textContent = shown + ' product(s) found.'; }
      }
    });
  }

  /* ---------- Inquiry form (mailto) ---------- */
  var form = document.getElementById('inquiryForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('fname').value.trim();
      var email = document.getElementById('femail').value.trim();
      var company = document.getElementById('fcompany').value.trim();
      var product = document.getElementById('fproduct').value.trim();
      var msg = document.getElementById('fmsg').value.trim();
      if (!name || !email || !msg) { alert('Please fill in the required fields (Name, Email, Message).'); return; }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { alert('Please enter a valid email address.'); return; }
      var subject = '[Website Inquiry] ' + (product || 'General inquiry');
      var body = 'Name: ' + name + '\nEmail: ' + email + '\nCompany: ' + (company || '-') + '\nProduct / Part Number: ' + (product || '-') + '\n\nMessage:\n' + msg;
      var mailto = 'mailto:sales@ystech-hk.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      window.location.href = mailto;
      var tip = form.querySelector('.form-tip');
      if (tip) {
        tip.textContent = 'Inquiry draft opened in your mail client. You may also email sales@ystech-hk.com directly.';
        tip.style.color = '#7dd3fc';
      }
    });
  }

  /* ---------- Chat widget ---------- */
  var chatToggle = document.getElementById('chatToggle');
  var chatPanel = document.getElementById('chatPanel');
  var chatInput = document.getElementById('chatInput');
  var chatSend = document.getElementById('chatSend');
  var chatBody = document.querySelector('.chat-body');
  if (chatToggle && chatPanel) {
    chatToggle.addEventListener('click', function () {
      chatPanel.hidden = !chatPanel.hidden;
      if (!chatPanel.hidden && chatInput) chatInput.focus();
    });
  }
  function appendChat(text, bot) {
    if (!chatBody) return;
    var p = document.createElement('p');
    p.className = 'chat-msg' + (bot ? ' bot' : '');
    p.textContent = text;
    chatBody.appendChild(p);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  if (chatSend && chatInput) {
    function sendChat() {
      var v = chatInput.value.trim();
      if (!v) return;
      appendChat(v, false);
      chatInput.value = '';
      setTimeout(function () {
        appendChat('Thanks for your message! For faster support, please email sales@ystech-hk.com with your part number and quantity.', true);
      }, 700);
    }
    chatSend.addEventListener('click', sendChat);
    chatInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') sendChat(); });
  }

  /* ---------- Lightbox ---------- */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');
  if (lightbox && lightboxImg) {
    document.querySelectorAll('.g-item img').forEach(function (img) {
      img.addEventListener('click', function () {
        lightboxImg.src = img.currentSrc || img.src;
        lightboxImg.alt = img.alt;
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
      });
    });
    function closeLb() { lightbox.hidden = true; document.body.style.overflow = ''; }
    if (lightboxClose) lightboxClose.addEventListener('click', closeLb);
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLb(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLb(); });
  }

  /* ---------- Smooth anchor with header offset ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        var y = target.getBoundingClientRect().top + window.pageYOffset - 74;
        window.scrollTo({ top: y, behavior: 'smooth' });
        history.replaceState(null, '', id);
      }
    });
  });

  /* ---------- Init ---------- */
  applyLang(current);
})();
