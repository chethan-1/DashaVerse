import { useEffect, useRef } from 'react';
import './styles.css';

const BUSINESS_EMAIL = 'YOUR_EMAIL@example.com';

export default function App() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const toggle = root.querySelector('#toggle');
    const nav = root.querySelector('#navLinks');
    const bookingForm = root.querySelector('#bookingForm');
    const formNote = root.querySelector('#formNote');
    const year = root.querySelector('#year');

    const handleToggle = () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    toggle?.addEventListener('click', handleToggle);

    const navLinks = [...root.querySelectorAll('.nav-links a')];
    const closeNav = () => {
      nav.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    };
    navLinks.forEach((a) => a.addEventListener('click', closeNav));

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    }, { threshold: 0.08 });
    root.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    if (year) year.textContent = new Date().getFullYear();

    const handleSubmit = (e) => {
      e.preventDefault();
      const d = new FormData(e.currentTarget);
      const subject = encodeURIComponent('Consultation enquiry — Om Sri Siddhi Vinayaka Jyotishya Kendra');
      const body = encodeURIComponent(`Name: ${d.get('name')}\nPhone: ${d.get('phone')}\nEmail: ${d.get('email') || 'Not provided'}\nArea: ${d.get('area')}\nDate of Birth: ${d.get('dob') || 'Not provided'}\nTime of Birth: ${d.get('tob') || 'Not provided'}\nPlace of Birth: ${d.get('pob') || 'Not provided'}\nMessage: ${d.get('message') || 'Not provided'}`);
      formNote.textContent = 'Opening your email app with the consultation enquiry…';
      window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
    };
    bookingForm?.addEventListener('submit', handleSubmit);

    return () => {
      toggle?.removeEventListener('click', handleToggle);
      navLinks.forEach((a) => a.removeEventListener('click', closeNav));
      bookingForm?.removeEventListener('submit', handleSubmit);
      io.disconnect();
    };
  }, []);

  return <div ref={rootRef} dangerouslySetInnerHTML={{ __html: `
<header class="header">
<div class="container nav">
<a class="brand" href="#home"><span class="brand-mark">ॐ</span><span><span class="brand-title">Om Sri Siddhi Vinayaka</span><span class="brand-sub">Jyotishya Kendra</span></span></a>
<button aria-expanded="false" aria-label="Open menu" class="mobile-toggle" id="toggle">☰</button>
<nav class="nav-links" id="navLinks">
<a href="#home">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#testimonials">Testimonials</a><a href="#faq">FAQ</a><a href="#contact">Contact</a><a class="btn" href="#contact">Book Consultation</a>
</nav>
</div>
</header>
<main id="home">
<section class="hero"><div class="container hero-grid"><div class="reveal"><p class="eyebrow">Traditional astrology • Bengaluru</p><h1>Guidance Through the Stars,<br/><em>Clarity for Your Journey.</em></h1><p class="hero-text">Personalized astrology guidance for relationships, career, family, marriage, finance and important life decisions.</p><div class="actions"><a class="btn" href="#contact">Book a Consultation ↗</a><a class="btn btn-outline" href="https://wa.me/919900990099?text=Namaste%20Pandit%20Manjunath%2C%20I%20would%20like%20to%20book%20an%20astrology%20consultation." rel="noopener" target="_blank">Chat on WhatsApp</a></div><div class="trust"><span>20+ Years Experience</span><span>Personalized Consultations</span><span>Confidential Guidance</span></div></div>
<div class="reveal"><div class="mandala-wrap"><div class="mandala"><div class="ornament"></div><div class="cross"></div><div class="cross2"></div><div class="center-sun">☉</div><span class="z z1">♈</span><span class="z z2">♉</span><span class="z z3">♊</span><span class="z z4">♋</span><span class="z z5">♌</span><span class="z z6">♍</span><span class="z z7">♎</span><span class="z z8">♏</span><span class="z z9">♐</span><span class="z z10">♑</span><span class="z z11">♒</span><span class="z z12">♓</span></div></div><div class="hero-note">A calm, traditional approach to personal guidance</div></div></div></section>
<section class="strip"><div class="container strip-inner"><div class="strip-num">01</div><p>With more than two decades of practice, <strong>Pandit Manjunath</strong> offers thoughtful consultations rooted in traditional astrology and focused on practical guidance.</p></div></section>
<section class="section" id="about"><div class="container about-grid"><div class="label"><span>ABOUT</span><b>02</b></div><div class="portrait"><div><span>ॐ</span><small>PHOTO<br/>TO BE ADDED</small></div></div><div class="about reveal"><p class="eyebrow">Meet your astrologer</p><h2>Pandit Manjunath</h2><p class="lead">A traditional astrology practitioner with 20+ years of experience, offering one-to-one consultations in Bengaluru.</p><p>Every consultation is centered on listening carefully to the individual's question, understanding the birth details, and explaining the reading in a calm, accessible way. The intention is to provide perspective and clarity while respecting each person's choices.</p><div class="stat"><strong>20+</strong><span>Years of<br/>Experience</span></div></div></div></section>
<section class="section tinted" id="services"><div class="container"><div class="section-head reveal"><div><p class="eyebrow">What we offer</p><h2>Guidance for the questions<br/>that matter most.</h2></div><p>Choose a focused consultation or discuss your situation directly and receive guidance tailored to your needs.</p></div><div class="services">
<article class="card reveal"><div class="icon">✦</div><h3>Birth Chart / Kundli</h3><p>Understand key themes and patterns in your birth chart through a personalized reading.</p><a href="#contact">Book consultation →</a></article>
<article class="card reveal"><div class="icon">♡</div><h3>Marriage &amp; Compatibility</h3><p>Traditional compatibility guidance for marriage decisions and relationship questions.</p><a href="#contact">Book consultation →</a></article>
<article class="card reveal"><div class="icon">⌂</div><h3>Career &amp; Business</h3><p>Explore timing, direction and decision-making around career and business matters.</p><a href="#contact">Book consultation →</a></article>
<article class="card reveal"><div class="icon">◈</div><h3>Finance &amp; Wealth</h3><p>Astrological perspectives for financial planning, opportunities and important choices.</p><a href="#contact">Book consultation →</a></article>
<article class="card reveal"><div class="icon">☯</div><h3>Family &amp; Relationships</h3><p>Supportive guidance for family concerns, relationships and major life transitions.</p><a href="#contact">Book consultation →</a></article>
<article class="card reveal"><div class="icon">◷</div><h3>Muhurat &amp; Auspicious Timing</h3><p>Traditional guidance on selecting favorable timings for important occasions and activities.</p><a href="#contact">Book consultation →</a></article>
<article class="card reveal"><div class="icon">∞</div><h3>Numerology</h3><p>Personalized numerology-based insights using your relevant numbers and details.</p><a href="#contact">Book consultation →</a></article>
<article class="card reveal"><div class="icon">⌘</div><h3>Vastu Consultation</h3><p>Traditional Vastu perspectives for residential and workplace spaces.</p><a href="#contact">Book consultation →</a></article>
<article class="card reveal"><div class="icon">✧</div><h3>Personal Consultation</h3><p>Bring your specific question and receive a focused, one-to-one astrology consultation.</p><a href="#contact">Book consultation →</a></article>
</div></div></section>
<section class="section process"><div class="container"><div class="section-head reveal"><div><p class="eyebrow">How it works</p><h2>A simple, personal process.</h2></div></div><div class="steps"><div class="step reveal"><div class="step-num">01</div><h3>Share Your Details</h3><p>Provide your birth date, birth time and birth place along with the area you want to discuss.</p></div><div class="step reveal"><div class="step-num">02</div><h3>Consultation</h3><p>Discuss your questions in a private one-to-one consultation with Pandit Manjunath.</p></div><div class="step reveal"><div class="step-num">03</div><h3>Gain Clarity</h3><p>Receive a thoughtful astrology reading and practical perspective for your next steps.</p></div></div></div></section>
<section class="section why"><div class="container why-grid"><div class="reveal"><p class="eyebrow" style="color:#d7ae68">Why choose us</p><h2>A traditional approach, presented with clarity.</h2><p>Built around personal attention, confidentiality and a respectful understanding of traditional astrology.</p></div><div class="points"><div class="point reveal"><span>✦</span><div><b>20+ Years of Experience</b><p>Long-standing experience in astrology consultations.</p></div></div><div class="point reveal"><span>✦</span><div><b>Personalized Consultations</b><p>Focused on your questions, circumstances and birth details.</p></div></div><div class="point reveal"><span>✦</span><div><b>Confidential &amp; Private</b><p>A discreet setting for personal questions and concerns.</p></div></div><div class="point reveal"><span>✦</span><div><b>Traditional Knowledge</b><p>Guidance rooted in traditional Indian astrology practices.</p></div></div><div class="point reveal"><span>✦</span><div><b>Clear Communication</b><p>Readings explained in an accessible, straightforward way.</p></div></div><div class="point reveal"><span>✦</span><div><b>Online &amp; In-Person</b><p>Consultation arrangements can be discussed when booking.</p></div></div></div></div></section>
<section class="section" id="testimonials"><div class="container"><div class="section-head reveal"><div><p class="eyebrow">Testimonials</p><h2>Let your clients tell the story.</h2></div><p>These are editable placeholders. Replace them with genuine reviews before publishing.</p></div><div class="testimonials"><blockquote class="quote reveal"><div class="stars">★★★★★</div><p class="placeholder">“Add a genuine client review here. Keep it short, specific and authentic.”</p><small>Client name · Bengaluru</small></blockquote><blockquote class="quote reveal"><div class="stars">★★★★★</div><p class="placeholder">“Add a genuine client review about the consultation experience and clarity received.”</p><small>Client name · Bengaluru</small></blockquote><blockquote class="quote reveal"><div class="stars">★★★★★</div><p class="placeholder">“Add a genuine review here once you have permission to publish it.”</p><small>Client name · Bengaluru</small></blockquote></div></div></section>
<section class="section" id="faq"><div class="container faq-grid"><div class="label"><span>FAQ</span><b>08</b></div><div class="faq reveal"><details open=""><summary>What information do I need for a consultation?</summary><p>Your date of birth, exact or best-known time of birth and place of birth are useful. You can also share the specific question or life area you want to discuss.</p></details><details><summary>How long does a consultation take?</summary><p>Consultation duration can vary depending on the questions. Please confirm the expected duration when booking.</p></details><details><summary>Do you offer online consultations?</summary><p>Please contact the centre to confirm current online consultation availability and preferred platform.</p></details><details><summary>Can I ask about marriage and compatibility?</summary><p>Yes. Marriage and compatibility can be discussed as part of a personalized astrology consultation.</p></details><details><summary>Can astrology help with career decisions?</summary><p>Astrology can be used as a source of personal reflection and guidance. It should not replace professional financial, legal or career advice.</p></details><details><summary>How do I book a consultation?</summary><p>Use the booking form below, call +91 9900990099 or message the centre on WhatsApp.</p></details><details><summary>Is my consultation information kept private?</summary><p>Personal consultation information should be handled confidentially. Please discuss any specific privacy requirements when booking.</p></details></div></div></section>
<section class="cta"><div class="container"><p class="eyebrow" style="color:#d7ae68">A personal consultation</p><h2>Looking for clarity<br/>about your next step?</h2><p>Book a consultation with Pandit Manjunath.</p><div class="actions"><a class="btn btn-gold" href="#contact">Book Consultation</a><a class="btn btn-outline" href="https://wa.me/919900990099?text=Namaste%20Pandit%20Manjunath%2C%20I%20would%20like%20to%20book%20an%20astrology%20consultation." rel="noopener" style="color:#fff;border-color:#fff" target="_blank">WhatsApp Us</a></div></div></section>
<section class="section contact" id="contact"><div class="container contact-grid"><div class="reveal"><p class="eyebrow">Contact</p><h2>Start the conversation.</h2><p class="contact-intro">Reach out to schedule a consultation or ask about the right service for your situation.</p><div class="contact-list"><a class="contact-item" href="tel:+919900990099"><span>Phone / WhatsApp</span><strong>+91 9900990099</strong></a><div class="contact-item"><span>Address</span><strong>Next to Income Tax Layout Bus Stop, Chandra Layout, Bengaluru, Karnataka</strong></div><div class="contact-item"><span>Email</span><strong>EMAIL TO BE ADDED</strong></div><div class="contact-item"><span>Business Hours</span><strong>HOURS TO BE ADDED</strong></div></div></div><div class="panel reveal"><h3 style="font-size:30px;margin-top:0">Request a consultation</h3><p style="color:var(--muted);font-size:13px">Your enquiry will be prepared for email. Replace the placeholder email address in the script before publishing.</p><form id="bookingForm"><div class="form-grid"><div class="field"><label>Name<input autocomplete="name" name="name" required=""/></label></div><div class="field"><label>Phone<input autocomplete="tel" name="phone" required=""/></label></div></div><div class="form-grid"><div class="field"><label>Email<input autocomplete="email" name="email" type="email"/></label></div><div class="field"><label>Area of Consultation<select name="area"><option>Birth Chart / Kundli</option><option>Marriage &amp; Compatibility</option><option>Career &amp; Business</option><option>Finance &amp; Wealth</option><option>Family &amp; Relationships</option><option>Muhurat / Auspicious Timing</option><option>Numerology</option><option>Vastu Consultation</option><option>Personal Consultation</option></select></label></div></div><div class="form-grid"><div class="field"><label>Date of Birth<input name="dob" type="date"/></label></div><div class="field"><label>Time of Birth<input name="tob" type="time"/></label></div></div><div class="field"><label>Place of Birth<input name="pob"/></label></div><div class="field"><label>Message<textarea name="message" rows="4"></textarea></label></div><button class="btn" type="submit">Request Consultation</button><p class="form-note" id="formNote">Email and business hours are intentionally left as placeholders.</p></form></div></div></section>
</main>
<footer class="footer"><div class="container footer-grid"><div><a class="brand footer-brand" href="#home"><span class="brand-mark">ॐ</span><span><span class="brand-title">Om Sri Siddhi Vinayaka</span><span class="brand-sub">Jyotishya Kendra</span></span></a><p>Traditional astrology consultations with Pandit Manjunath in Bengaluru, focused on personal guidance, clarity and confidentiality.</p></div><div class="footer-col"><h4>Explore</h4><a href="#about">About</a><a href="#services">Services</a><a href="#testimonials">Testimonials</a><a href="#faq">FAQ</a></div><div class="footer-col"><h4>Contact</h4><a href="tel:+919900990099">+91 9900990099</a><a href="https://wa.me/919900990099" rel="noopener" target="_blank">WhatsApp</a><a href="#contact">Chandra Layout, Bengaluru</a></div></div><div class="container copyright"><span>© <span id="year"></span> Om Sri Siddhi Vinayaka Jyotishya Kendra</span><span>Astrology consultations are intended for personal guidance and should not be considered a substitute for professional medical, legal, or financial advice.</span></div></footer>

` }} />;
}
