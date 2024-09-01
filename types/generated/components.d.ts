import type { Schema, Attribute } from '@strapi/strapi';

export interface OtherParagraphLinks extends Schema.Component {
  collectionName: 'components_other_paragraph_links';
  info: {
    displayName: 'paragraphLinks';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Tynki Sonaspray\u00AE \u2192'>;
    url: Attribute.String & Attribute.Required & Attribute.DefaultTo<'#'>;
  };
}

export interface SectionsBlock1 extends Schema.Component {
  collectionName: 'components_sections_block1s';
  info: {
    displayName: 'Block1';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'light-gray'>;
    blockImageHeight: Attribute.Boolean & Attribute.DefaultTo<false>;
    images: Attribute.Media & Attribute.Required;
    headerAs: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.DefaultTo<'h2'>;
    header: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Blok 1'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    paragraph1: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Tu b\u0119dzie akapit lub dwa tekstu, ilustrowane nieobowi\u0105zkowymI, kwadratowymi obrazkami (slideshow). Je\u015Bli nie ma obrazka, zostaje kolor t\u0142a. Kontrolki w\u0142\u0105czaj\u0105 si\u0119 na hover, podpis (je\u015Bli jest) jest widoczny ca\u0142y czas. '>;
    paragraph2: Attribute.Text;
    paragraphColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'black'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    linkUrl1: Attribute.String;
    linkText1: Attribute.String &
      Attribute.DefaultTo<'Zobacz inne produkty \u2192'>;
    linkUrl2: Attribute.String;
    linkText2: Attribute.String;
  };
}

export interface SectionsBlock2 extends Schema.Component {
  collectionName: 'components_sections_block2s';
  info: {
    displayName: 'Block2';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'light-gray'>;
    blockImageHeight: Attribute.Boolean & Attribute.DefaultTo<false>;
    images: Attribute.Media & Attribute.Required;
    headerAs: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.DefaultTo<'h2'>;
    header: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Blok 2'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    paragraph1: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Tu b\u0119dzie akapit lub dwa tekstu, ilustrowane nieobowi\u0105zkowymI, kwadratowymi obrazkami (slideshow). Je\u015Bli nie ma obrazka, zostaje kolor t\u0142a. Kontrolki w\u0142\u0105czaj\u0105 si\u0119 na hover, podpis (je\u015Bli jest) jest widoczny ca\u0142y czas. '>;
    paragraph2: Attribute.Text;
    paragraphColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'black'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    linkUrl1: Attribute.String;
    linkText1: Attribute.String &
      Attribute.DefaultTo<'Zobacz inne produkty \u2192'>;
    linkUrl2: Attribute.String;
    linkText2: Attribute.String;
  };
}

export interface SectionsBlock3 extends Schema.Component {
  collectionName: 'components_sections_block3s';
  info: {
    displayName: 'Block3';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'light-gray'>;
    blockImageHeight: Attribute.Boolean & Attribute.DefaultTo<false>;
    images: Attribute.Media & Attribute.Required;
    headerAs: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.DefaultTo<'h2'>;
    header: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Blok 3'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    paragraph1: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Tu b\u0119dzie akapit lub dwa tekstu, ilustrowane nieobowi\u0105zkowymI, kwadratowymi obrazkami (slideshow). Je\u015Bli nie ma obrazka, zostaje kolor t\u0142a. Kontrolki w\u0142\u0105czaj\u0105 si\u0119 na hover, podpis (je\u015Bli jest) jest widoczny ca\u0142y czas. '>;
    paragraph2: Attribute.Text;
    paragraphColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'black'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    linkUrl1: Attribute.String;
    linkText1: Attribute.String &
      Attribute.DefaultTo<'Zobacz inne produkty \u2192'>;
    linkUrl2: Attribute.String;
    linkText2: Attribute.String;
  };
}

export interface SectionsBlock4 extends Schema.Component {
  collectionName: 'components_sections_block4s';
  info: {
    displayName: 'Block4';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'light-gray'>;
    blockImageHeight: Attribute.Boolean & Attribute.DefaultTo<false>;
    images: Attribute.Media & Attribute.Required;
    headerAs: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.DefaultTo<'h2'>;
    header: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Blok 4'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    paragraph1: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Tu b\u0119dzie akapit lub dwa tekstu, ilustrowane nieobowi\u0105zkowymI, kwadratowymi obrazkami (slideshow). Je\u015Bli nie ma obrazka, zostaje kolor t\u0142a. Kontrolki w\u0142\u0105czaj\u0105 si\u0119 na hover, podpis (je\u015Bli jest) jest widoczny ca\u0142y czas. '>;
    paragraph2: Attribute.Text;
    paragraphColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'black'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    linkUrl1: Attribute.String;
    linkText1: Attribute.String &
      Attribute.DefaultTo<'Zobacz inne produkty \u2192'>;
    linkUrl2: Attribute.String;
    linkText2: Attribute.String;
  };
}

export interface SectionsBlock5 extends Schema.Component {
  collectionName: 'components_sections_block5s';
  info: {
    displayName: 'Block5';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'light-gray'>;
    blockImageHeight: Attribute.Boolean & Attribute.DefaultTo<false>;
    images: Attribute.Media & Attribute.Required;
    headerAs: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.DefaultTo<'h2'>;
    header: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Blok 5'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    paragraph1: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Tu b\u0119dzie akapit lub dwa tekstu, ilustrowane nieobowi\u0105zkowymI, kwadratowymi obrazkami (slideshow). Je\u015Bli nie ma obrazka, zostaje kolor t\u0142a. Kontrolki w\u0142\u0105czaj\u0105 si\u0119 na hover, podpis (je\u015Bli jest) jest widoczny ca\u0142y czas. '>;
    paragraph2: Attribute.Text;
    paragraphColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'black'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    linkUrl1: Attribute.String;
    linkText1: Attribute.String &
      Attribute.DefaultTo<'Zobacz inne produkty \u2192'>;
    linkUrl2: Attribute.String;
    linkText2: Attribute.String;
    paragraphLinks: Attribute.Component<'other.paragraph-links', true>;
  };
}

export interface SectionsBlock6 extends Schema.Component {
  collectionName: 'components_sections_block6s';
  info: {
    displayName: 'Block6';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'light-gray'>;
    blockImageHeight: Attribute.Boolean & Attribute.DefaultTo<false>;
    images: Attribute.Media & Attribute.Required;
    headerAs: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.DefaultTo<'h2'>;
    header: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Blok 6'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    paragraph1: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Tu b\u0119dzie akapit lub dwa tekstu, ilustrowane nieobowi\u0105zkowymI, kwadratowymi obrazkami (slideshow). Je\u015Bli nie ma obrazka, zostaje kolor t\u0142a. Kontrolki w\u0142\u0105czaj\u0105 si\u0119 na hover, podpis (je\u015Bli jest) jest widoczny ca\u0142y czas. '>;
    paragraph2: Attribute.Text;
    paragraphColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'black'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    linkUrl1: Attribute.String;
    linkText1: Attribute.String &
      Attribute.DefaultTo<'Zobacz inne produkty \u2192'>;
    linkUrl2: Attribute.String;
    linkText2: Attribute.String;
    paragraphLinks: Attribute.Component<'other.paragraph-links', true>;
  };
}

export interface SectionsBlock7 extends Schema.Component {
  collectionName: 'components_sections_block7s';
  info: {
    displayName: 'Block7';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'light-gray'>;
    blockImageHeight: Attribute.Boolean & Attribute.DefaultTo<false>;
    images: Attribute.Media & Attribute.Required;
    headerAs: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.DefaultTo<'h2'>;
    header: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Blok 7'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    paragraph1: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Tu b\u0119dzie akapit lub dwa tekstu, ilustrowane nieobowi\u0105zkowymI, kwadratowymi obrazkami (slideshow). Je\u015Bli nie ma obrazka, zostaje kolor t\u0142a. Kontrolki w\u0142\u0105czaj\u0105 si\u0119 na hover, podpis (je\u015Bli jest) jest widoczny ca\u0142y czas. '>;
    paragraph2: Attribute.Text;
    paragraphColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'black'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    linkUrl1: Attribute.String;
    linkText1: Attribute.String &
      Attribute.DefaultTo<'Zobacz inne produkty \u2192'>;
    linkUrl2: Attribute.String;
    linkText2: Attribute.String;
    paragraphLinks: Attribute.Component<'other.paragraph-links', true>;
  };
}

export interface SectionsHero1 extends Schema.Component {
  collectionName: 'components_sections_hero1s';
  info: {
    displayName: 'Hero1';
    icon: 'picture';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'gray'>;
    header: Attribute.String & Attribute.DefaultTo<'Hero 1'>;
    headerBold: Attribute.String;
    headerAs: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.DefaultTo<'h1'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    linkUrl1: Attribute.String;
    linkText1: Attribute.String;
    images: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'other.paragraph-links': OtherParagraphLinks;
      'sections.block1': SectionsBlock1;
      'sections.block2': SectionsBlock2;
      'sections.block3': SectionsBlock3;
      'sections.block4': SectionsBlock4;
      'sections.block5': SectionsBlock5;
      'sections.block6': SectionsBlock6;
      'sections.block7': SectionsBlock7;
      'sections.hero1': SectionsHero1;
    }
  }
}
