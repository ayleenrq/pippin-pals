import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// ── Icon Assets (from _icon - 2) ──
import PrimaryLogo   from '../../Branding - Pippin & Pals_icon - 2/Primary Logo.svg';
import LogoType      from '../../Branding - Pippin & Pals_icon - 2/Logotype.svg';
import LogoType1     from '../../Branding - Pippin & Pals_icon - 2/Logotype-1.svg';
import MascotLogo    from '../../Branding - Pippin & Pals_icon - 2/Mascot Logo.svg';
import MascotLogo1   from '../../Branding - Pippin & Pals_icon - 2/Mascot Logo-1.svg';
import Group25       from '../../Branding - Pippin & Pals_icon/Group 25.svg';
import Group25_1     from '../../Branding - Pippin & Pals_icon - 2/Group 25-1.svg';
import Group26       from '../../Branding - Pippin & Pals_icon/Group 26.svg';
import Group26_1     from '../../Branding - Pippin & Pals_icon - 2/Group 26-1.svg';
import Group27       from '../../Branding - Pippin & Pals_icon/Group 27.svg';
import Group27_1     from '../../Branding - Pippin & Pals_icon - 2/Group 27-1.svg';
import PIcon         from '../../Branding - Pippin & Pals_icon - 2/P.svg';
// ── Image Assets (from _img - 2) ──
import BillboardMockup  from '../../Branding - Pippin & Pals_img - 2/Mockup billboard pippin 1.png';
import ChildrenRabbit1  from '../../Branding - Pippin & Pals_img - 2/children with rabbit 1.png';
import ClothingBag      from '../../Branding - Pippin & Pals_img - 2/clothing bag pippin 1.png';
import StickerLogo      from '../../Branding - Pippin & Pals_img - 2/Sticker logo pippin 1.png';
import Rect13           from '../../Branding - Pippin & Pals_img - 2/Rectangle 13.png';
import Rect14           from '../../Branding - Pippin & Pals_img - 2/Rectangle 14.png';
import Rect15           from '../../Branding - Pippin & Pals_img - 2/Rectangle 15.png';
import Rect16           from '../../Branding - Pippin & Pals_img - 2/Rectangle 16.png';
import Rect17           from '../../Branding - Pippin & Pals_img - 2/Rectangle 17.png';
import Rect19           from '../../Branding - Pippin & Pals_img - 2/Rectangle 19.png';
import Rect20           from '../../Branding - Pippin & Pals_img - 2/Rectangle 20.png';
import Rect22           from '../../Branding - Pippin & Pals_img - 2/Rectangle 22.png';
import Rect23           from '../../Branding - Pippin & Pals_img - 2/Rectangle 23.png';
import Rect24           from '../../Branding - Pippin & Pals_img - 2/Rectangle 24.png';
import Rect25           from '../../Branding - Pippin & Pals_img - 2/Rectangle 25.png';
import Rect27           from '../../Branding - Pippin & Pals_img - 2/Rectangle 27.png';
import Rect29           from '../../Branding - Pippin & Pals_img - 2/Rectangle 29.png';
import Rect29_1         from '../../Branding - Pippin & Pals_img - 2/Rectangle 29-1.png';
import Rect29_2         from '../../Branding - Pippin & Pals_img - 2/Rectangle 29-2.png';
import Rect29_3         from '../../Branding - Pippin & Pals_img - 2/Rectangle 29-3.png';
import Rect29_4         from '../../Branding - Pippin & Pals_img - 2/Rectangle 29-4.png';
import Rect29_5         from '../../Branding - Pippin & Pals_img - 2/Rectangle 29-5.png';
import Rect30           from '../../Branding - Pippin & Pals_img - 2/Rectangle 30.png';
import Ellipse70        from '../../Branding - Pippin & Pals_img - 2/Ellipse 70.png';
import RabbitSheep1     from '../../Branding - Pippin & Pals_img - 2/rabbit & sheep 1.png';
import RabbitSheep2     from '../../Branding - Pippin & Pals_img - 2/rabbit & sheep 2.png';
import TwoGirls         from '../../Branding - Pippin & Pals_img - 2/two-little-girls-hugging-smiling-white-background 1.png';
import Footwear1        from '../../Branding - Pippin & Pals_img - 2/footwear-apparel-shorts-khaki 1.png';
import Footwear1_1      from '../../Branding - Pippin & Pals_img - 2/footwear-apparel-shorts-khaki 1-1.png';
import ScenicView       from '../../Branding - Pippin & Pals_img - 2/scenic-view-green-field-dotted-with-curious-sheep-bright-blue-sky-minimalist 1.png';

// ── Illustration assets ──
import OrganicStamp  from '../../Branding - Pippin & Pals_illustration/organic-cotton-stamp.png';
// Group25Icon2 already imported as Group25 from _icon - 2 in the mascots section; MascotLogo already imported


const Branding = () => {
  // Scroll animations
  const [heroRef, heroVis]           = useScrollAnimation({ threshold: 0.1 });
  const [storyRef, storyVis]         = useScrollAnimation({ threshold: 0.1 });
  const [logoPhilRef, logoPhilVis]   = useScrollAnimation({ threshold: 0.08 });
  const [logoSecRef, logoSecVis]     = useScrollAnimation({ threshold: 0.1 });
  const [logoVarRef, logoVarVis]     = useScrollAnimation({ threshold: 0.1 });
  const [colorRef, colorVis]         = useScrollAnimation({ threshold: 0.1 });
  const [typoRef, typoVis]           = useScrollAnimation({ threshold: 0.1 });
  const [mascotRef, mascotVis]       = useScrollAnimation({ threshold: 0.1 });
  const [usageRef, usageVis]         = useScrollAnimation({ threshold: 0.1 });
  const [mockupRef, mockupVis]       = useScrollAnimation({ threshold: 0.1 });
  const [galleryRef, galleryVis]     = useScrollAnimation({ threshold: 0.05 });
  const [billboardRef, billboardVis] = useScrollAnimation({ threshold: 0.05 });
  const [assetsRef, assetsVis]       = useScrollAnimation({ threshold: 0.1 });

  const colors = [
    { hex: '#E67C4F', name: 'Pippin Orange',  role: 'Primary',   textLight: true  },
    { hex: '#D6E499', name: 'Pals Green',      role: 'Secondary', textLight: false },
    { hex: '#FFF1A1', name: 'Sunny Yellow',    role: 'Tertiary',  textLight: false },
    { hex: '#FFC2C2', name: 'Soft Pink',       role: 'Accent',    textLight: false },
    { hex: '#482C1C', name: 'Deep Brown',      role: 'Text Dark', textLight: true  },
    { hex: '#FEFFFC', name: 'Cloud White',     role: 'Background',textLight: false },
  ];

  return (
    <div className="branding-page">

      {/* ── HERO ── */}
      <section className="branding-hero">
        <img src={ScenicView} alt="" className="branding-hero-bg" />
        <div className="branding-hero-overlay" />
        <div
          ref={heroRef}
          className={`branding-hero-inner reveal-up${heroVis ? ' is-visible' : ''}`}
        >
          <img src={PrimaryLogo} alt="Pippin & Pals" className="branding-hero-logo" />
          <h1 className="branding-hero-title">Brand Guidelines</h1>
          <p className="branding-hero-subtitle">
            The visual language of Pippin &amp; Pals — playful, warm, and built to hug.
          </p>
        </div>
        {/* Floating mascot icons */}
        <img src={RabbitSheep1} alt="" className="branding-hero-mascot left" />
        <img src={RabbitSheep2} alt="" className="branding-hero-mascot right" />
      </section>

      <section className="section testimonials-section" style={{ padding: 0 }}>
        <div className="testimonials-mascot-bar">
          <div className="mascot-track">
            {[Group25, Group26, Group27, Group25, Group26, Group27, Group25, Group26, Group27, Group25, Group26, Group27, Group25, Group26, Group27, Group25, Group26, Group27, Group25, Group26, Group27, Group25, Group26, Group27].map((g, i) => (
              <img key={i} src={g} alt="" className="mascot-bar-icon" />
            ))}
          </div>
        </div>
      </section>

      {/* ── THE STORY ── */}
      <section className="branding-section branding-story-section" ref={storyRef}>
        <div className={`branding-story-text reveal-up${storyVis ? ' is-visible' : ''}`}>
          <h2 className="branding-story-title">The Story</h2>
          <p className="branding-story-desc">
            Pippin &amp; Pals is a children's clothing brand where playful design meets organic
            comfort. Using only the softest cotton, we create &ldquo;huggable&rdquo; essentials that
            celebrate the joy and wonder of childhood. Every detail is made to be as gentle
            as a hug.
          </p>
        </div>

        <div className={`branding-story-divider reveal-up${storyVis ? ' is-visible' : ''}`} style={{ animationDelay: '0.2s' }} />

        <div className={`branding-story-logos reveal-up${storyVis ? ' is-visible' : ''}`} style={{ animationDelay: '0.3s' }}>
          {[
            { src: PrimaryLogo, label: 'Primary Logo',     maxW: '240px' },
            { src: MascotLogo1, label: 'Mascot Logo Alt',  maxW: '200px' },
            { src: LogoType1,   label: 'Logotype Alt',     maxW: '240px' },
          ].map((logo, i) => (
            <div key={i} className="branding-story-logo-card">
              <div className="branding-story-logo-bg">
                {[...Array(9)].map((_, j) => (
                  <img key={j} src={PIcon} alt="" className={`branding-story-p-watermark p-pos-${j + 1}`} />
                ))}
                <img src={logo.src} alt={logo.label} className="branding-story-logo-img" style={{ maxWidth: logo.maxW }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LOGO PHILOSOPHY ── */}
      <section className="branding-logo-phil-wrap" ref={logoPhilRef}>
        
        {/* Top: pink row — attributes + description */}
        <div className="branding-logo-phil-top">
          {/* Left: 3 attribute icon cards */}
          <div className="branding-logo-phil-attrs">
            {[
              { icon: OrganicStamp, label: 'Organic Cotton',   bg: '#D6E499' },
              { icon: Group25,      label: 'Soft/Huggable',    bg: '#FFF1A1' },
              { icon: Group27,      label: 'Playful/Cheerful', bg: '#FFF8EE' },
            ].map((attr, i) => (
              <div
                key={i}
                className={`branding-logo-phil-attr-card reveal-up${logoPhilVis ? ' is-visible' : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="branding-logo-phil-attr-icon" style={{ background: attr.bg }}>
                  <img src={attr.icon} alt={attr.label} />
                </div>
                <span className="branding-logo-phil-attr-label">{attr.label}</span>
              </div>
            ))}
          </div>

          {/* Right: text description */}
          <div className={`branding-logo-phil-desc reveal-right${logoPhilVis ? ' is-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="branding-logo-phil-title">Logo</h3>
            <p>
              The Pippin &amp; Pals logo is constructed from soft, organic shapes
              designed to evoke a sense of safety and comfort. The composition
              unites three core elements: nature, gentleness, and joy.
            </p>
            <p>
              Every curve is intentional, avoiding sharp angles to reinforce the
              huggable quality of the brand. The interplay between the characters
              creates a cohesive symbol of friendship, perfectly representing our
              dual focus on organic quality for parents and playfulness for children.
            </p>
          </div>
        </div>

      </section>

      {/* ── LOGO PRIMARY ── */}
      <section className="branding-section bg-cream">
        <div
          ref={logoSecRef}
          className={`branding-section-header reveal-up${logoSecVis ? ' is-visible' : ''}`}
        >
          <span className="branding-section-label">01</span>
          <h2 className="branding-section-title">Logo</h2>
          <p className="branding-section-desc">
            The Pippin &amp; Pals logo brings together warmth, playfulness, and organic charm. 
            It is the heart of our visual identity.
          </p>
        </div>

        {/* Primary logo showcase */}
        <div className={`branding-logo-showcase reveal-scale${logoSecVis ? ' is-visible' : ''}`}>
          <div className="branding-logo-primary-card">
            <div className="branding-logo-bg-light">
              <img src={PrimaryLogo} alt="Pippin & Pals Primary Logo" className="branding-logo-primary-img" />
            </div>
            <span className="branding-logo-card-label">Primary Logo — Light Background</span>
          </div>
          <div className="branding-logo-primary-card dark">
            <div className="branding-logo-bg-dark">
              <img src={PrimaryLogo} alt="Pippin & Pals Primary Logo" className="branding-logo-primary-img invert-logo" />
            </div>
            <span className="branding-logo-card-label light">Primary Logo — Dark Background</span>
          </div>
        </div>
      </section>

      {/* ── LOGO VARIATIONS ── */}
      <section className="branding-section bg-green-light">
        <div
          ref={logoVarRef}
          className={`branding-section-header reveal-up${logoVarVis ? ' is-visible' : ''}`}
        >
          <span className="branding-section-label">02</span>
          <h2 className="branding-section-title">Logo Variations</h2>
          <p className="branding-section-desc">
            We have several logo lockups to cover any use case — from wordmarks to icon-only applications.
          </p>
        </div>

        <div className="branding-logo-variations-grid">
          {[
            { img: MascotLogo,  label: 'Mascot Logo',      bg: '#FEFFFC',  delay: 0   },
            { img: MascotLogo1, label: 'Mascot Logo Alt',  bg: '#482C1C',  delay: 0.1, invert: true },
            { img: LogoType,    label: 'Logotype',          bg: '#FEFFFC',  delay: 0.2 },
            { img: LogoType1,   label: 'Logotype Alt',      bg: '#E67C4F',  delay: 0.3, invert: true },
            { img: PIcon,       label: 'Favicon / Icon',    bg: '#D6E499',  delay: 0.4 },
            { img: Group25,     label: 'Mascot A',          bg: '#FFF1A1',  delay: 0.5 },
          ].map((item, i) => (
            <div
              key={i}
              className={`branding-logo-var-card reveal-up${logoVarVis ? ' is-visible' : ''}`}
              style={{ animationDelay: logoVarVis ? `${item.delay}s` : '0s' }}
            >
              <div className="branding-logo-var-preview" style={{ backgroundColor: item.bg }}>
                <img
                  src={item.img}
                  alt={item.label}
                  className={`branding-logo-var-img${item.invert ? ' invert-logo' : ''}`}
                />
              </div>
              <span className="branding-logo-var-label">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── COLOR PALETTE ── */}
      <section className="branding-section bg-cream" ref={colorRef}>
        <div className={`branding-section-header reveal-up${colorVis ? ' is-visible' : ''}`}>
          <span className="branding-section-label">03</span>
          <h2 className="branding-section-title">Color Palette</h2>
          <p className="branding-section-desc">
            Our palette is warm, inviting, and playful — reflecting the organic joy of childhood.
          </p>
        </div>

        <div className="branding-colors-grid">
          {colors.map((c, i) => (
            <div
              key={i}
              className={`branding-color-card reveal-up${colorVis ? ' is-visible' : ''}`}
              style={{ animationDelay: colorVis ? `${i * 0.08}s` : '0s' }}
            >
              <div className="branding-color-swatch" style={{ backgroundColor: c.hex }}>
                {c.hex === '#FEFFFC' && <div className="branding-color-swatch-border" />}
              </div>
              <div className="branding-color-info">
                <span className="branding-color-name">{c.name}</span>
                <span className="branding-color-hex">{c.hex}</span>
                <span className="branding-color-role">{c.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Color usage strip */}
        <div className={`branding-color-strip reveal-up${colorVis ? ' is-visible' : ''}`} style={{ animationDelay: '0.5s' }}>
          {colors.map((c, i) => (
            <div key={i} className="branding-color-strip-block" style={{ backgroundColor: c.hex }} />
          ))}
        </div>
      </section>

      {/* ── TYPOGRAPHY ── */}
      <section className="branding-section bg-orange" ref={typoRef}>
        <div className={`branding-section-header reveal-up${typoVis ? ' is-visible' : ''}`}>
          <span className="branding-section-label" style={{ color: '#FFF1A1' }}>04</span>
          <h2 className="branding-section-title" style={{ color: '#FEFFFC' }}>Typography</h2>
          <p className="branding-section-desc" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Two typefaces define the Pippin &amp; Pals voice — one whimsical, one grounded.
          </p>
        </div>

        <div className="branding-typo-grid">
          <div className={`branding-typo-card reveal-left${typoVis ? ' is-visible' : ''}`}>
            <div className="branding-typo-sample new-bread">AaBbCc</div>
            <div className="branding-typo-details">
              <span className="branding-typo-name">New Bread</span>
              <span className="branding-typo-role">Display / Headlines</span>
              <p className="branding-typo-usage">
                Used for titles, section headers, logo lockups, and any playful headline moment.
              </p>
              <div className="branding-typo-weights">
                <span className="branding-typo-weight" style={{ fontFamily: "'New Bread', cursive", fontWeight: 400 }}>Regular</span>
              </div>
            </div>
          </div>

          <div className={`branding-typo-card reveal-right${typoVis ? ' is-visible' : ''}`}>
            <div className="branding-typo-sample quicksand">AaBbCc</div>
            <div className="branding-typo-details">
              <span className="branding-typo-name">Quicksand</span>
              <span className="branding-typo-role">Body / UI</span>
              <p className="branding-typo-usage">
                Used for body copy, captions, buttons, and interface elements — warm and highly readable.
              </p>
              <div className="branding-typo-weights">
                <span className="branding-typo-weight" style={{ fontWeight: 400 }}>Regular</span>
                <span className="branding-typo-weight" style={{ fontWeight: 500 }}>Medium</span>
                <span className="branding-typo-weight" style={{ fontWeight: 600 }}>SemiBold</span>
                <span className="branding-typo-weight" style={{ fontWeight: 700 }}>Bold</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MASCOTS ── */}
      <section className="branding-section bg-yellow" ref={mascotRef}>
        <div className={`branding-section-header reveal-up${mascotVis ? ' is-visible' : ''}`}>
          <span className="branding-section-label">05</span>
          <h2 className="branding-section-title">Mascots &amp; Icons</h2>
          <p className="branding-section-desc">
            Pippin &amp; Pals characters bring the brand to life — they appear across our products, packaging, and communications.
          </p>
        </div>

        <div className="branding-mascots-grid">
          {[
            { img: Group25,   label: 'Pippin — Main' },
            { img: Group26,   label: 'Pal Sheep' },
            { img: Group27,   label: 'Pal Bunny' },
            { img: Group25_1, label: 'Pippin Alt' },
            { img: Group26_1, label: 'Sheep Alt' },
            { img: Group27_1, label: 'Bunny Alt' },
          ].map((m, i) => (
            <div
              key={i}
              className={`branding-mascot-card reveal-scale${mascotVis ? ' is-visible' : ''}`}
              style={{ animationDelay: mascotVis ? `${i * 0.1}s` : '0s' }}
            >
              <img src={m.img} alt={m.label} className="branding-mascot-img" />
              <span className="branding-mascot-label">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Sticker */}
        <div className={`branding-sticker-row reveal-up${mascotVis ? ' is-visible' : ''}`} style={{ animationDelay: '0.6s' }}>
          <img src={StickerLogo} alt="Pippin & Pals Sticker" className="branding-sticker-img" />
          <img src={Ellipse70}   alt="" className="branding-ellipse" />
          <div className="branding-sticker-caption">
            <h3>Sticker & Decorative Usage</h3>
            <p>The mascot sticker form is used on merchandise, packaging, tags, and collateral where a fun, tactile feel is needed.</p>
          </div>
        </div>
      </section>

      {/* ── LOGO IN CONTEXT (usage photos) ── */}
      <section className="branding-section bg-green-light" ref={usageRef}>
        <div className={`branding-section-header reveal-up${usageVis ? ' is-visible' : ''}`}>
          <span className="branding-section-label">06</span>
          <h2 className="branding-section-title">Logo In Context</h2>
          <p className="branding-section-desc">
            How our identity lives in the real world — on clothing tags, packaging, and everyday touchpoints.
          </p>
        </div>

        <div className="branding-context-bento">
          <div className={`branding-context-card tall reveal-left${usageVis ? ' is-visible' : ''}`}>
            <img src={Rect13} alt="Brand in context" />
          </div>
          <div className="branding-context-col">
            <div className={`branding-context-card reveal-up${usageVis ? ' is-visible' : ''}`} style={{ animationDelay: '0.1s' }}>
              <img src={Rect14} alt="Brand in context" />
            </div>
            <div className={`branding-context-card reveal-up${usageVis ? ' is-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
              <img src={Rect16} alt="Brand in context" />
            </div>
          </div>
          <div className={`branding-context-card tall reveal-right${usageVis ? ' is-visible' : ''}`} style={{ animationDelay: '0.15s' }}>
            <img src={Rect15} alt="Brand in context" />
          </div>
        </div>
      </section>

      {/* ── PRODUCT MOCKUPS ── */}
      <section className="branding-section bg-cream" ref={mockupRef}>
        <div className={`branding-section-header reveal-up${mockupVis ? ' is-visible' : ''}`}>
          <span className="branding-section-label">07</span>
          <h2 className="branding-section-title">Product Mockups</h2>
          <p className="branding-section-desc">
            The Pippin &amp; Pals brand comes to life through every garment, bag, and accessory.
          </p>
        </div>

        {/* Clothing bag hero */}
        <div className={`branding-mockup-hero reveal-scale${mockupVis ? ' is-visible' : ''}`}>
          <img src={ClothingBag} alt="Pippin & Pals clothing bag" className="branding-mockup-hero-img" />
        </div>

        {/* Stamp textures strip */}
        <div className="branding-stamps-row">
          {[Rect29, Rect29_1, Rect29_2, Rect29_3, Rect29_4, Rect29_5].map((img, i) => (
            <div
              key={i}
              className={`branding-stamp-card reveal-scale${mockupVis ? ' is-visible' : ''}`}
              style={{ animationDelay: mockupVis ? `${i * 0.08}s` : '0s' }}
            >
              <img src={img} alt={`Stamp ${i}`} />
            </div>
          ))}
        </div>

        {/* More mockup grid */}
        <div className="branding-mockup-grid">
          {[
            { img: Rect17,  delay: 0 },
            { img: Rect19,  delay: 0.08 },
            { img: Rect20,  delay: 0.16 },
            { img: Rect22,  delay: 0.24 },
          ].map((item, i) => (
            <div
              key={i}
              className={`branding-mockup-card reveal-up${mockupVis ? ' is-visible' : ''}`}
              style={{ animationDelay: mockupVis ? `${item.delay}s` : '0s' }}
            >
              <img src={item.img} alt={`Mockup ${i}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ── BRAND PHOTOGRAPHY ── */}
      <section className="branding-section bg-pink-soft" ref={galleryRef}>
        <div className={`branding-section-header reveal-up${galleryVis ? ' is-visible' : ''}`}>
          <span className="branding-section-label">08</span>
          <h2 className="branding-section-title">Brand Photography</h2>
          <p className="branding-section-desc">
            Authentic, joyful, and organic — our photography captures the spirit of childhood wonder.
          </p>
        </div>

        <div className="branding-gallery-masonry">
          <div className="branding-gallery-col">
            <div className={`branding-gallery-img-wrap reveal-left${galleryVis ? ' is-visible' : ''}`}>
              <img src={Rect23} alt="" />
            </div>
            <div className={`branding-gallery-img-wrap reveal-left${galleryVis ? ' is-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
              <img src={Rect25} alt="" />
            </div>
          </div>
          <div className="branding-gallery-col">
            <div className={`branding-gallery-img-wrap tall reveal-up${galleryVis ? ' is-visible' : ''}`} style={{ animationDelay: '0.1s' }}>
              <img src={TwoGirls} alt="Two little girls hugging" />
            </div>
          </div>
          <div className="branding-gallery-col">
            <div className={`branding-gallery-img-wrap reveal-right${galleryVis ? ' is-visible' : ''}`} style={{ animationDelay: '0.05s' }}>
              <img src={Rect24} alt="" />
            </div>
            <div className={`branding-gallery-img-wrap reveal-right${galleryVis ? ' is-visible' : ''}`} style={{ animationDelay: '0.25s' }}>
              <img src={Rect27} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ── APPAREL SHOTS ── */}
      <section className="branding-section bg-cream">
        <div className="branding-apparel-bento">
          <div className={`branding-apparel-card main reveal-scale${galleryVis ? ' is-visible' : ''}`}>
            <img src={ChildrenRabbit1} alt="Children with rabbit" />
          </div>
          <div className="branding-apparel-side">
            <div className={`branding-apparel-card reveal-up${galleryVis ? ' is-visible' : ''}`} style={{ animationDelay: '0.1s' }}>
              <img src={Footwear1} alt="Apparel shorts" />
            </div>
            <div className={`branding-apparel-card reveal-up${galleryVis ? ' is-visible' : ''}`} style={{ animationDelay: '0.2s' }}>
              <img src={Footwear1_1} alt="Apparel close up" />
            </div>
            <div className={`branding-apparel-card reveal-up${galleryVis ? ' is-visible' : ''}`} style={{ animationDelay: '0.3s' }}>
              <img src={Rect30} alt="Apparel detail" />
            </div>
          </div>
        </div>
      </section>

      {/* ── BILLBOARD MOCKUP ── */}
      <section className="branding-section bg-green-light" ref={billboardRef}>
        <div className={`branding-section-header reveal-up${billboardVis ? ' is-visible' : ''}`}>
          <span className="branding-section-label">09</span>
          <h2 className="branding-section-title">Out-of-Home &amp; Signage</h2>
          <p className="branding-section-desc">
            The Pippin &amp; Pals brand scales beautifully — from tiny clothing tags to large-format billboards.
          </p>
        </div>
        <div className={`branding-billboard-wrap reveal-scale${billboardVis ? ' is-visible' : ''}`}>
          <img src={BillboardMockup} alt="Pippin & Pals Billboard Mockup" className="branding-billboard-img" />
        </div>
      </section>

      {/* ── BRAND ASSETS CTA ── */}
      <section className="branding-section bg-orange no-pad-bottom" ref={assetsRef}>
        <div className={`branding-assets-cta reveal-scale${assetsVis ? ' is-visible' : ''}`}>
          <div style={{ position: 'relative', display: 'inline-block', height: '180px', marginBottom: '32px' }}>
            <img src={PrimaryLogo} style={{ height: '180px', visibility: 'hidden' }} alt="" />
            <img src={PrimaryLogo} style={{ position: 'absolute', top: 0, left: 0, height: '100%', clipPath: 'inset(0 0 32% 0)' }} alt="Pippin & Pals Mascot" />
            <img src={PrimaryLogo} className="invert-logo" style={{ position: 'absolute', top: 0, left: 0, height: '100%', clipPath: 'inset(68% 0 0 0)' }} alt="Pippin & Pals Text" />
          </div>
          <h2 className="branding-assets-title">A Brand Built on Joy</h2>
          <p className="branding-assets-desc">
            Every colour, character, and curve in the Pippin &amp; Pals identity is designed to spark the warmth of childhood — for the little ones who wear it and the families who love them.
          </p>
          <div className="branding-assets-mascots">
            <img src={RabbitSheep1} alt="" />
            <img src={RabbitSheep2} alt="" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Branding;
