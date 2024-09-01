import type { Schema, Attribute } from '@strapi/strapi';

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
      'sections.block1': SectionsBlock1;
      'sections.block2': SectionsBlock2;
      'sections.hero1': SectionsHero1;
    }
  }
}
