import React from 'react';

import PrimaryLogo from '../../Branding - Pippin & Pals_icon - 2/Primary Logo.svg';
import Logotype from '../../Branding - Pippin & Pals_icon - 2/Logotype.svg';
import MascotLogo from '../../Branding - Pippin & Pals_icon - 2/Mascot Logo.svg';
import PIcon from '../../Branding - Pippin & Pals_icon - 2/P.svg';
import Group25 from '../../Branding - Pippin & Pals_icon - 2/Group 25.svg';
import Group26 from '../../Branding - Pippin & Pals_icon - 2/Group 26.svg';
import Group27 from '../../Branding - Pippin & Pals_icon - 2/Group 27.svg';
import Group25Alt from '../../Branding - Pippin & Pals_icon - 2/Group 25-1.svg';
import Group27Alt from '../../Branding - Pippin & Pals_icon - 2/Group 27-1.svg';

import OrganicStamp from '../../Branding - Pippin & Pals_illustration/organic-cotton-stamp.png';
import OrganicStampStory from '../../Branding - Pippin & Pals_illustration/organic-cotton-stamp-story.png';

import DressGirl from '../../Branding - Pippin & Pals_img - 2/Rectangle 13.png';
import BoySet from '../../Branding - Pippin & Pals_img - 2/Rectangle 14.png';
import DrawstringBag from '../../Branding - Pippin & Pals_img - 2/Rectangle 16.png';
import StickerPattern from '../../Branding - Pippin & Pals_img - 2/Rectangle 15.png';
import Embroidery from '../../Branding - Pippin & Pals_img - 2/Rectangle 27.png';
import BoxMockup from '../../Branding - Pippin & Pals_img - 2/clothing bag pippin 1.png';
import IconTileA from '../../Branding - Pippin & Pals_img - 2/Rectangle 29.png';
import IconTileB from '../../Branding - Pippin & Pals_img - 2/Rectangle 29-1.png';
import IconTileC from '../../Branding - Pippin & Pals_img - 2/Rectangle 29-2.png';
import IconTileD from '../../Branding - Pippin & Pals_img - 2/Rectangle 29-3.png';
import IconTileE from '../../Branding - Pippin & Pals_img - 2/Rectangle 29-4.png';
import IconTileF from '../../Branding - Pippin & Pals_img - 2/Rectangle 29-5.png';
import Billboard from '../../Branding - Pippin & Pals_img - 2/Mockup billboard pippin 1.png';
import ChildrenRabbit from '../../Branding - Pippin & Pals_img - 2/children with rabbit 1.png';
import ShoppingBag from '../../Branding - Pippin & Pals_img - 2/Rectangle 17.png';
import SweaterGirl from '../../Branding - Pippin & Pals_img - 2/Rectangle 19.png';
import HangTag from '../../Branding - Pippin & Pals_img - 2/Rectangle 20.png';
import ClothingLabel from '../../Branding - Pippin & Pals_img - 2/Rectangle 22.png';
import PoloBoy from '../../Branding - Pippin & Pals_img - 2/Rectangle 23.png';

const logoWatermarks = Array.from({ length: 8 });

const colors = [
  { name: 'Apricot Sherbet', hex: '#E67C4F', role: 'Primary' },
  { name: 'Vanilla Cloud', hex: '#F8FCE1', role: 'Secondary' },
  { name: 'Pistachio Mint', hex: '#D6E499', role: 'Accent' },
  { name: 'Berry Mousse', hex: '#FFC2C2', role: 'Accent' },
  { name: 'Lemon Curd', hex: '#FFF1A1', role: 'Highlight' },
];

const iconTiles = [IconTileA, IconTileB, IconTileC, IconTileD, IconTileE, IconTileF, IconTileA, IconTileB, IconTileC];

const BrandingStandalone = () => {
  return (
    <main className="brand-site" aria-label="Pippin and Pals branding page">
      <section className="brand-hero">
        <div className="brand-hero-mark brand-hero-mark-left">
          <img src={Group25Alt} alt="" />
        </div>
        <div className="brand-hero-mark brand-hero-mark-right">
          <img src={Group27Alt} alt="" />
        </div>
        <img className="brand-hero-logo" src={PrimaryLogo} alt="Pippin & Pals" />
      </section>

      <section className="brand-story">
        <div className="brand-copy">
          <h1>The Story</h1>
          <p>
            Pippin &amp; Pals is a children&apos;s clothing brand where playful design meets organic
            comfort. Using only the softest cotton, we create &quot;huggable&quot; essentials that
            celebrate the joy and wonder of childhood. Every detail is made to be as gentle as a hug.
          </p>
        </div>
        <div className="brand-logo-row">
          <div className="brand-pattern-card">
            {logoWatermarks.map((_, index) => <img key={index} src={PIcon} alt="" />)}
            <img className="brand-pattern-logo brand-pattern-logo-stack" src={PrimaryLogo} alt="Pippin & Pals primary logo" />
          </div>
          <div className="brand-pattern-card brand-pattern-card-wide">
            {logoWatermarks.map((_, index) => <img key={index} src={PIcon} alt="" />)}
            <img className="brand-pattern-logo" src={MascotLogo} alt="Pippin & Pals mascot logo" />
            <img className="brand-pattern-type" src={Logotype} alt="Pippin & Pals logotype" />
          </div>
        </div>
      </section>

      <section className="brand-logo-note">
        <div className="brand-note-icons">
          <figure>
            <img src={OrganicStampStory} alt="" />
            <figcaption>Organic Cotton</figcaption>
          </figure>
          <figure>
            <img src={Group25} alt="" />
            <figcaption>Soft / Huggable</figcaption>
          </figure>
          <figure>
            <img src={Group27} alt="" />
            <figcaption>Playful / Cheerful</figcaption>
          </figure>
        </div>
        <article>
          <h2>Logo</h2>
          <p>
            The Pippin &amp; Pals logo is constructed from soft, organic shapes designed to evoke a
            sense of safety and comfort. The composition unites three core elements: nature,
            gentleness, and joy.
          </p>
          <p>
            Every curve is intentional, avoiding sharp angles to reinforce the huggable quality of
            the brand. The interplay between the characters creates a cohesive symbol of friendship,
            perfectly representing our dual focus on organic quality for parents and playfulness for
            children.
          </p>
        </article>
      </section>

      <section className="brand-logo-system">
        <div className="brand-lockup-row">
          <img src={PrimaryLogo} alt="Primary logo" />
          <img src={MascotLogo} alt="Mascot lockup" />
          <img src={Logotype} alt="Wordmark lockup" />
        </div>
        <div className="brand-mark-grid">
          <div><img src={MascotLogo} alt="" /></div>
          <div className="is-orange"><img src={MascotLogo} alt="" /></div>
          <div className="is-apricot"><img src={MascotLogo} alt="" /></div>
          <div className="is-charcoal"><img src={MascotLogo} alt="" /></div>
          <div className="is-green"><img src={MascotLogo} alt="" /></div>
          <div className="is-pink"><img src={MascotLogo} alt="" /></div>
        </div>
      </section>

      <section className="brand-colors" aria-label="Color palette">
        {colors.map((color) => (
          <div key={color.hex} className="brand-color" style={{ backgroundColor: color.hex }}>
            <h3>{color.name}</h3>
            <p>{color.hex}</p>
            <span>{color.role}</span>
          </div>
        ))}
      </section>

      <section className="brand-type brand-type-display">
        <div className="brand-type-heading">
          <h2>New Bread</h2>
          <span>Primary Font</span>
        </div>
        <strong>AaBbCc</strong>
        <p>DdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz 0123456789!@#$%^&amp;*()</p>
      </section>

      <section className="brand-type brand-type-body">
        <div className="brand-type-heading">
          <h2>Quicksand</h2>
          <span>Secondary Font</span>
        </div>
        <strong>AaBbCc</strong>
        <p>DdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz 0123456789!@#$%^&amp;*()</p>
      </section>

      <section className="brand-apparel">
        <img src={DressGirl} alt="Girl wearing Pippin & Pals dress" />
        <img src={BoySet} alt="Boy wearing Pippin & Pals top" />
      </section>

      <section className="brand-product-grid">
        <img src={DrawstringBag} alt="Pippin & Pals drawstring bag" />
        <img src={StickerPattern} alt="Pippin & Pals sticker pattern" />
      </section>

      <section className="brand-embroidery">
        <img src={Embroidery} alt="Embroidered Pippin & Pals mark" />
      </section>

      <section className="brand-boxes">
        <img src={BoxMockup} alt="Pippin & Pals packaging mockup" />
      </section>

      <section className="brand-icon-strip" aria-label="Mascot icon tiles">
        {iconTiles.map((tile, index) => <img key={`${tile}-${index}`} src={tile} alt="" />)}
      </section>

      <section className="brand-thank-you">
        <div className="brand-card brand-card-front">
          <img src={PrimaryLogo} alt="" />
          <h2>Thank<br />you</h2>
        </div>
        <div className="brand-card brand-card-back">
          <img src={Group26} alt="" />
          <h3>A Little Hug Inside!</h3>
          <p>
            Hi! I&apos;m Pippin. Every piece was made with soft organic cotton and tiny details
            designed for big adventures.
          </p>
          <strong>With love,<br />Pippin&amp;Pals</strong>
        </div>
        <img className="brand-card-mascot brand-card-mascot-left" src={Group27} alt="" />
        <img className="brand-card-mascot brand-card-mascot-right" src={OrganicStamp} alt="" />
      </section>

      <section className="brand-billboard">
        <img src={Billboard} alt="Pippin & Pals billboard mockup" />
      </section>

      <section className="brand-field">
        <img src={ChildrenRabbit} alt="Child sitting with a rabbit" />
        <img className="brand-field-logo" src={Logotype} alt="Pippin & Pals" />
      </section>

      <section className="brand-shopping">
        <img className="brand-shopping-bg-left" src={Group25Alt} alt="" />
        <img className="brand-shopping-bg-right" src={Group27Alt} alt="" />
        <img src={ShoppingBag} alt="Pippin & Pals shopping bags" />
      </section>

      <section className="brand-photo-grid">
        <img src={SweaterGirl} alt="Girl wearing a Pippin & Pals sweater" />
        <img src={HangTag} alt="Pippin & Pals clothing hang tag" />
        <img src={ClothingLabel} alt="Pippin & Pals clothing label" />
        <img src={PoloBoy} alt="Boy wearing a Pippin & Pals polo" />
      </section>

      <section className="brand-end">
        <img src={Group25Alt} alt="" />
        <div aria-hidden="true" />
        <img src={Group27Alt} alt="" />
      </section>
    </main>
  );
};

export default BrandingStandalone;
