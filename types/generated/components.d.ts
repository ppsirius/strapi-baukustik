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
    >;
    blockImageHeight: Attribute.Boolean & Attribute.DefaultTo<false>;
    images: Attribute.Media;
    headerAs: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']>;
    header: Attribute.String;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    >;
    paragraph1: Attribute.Text;
    paragraph2: Attribute.Text;
    paragraphColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    >;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    >;
    linkUrl1: Attribute.String;
    linkText1: Attribute.String;
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
      'sections.hero1': SectionsHero1;
    }
  }
}
