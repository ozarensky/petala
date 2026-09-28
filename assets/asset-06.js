/* @ds-bundle: {"format":4,"namespace":"PTalaDesignSystem_7c3e0a","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"InlineLink","sourcePath":"components/core/InlineLink.jsx"},{"name":"PriceList","sourcePath":"components/core/PriceList.jsx"}],"sourceHashes":{"components/core/Button.jsx":"05517ba0f88d","components/core/InlineLink.jsx":"04a5c1c41e84","components/core/PriceList.jsx":"6f79db99658f","ui_kits/website/Home.jsx":"0a6a3d8e749c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PTalaDesignSystem_7c3e0a = window.PTalaDesignSystem_7c3e0a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function Button({
  level = 'primary',
  href,
  onClick,
  children,
  fullWidth = false,
  mobile = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const primary = level === 'primary';
  const s = {
    display: fullWidth ? 'flex' : 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    height: mobile ? 'var(--button-height-mobile)' : 'var(--button-height)',
    padding: '0 var(--button-pad-x)',
    width: fullWidth ? '100%' : undefined,
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 'var(--text-button-size)',
    lineHeight: 1,
    letterSpacing: 'var(--text-button-ls)',
    borderRadius: 'var(--radius-pill)',
    border: primary ? '1px solid transparent' : '1px solid var(--brand)',
    background: primary ? hover ? 'var(--brand-deep)' : 'var(--brand)' : hover ? 'var(--ground-soft)' : 'transparent',
    color: primary ? 'var(--button-text)' : 'var(--brand)',
    textDecoration: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    outline: focus ? '2px solid var(--accent)' : 'none',
    outlineOffset: 2,
    transition: 'background var(--motion-fast) var(--motion-ease)',
    boxShadow: 'none',
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, {
    href,
    onClick,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    type: href ? undefined : 'button',
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/InlineLink.jsx
try { (() => {
function InlineLink({
  href,
  children,
  small = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return React.createElement('a', {
    href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color: hover ? 'var(--brand)' : 'var(--accent)',
      textDecoration: 'underline',
      textUnderlineOffset: 'var(--link-underline-offset)',
      textDecorationThickness: 1,
      fontFamily: 'var(--font-sans)',
      fontSize: small ? 'var(--text-small-size)' : 'inherit',
      lineHeight: small ? 'var(--text-small-lh)' : 'inherit',
      fontWeight: 400,
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { InlineLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/InlineLink.jsx", error: String((e && e.message) || e) }); }

// components/core/PriceList.jsx
try { (() => {
function PriceList({
  group,
  items = [],
  note,
  style
}) {
  const h = (t, s, c) => React.createElement(t, {
    style: s
  }, c);
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--ink)',
      ...style
    }
  }, group && h('div', {
    fontFamily: 'var(--font-serif)',
    fontWeight: 400,
    fontSize: 'var(--text-h3-size)',
    lineHeight: 1.2,
    color: 'var(--brand)',
    paddingBottom: 14,
    borderBottom: '1px solid var(--brand)',
    fontVariationSettings: "'opsz' 24, 'SOFT' 100"
  }, group), ...items.map((it, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, React.createElement('div', null, h('div', {
    fontSize: 17,
    lineHeight: 1.3
  }, it.name), it.timing && h('div', {
    fontSize: 13,
    lineHeight: 1.4,
    color: 'var(--ink-muted)',
    marginTop: 2
  }, it.timing)), h('div', {
    fontSize: 17,
    color: 'var(--brand)',
    whiteSpace: 'nowrap'
  }, it.price))), note && h('div', {
    fontSize: 14,
    lineHeight: 1.5,
    color: 'var(--ink-muted)',
    paddingTop: 'var(--space-4)'
  }, note));
}
Object.assign(__ds_scope, { PriceList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PriceList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  InlineLink,
  PriceList
} = window.PTalaDesignSystem_7c3e0a;
const A = '../../assets/logos/';
function Wrap({
  children,
  soft,
  theme,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    "data-theme": theme,
    style: {
      background: 'var(--ground)',
      padding: 'var(--space-24) var(--space-30)',
      ...style
    }
  }, children);
}
function Nav({
  onBook
}) {
  const links = ['Prices', 'First time', 'Aftercare', 'Find me'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 96,
      padding: '0 var(--space-30)',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'calc(28px * .245)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'petala-mark-colour.svg',
    alt: "",
    style: {
      height: 'calc(28px * .89)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "t-wordmark"
  }, "p\xE9tala")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: '#' + l.toLowerCase().replace(' ', '-'),
    style: {
      fontSize: 15,
      color: 'var(--ink)',
      textDecoration: 'none'
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    onClick: onBook,
    style: {
      height: 44
    }
  }, "Book online")));
}
function Photo({
  label,
  ratio = '4 / 5',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      borderRadius: 'var(--radius-md)',
      background: 'var(--ground-soft)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 'var(--space-4)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-small"
  }, label));
}
function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-label"
  }, "Waxing studio \xB7 Swindon"), /*#__PURE__*/React.createElement("h1", {
    className: "t-display",
    style: {
      margin: 'var(--space-3) 0 var(--space-6)'
    }
  }, "Skin, softly."), /*#__PURE__*/React.createElement("p", {
    className: "t-lead",
    style: {
      margin: '0 0 var(--space-8)',
      maxWidth: 560
    }
  }, "Hot wax for intimate areas, strip wax for legs and arms. A private home studio, women only, one client at a time."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onBook
  }, "Book online"), /*#__PURE__*/React.createElement(Button, {
    level: "secondary",
    href: "#prices"
  }, "See prices"))), /*#__PURE__*/React.createElement(Photo, {
    label: "A petal on the pillow \u2014 stand-in until the studio is photographed"
  }));
}
function Steps() {
  const steps = [['You book online', 'Pick a time on Fresha. A £10 deposit holds it and comes off the price on the day.'], ['You arrive, we talk', 'The couch is made up fresh. I ask what you want and what you would rather I did not do.'], ['It stings, then it is done', 'Hot wax on intimate areas, strip wax elsewhere. Everything that touches you is single-use.']];
  return /*#__PURE__*/React.createElement(Wrap, {
    style: {
      background: 'var(--ground-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "first-time",
    className: "t-label"
  }, "First time"), /*#__PURE__*/React.createElement("h2", {
    className: "t-h1",
    style: {
      margin: 'var(--space-3) 0 var(--space-12)',
      maxWidth: 720
    }
  }, "First time? Here is exactly what happens."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-8)'
    }
  }, steps.map(([t, b], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: '1px solid var(--hairline-soft)',
      paddingTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-numeral"
  }, i + 1), /*#__PURE__*/React.createElement("div", {
    className: "t-h2",
    style: {
      fontSize: 24,
      margin: 'var(--space-4) 0 var(--space-2)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "t-body",
    style: {
      margin: 0,
      fontSize: 16
    }
  }, b)))));
}
function Why() {
  const rows = [['Single-use, always', 'New spatula for every dip. The wax is never double-dipped.'], ['One client at a time', 'The door is locked behind you. Nobody waits in the hall.'], ['Honest about pain', 'It stings for a second or two. I will tell you before, not after.'], ['Nothing on the outside', 'No sign on the house. The address arrives with your booking.']];
  return /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: 'grid',
      gridTemplateColumns: '5fr 7fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-label"
  }, "Why it feels different"), /*#__PURE__*/React.createElement("h2", {
    className: "t-h2",
    style: {
      margin: 'var(--space-3) 0 var(--space-6)'
    }
  }, "Quiet, clean, and said plainly."), /*#__PURE__*/React.createElement(Photo, {
    label: "The wax pot",
    ratio: "4 / 3"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hairline)'
    }
  }, rows.map(([t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: 'var(--space-6)',
      padding: 'var(--space-6) 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-body",
    style: {
      color: 'var(--brand)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    className: "t-body"
  }, b)))));
}
function Prices() {
  const groups = [['Intimate', [['Hollywood', 'Everything off · 30 min', '£32'], ['Brazilian', 'A strip left · 30 min', '£30'], ['Bikini line', 'Outside the line · 15 min', '£16']]], ['Legs and arms', [['Full leg', 'Strip wax · 45 min', '£30'], ['Half leg', 'Knee down · 25 min', '£20'], ['Underarm', 'Hot wax · 10 min', '£12']]], ['Face', [['Upper lip', 'Hot wax · 10 min', '£8'], ['Brows', 'Tidy, not a reshape · 15 min', '£10'], ['Chin', 'Hot wax · 10 min', '£8']]]];
  return /*#__PURE__*/React.createElement(Wrap, {
    style: {
      background: 'var(--ground-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "prices",
    className: "t-label"
  }, "Prices"), /*#__PURE__*/React.createElement("h2", {
    className: "t-h1",
    style: {
      margin: 'var(--space-3) 0 var(--space-12)'
    }
  }, "Prices, in full."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-12)'
    }
  }, groups.map(([g, items]) => /*#__PURE__*/React.createElement(PriceList, {
    key: g,
    group: g,
    items: items.map(([name, timing, price]) => ({
      name,
      timing,
      price
    }))
  }))), /*#__PURE__*/React.createElement("p", {
    className: "t-small",
    style: {
      margin: 'var(--space-8) 0 0'
    }
  }, "A \xA310 deposit is taken at booking and comes off the price on the day. Within 5 weeks of the last appointment, intimate prices drop by \xA34."));
}
function BookingBand({
  onBook
}) {
  return /*#__PURE__*/React.createElement(Wrap, {
    theme: "plum",
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-label"
  }, "Booking"), /*#__PURE__*/React.createElement("h2", {
    className: "t-h1",
    style: {
      margin: 'var(--space-3) 0 var(--space-4)'
    }
  }, "Tuesday to Saturday, 9:30 to 18:00."), /*#__PURE__*/React.createElement("p", {
    className: "t-lead",
    style: {
      margin: 0
    }
  }, "Book online, or message me first if you are unsure which service you need.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onBook
  }, "Book an appointment"), /*#__PURE__*/React.createElement(Button, {
    level: "secondary",
    href: "#find-me"
  }, "Message me")));
}
function Footer({
  lang,
  setLang
}) {
  return /*#__PURE__*/React.createElement("footer", {
    "data-theme": "plum",
    style: {
      background: 'var(--ground-soft)',
      padding: 'var(--space-16) var(--space-30)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: A + 'petala-lockup-horizontal-reversed.svg',
    alt: "p\xE9tala",
    style: {
      height: 32,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "t-label",
    style: {
      marginTop: 'var(--space-3)'
    }
  }, "Waxing studio \xB7 Swindon"), /*#__PURE__*/React.createElement("div", {
    className: "t-quote",
    style: {
      marginTop: 'var(--space-8)',
      fontSize: 20
    }
  }, "p\xE9tala (PEH\xB7ta\xB7la) \u2014 petal, in Portuguese.")), /*#__PURE__*/React.createElement("div", {
    id: "find-me"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-label"
  }, "Find me"), /*#__PURE__*/React.createElement("div", {
    className: "t-body",
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 15
    }
  }, "Old Town, Swindon", /*#__PURE__*/React.createElement("br", null), "The address arrives with your booking.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-label"
  }, "Hours"), /*#__PURE__*/React.createElement("div", {
    className: "t-body",
    style: {
      marginTop: 'var(--space-3)',
      fontSize: 15
    }
  }, "Tuesday \u2013 Saturday", /*#__PURE__*/React.createElement("br", null), "9:30 \u2013 18:00")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t-label"
  }, "Elsewhere"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(InlineLink, {
    small: true,
    href: "#"
  }, "Instagram"), /*#__PURE__*/React.createElement(InlineLink, {
    small: true,
    href: "#"
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setLang(lang === 'en' ? 'pt' : 'en');
    },
    style: {
      fontSize: 14
    }
  }, lang === 'en' ? 'Português' : 'English')))), /*#__PURE__*/React.createElement("div", {
    className: "t-small",
    style: {
      marginTop: 'var(--space-16)',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--hairline)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 P\xE9tala \xB7 Juliana"), /*#__PURE__*/React.createElement("span", null, lang === 'en' ? 'Até breve.' : 'See you soon.')));
}
function BookingSheet({
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(38,25,29,.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 440,
      background: 'var(--ground)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-label"
  }, "Booking"), /*#__PURE__*/React.createElement("div", {
    className: "t-h2",
    style: {
      margin: 'var(--space-3) 0 var(--space-4)'
    }
  }, "Booking opens on Fresha."), /*#__PURE__*/React.createElement("p", {
    className: "t-body",
    style: {
      margin: '0 0 var(--space-6)'
    }
  }, "A \xA310 deposit holds your time. You will get the address with the confirmation."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose
  }, "Continue to Fresha"), /*#__PURE__*/React.createElement(Button, {
    level: "secondary",
    onClick: onClose
  }, "Back"))));
}
function Home() {
  const [booking, setBooking] = React.useState(false);
  const [lang, setLang] = React.useState('en');
  const onBook = e => {
    e && e.preventDefault && e.preventDefault();
    setBooking(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "top",
    style: {
      width: 1440,
      margin: '0 auto',
      background: 'var(--ground)'
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    onBook: onBook
  }), /*#__PURE__*/React.createElement(Hero, {
    onBook: onBook
  }), /*#__PURE__*/React.createElement(Steps, null), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hairline)'
    }
  }), /*#__PURE__*/React.createElement(Why, null), /*#__PURE__*/React.createElement(Prices, null), /*#__PURE__*/React.createElement(BookingBand, {
    onBook: onBook
  }), /*#__PURE__*/React.createElement(Footer, {
    lang: lang,
    setLang: setLang
  }), booking && /*#__PURE__*/React.createElement(BookingSheet, {
    onClose: () => setBooking(false)
  }));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.InlineLink = __ds_scope.InlineLink;

__ds_ns.PriceList = __ds_scope.PriceList;

})();
