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

export interface OtherPersons extends Schema.Component {
  collectionName: 'components_other_persons';
  info: {
    displayName: 'Persons';
    description: '';
  };
  attributes: {
    avatar: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.DefaultTo<'Homer Jay Simpson'>;
    position: Attribute.String & Attribute.DefaultTo<'PREZES ZARZ\u0104DU'>;
    email: Attribute.String & Attribute.DefaultTo<'@baukustik.com'>;
    phone: Attribute.String & Attribute.DefaultTo<'+48 777 777 777'>;
  };
}

export interface OtherProducts extends Schema.Component {
  collectionName: 'components_other_products';
  info: {
    displayName: 'products';
    description: '';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Typ A \u2192'>;
    description: Attribute.Text & Attribute.DefaultTo<'Opis'>;
    link: Attribute.String & Attribute.DefaultTo<'#'>;
    images: Attribute.Media & Attribute.Required;
    weight: Attribute.String;
    size: Attribute.String;
  };
}

export interface OtherSlide extends Schema.Component {
  collectionName: 'components_other_slides';
  info: {
    displayName: 'slide';
    icon: 'picture';
    description: '';
  };
  attributes: {
    header: Attribute.String & Attribute.DefaultTo<'Hero 6'>;
    headerAs: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.DefaultTo<'h1'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    linkUrl1: Attribute.String & Attribute.DefaultTo<'#'>;
    linkText1: Attribute.String &
      Attribute.DefaultTo<'Zobacz realizacj\u0119 \u2192'>;
    images: Attribute.Media;
    bgMask: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface OtherSlide2 extends Schema.Component {
  collectionName: 'components_other_slide2s';
  info: {
    displayName: 'slide2';
    icon: 'picture';
    description: '';
  };
  attributes: {
    header: Attribute.String & Attribute.DefaultTo<'Hero '>;
    headerAs: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.DefaultTo<'h1'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    headerBold: Attribute.String;
    linkUrl1: Attribute.String & Attribute.DefaultTo<'#'>;
    linkText1: Attribute.String &
      Attribute.DefaultTo<'Zobacz realizacj\u0119 \u2192'>;
    images: Attribute.Media & Attribute.Required;
    bgMask: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface OtherSlide3 extends Schema.Component {
  collectionName: 'components_other_slide3s';
  info: {
    displayName: 'Slide3';
    icon: 'picture';
    description: '';
  };
  attributes: {
    linkUrl1: Attribute.String & Attribute.DefaultTo<'#'>;
    linkText1: Attribute.String &
      Attribute.DefaultTo<'Zobacz realizacj\u0119 \u2192'>;
    linkText2: Attribute.String &
      Attribute.DefaultTo<'Zobacz realizacj\u0119 \u2192'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    images: Attribute.Media & Attribute.Required;
    bgMask: Attribute.Boolean & Attribute.DefaultTo<true>;
    linkUrl2: Attribute.String & Attribute.DefaultTo<'#'>;
  };
}

export interface OtherTable extends Schema.Component {
  collectionName: 'components_other_tables';
  info: {
    displayName: 'Table';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Nazwa parametru'>;
    images: Attribute.Media;
    data: Attribute.String & Attribute.DefaultTo<'Warto\u015B\u0107'>;
  };
}

export interface OtherTags extends Schema.Component {
  collectionName: 'components_other_tags';
  info: {
    displayName: 'tags';
    description: '';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Tynki Sonaspray'>;
    value: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Sonaspray'>;
  };
}

export interface SectionsAcousticParameter extends Schema.Component {
  collectionName: 'components_other_acoustic_parameters';
  info: {
    displayName: 'AcousticParameter';
    icon: 'volumeUp';
    description: '';
  };
  attributes: {
    header: Attribute.String & Attribute.DefaultTo<'Parametry akustyczne'>;
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    headerAs: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.DefaultTo<'h3'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    images: Attribute.Media;
    paramTable: Attribute.JSON & Attribute.Required;
    linkText1: Attribute.String &
      Attribute.DefaultTo<'Link do powi\u0105zanego zagadnienia \u2192'>;
    linkUrl1: Attribute.String & Attribute.DefaultTo<'#'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    scrollName: Attribute.String;
  };
}

export interface SectionsBlock1 extends Schema.Component {
  collectionName: 'components_sections_block1s';
  info: {
    displayName: 'Block1 - Txt+Pic';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'light-gray'>;
    blockImageHeight: Attribute.Boolean & Attribute.DefaultTo<true>;
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
    scrollName: Attribute.String;
  };
}

export interface SectionsBlock2 extends Schema.Component {
  collectionName: 'components_sections_block2s';
  info: {
    displayName: 'Block2 - Txt+PicHalf';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'light-gray'>;
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
    scrollName: Attribute.String;
  };
}

export interface SectionsBlock3 extends Schema.Component {
  collectionName: 'components_sections_block3s';
  info: {
    displayName: 'Block3 - Txt+PicBG';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'gray'>;
    bgImage: Attribute.Media;
    headerAs: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.DefaultTo<'h2'>;
    header: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Blok 3'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    paragraph1: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Tu b\u0119dzie akapit lub dwa tekstu, ilustrowane nieobowi\u0105zkowymI, kwadratowymi obrazkami (slideshow). Je\u015Bli nie ma obrazka, zostaje kolor t\u0142a. Kontrolki w\u0142\u0105czaj\u0105 si\u0119 na hover, podpis (je\u015Bli jest) jest widoczny ca\u0142y czas. '>;
    paragraph2: Attribute.Text;
    paragraphColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    linkUrl1: Attribute.String;
    linkText1: Attribute.String &
      Attribute.DefaultTo<'Zobacz inne produkty \u2192'>;
    linkUrl2: Attribute.String;
    linkText2: Attribute.String;
    bgMask: Attribute.Boolean & Attribute.DefaultTo<false>;
    bgVideo: Attribute.Media;
    scrollName: Attribute.String;
  };
}

export interface SectionsBlock4 extends Schema.Component {
  collectionName: 'components_sections_block4s';
  info: {
    displayName: 'Block4 - Title+BG';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'gray'>;
    bgImage: Attribute.Media;
    headerAs: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a']> &
      Attribute.DefaultTo<'h2'>;
    header: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Blok 4'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    linkUrl1: Attribute.String;
    linkText1: Attribute.String &
      Attribute.DefaultTo<'Zobacz inne produkty \u2192'>;
    linkUrl2: Attribute.String;
    linkText2: Attribute.String;
    bgMask: Attribute.Boolean & Attribute.DefaultTo<false>;
    headerHref: Attribute.String;
    headerHoverColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    bgVideo: Attribute.Media;
    scrollName: Attribute.String;
  };
}

export interface SectionsBlock5 extends Schema.Component {
  collectionName: 'components_sections_block5s';
  info: {
    displayName: 'Block5 - Links+Pic';
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
    paragraphLinkColor: Attribute.Enumeration<
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
    paragraphLinks: Attribute.Component<'other.paragraph-links', true> &
      Attribute.Required;
    scrollName: Attribute.String;
  };
}

export interface SectionsBlock6 extends Schema.Component {
  collectionName: 'components_sections_block6s';
  info: {
    displayName: 'Block6 - Links+BG';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'gray'>;
    bgImage: Attribute.Media;
    bgMask: Attribute.Boolean & Attribute.DefaultTo<false>;
    headerAs: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.DefaultTo<'h2'>;
    header: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Blok 6'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    paragraphLinkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    linkUrl1: Attribute.String;
    linkText1: Attribute.String &
      Attribute.DefaultTo<'Zobacz inne produkty \u2192'>;
    linkUrl2: Attribute.String;
    linkText2: Attribute.String;
    paragraphLinks: Attribute.Component<'other.paragraph-links', true> &
      Attribute.Required;
    bgVideo: Attribute.Media;
    scrollName: Attribute.String;
  };
}

export interface SectionsBlock7 extends Schema.Component {
  collectionName: 'components_sections_block7s';
  info: {
    displayName: 'Block7 - Txt+VideoEmbed';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'light-gray'>;
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
    url: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'uynCeLheCPc'>;
    scrollName: Attribute.String;
  };
}

export interface SectionsContactPerson extends Schema.Component {
  collectionName: 'components_sections_contact_people';
  info: {
    displayName: 'ContactPerson';
    icon: 'phone';
    description: '';
  };
  attributes: {
    header: Attribute.String &
      Attribute.DefaultTo<'Potrzebujesz naszego fachowego wsparcia?'>;
    headerAs: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']> &
      Attribute.DefaultTo<'h5'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    paragraph1: Attribute.Text &
      Attribute.DefaultTo<'Masz pytania? Nie wiesz, jaki produkt dobra\u0107? Potrzebujesz poprawi\u0107 akustyk\u0119 swojego projektu?'>;
    paragraphColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    linkText1: Attribute.String &
      Attribute.DefaultTo<'Skontaktuj si\u0119 z nami \u2192'>;
    linkUrl1: Attribute.String & Attribute.DefaultTo<'/kontakt'>;
    header2: Attribute.String;
    scrollName: Attribute.String;
    employe: Attribute.Relation<
      'sections.contact-person',
      'oneToOne',
      'api::employe.employe'
    >;
  };
}

export interface SectionsFiles extends Schema.Component {
  collectionName: 'components_sections_files';
  info: {
    displayName: 'Files';
    icon: 'file';
    description: '';
  };
  attributes: {
    header: Attribute.String &
      Attribute.DefaultTo<'Materia\u0142y do pobrania'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'light-gray'>;
    filesColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'black'>;
    filesHoverColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    files: Attribute.Media;
    paragraph1: Attribute.Text &
      Attribute.DefaultTo<'Potrzebujesz innych danych, potrzebnych do Twojego projektu lub spersonalizowanego produktu?'>;
    paragraphColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'black'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    linkText1: Attribute.String &
      Attribute.DefaultTo<'Skontaktuj si\u0119 z nami \u2192'>;
    linkUrl1: Attribute.String & Attribute.DefaultTo<'/kontakt'>;
    linkText2: Attribute.String;
    linkUrl2: Attribute.String;
    scrollName: Attribute.String;
  };
}

export interface SectionsHero2Category extends Schema.Component {
  collectionName: 'components_sections_hero_2_categories';
  info: {
    displayName: 'Hero2 - Category';
    icon: 'picture';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'gray'>;
    slide3: Attribute.Component<'other.slide3', true>;
    showBreadcrumb: Attribute.Boolean & Attribute.DefaultTo<true>;
    scrollName: Attribute.String;
  };
}

export interface SectionsHero1Home extends Schema.Component {
  collectionName: 'components_sections_hero1_home';
  info: {
    displayName: 'Hero1 - Home';
    icon: 'picture';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'gray'>;
    slide2: Attribute.Component<'other.slide2', true>;
    showBreadcrumb: Attribute.Boolean & Attribute.DefaultTo<false>;
    scrollName: Attribute.String;
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
    linkUrl1: Attribute.String & Attribute.DefaultTo<'#'>;
    linkText1: Attribute.String & Attribute.DefaultTo<'Zobacz produkty \u2192'>;
    images: Attribute.Media & Attribute.Required;
    scrollName: Attribute.String;
  };
}

export interface SectionsHero2 extends Schema.Component {
  collectionName: 'components_sections_hero2s';
  info: {
    displayName: 'Hero2';
    icon: 'picture';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'gray'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    linkUrl1: Attribute.String & Attribute.DefaultTo<'#'>;
    linkText1: Attribute.String & Attribute.DefaultTo<'Us\u0142ugi \u2192'>;
    images: Attribute.Media & Attribute.Required;
    linkUrl2: Attribute.String & Attribute.DefaultTo<'#'>;
    linkText2: Attribute.String & Attribute.DefaultTo<'Produkty \u2192'>;
    scrollName: Attribute.String;
  };
}

export interface SectionsHero3ProductGroup extends Schema.Component {
  collectionName: 'components_sections_hero3_product_groups';
  info: {
    displayName: 'Hero3 - ProductGroup';
    icon: 'picture';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'gray'>;
    slide2: Attribute.Component<'other.slide2', true>;
    showBreadcrumb: Attribute.Boolean & Attribute.DefaultTo<true>;
    scrollName: Attribute.String;
  };
}

export interface SectionsHero3 extends Schema.Component {
  collectionName: 'components_sections_hero3s';
  info: {
    displayName: 'Hero3';
    icon: 'picture';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'gray'>;
    header: Attribute.String & Attribute.DefaultTo<'Hero 3'>;
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
    linkUrl1: Attribute.String & Attribute.DefaultTo<'#'>;
    linkText1: Attribute.String & Attribute.DefaultTo<'Zobacz produkty \u2192'>;
    images: Attribute.Media & Attribute.Required;
    scrollName: Attribute.String;
  };
}

export interface SectionsHero4Product extends Schema.Component {
  collectionName: 'components_sections_hero4_product_groups';
  info: {
    displayName: 'Hero4 - Product';
    icon: 'picture';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'gray'>;
    slide2: Attribute.Component<'other.slide2', true>;
    showBreadcrumb: Attribute.Boolean & Attribute.DefaultTo<true>;
    scrollName: Attribute.String;
  };
}

export interface SectionsHero4 extends Schema.Component {
  collectionName: 'components_sections_hero4s';
  info: {
    displayName: 'Hero4';
    icon: 'picture';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'gray'>;
    header: Attribute.String & Attribute.DefaultTo<'Hero 4'>;
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
    linkUrl1: Attribute.String & Attribute.DefaultTo<'#'>;
    linkText1: Attribute.String & Attribute.DefaultTo<'Zobacz produkty \u2192'>;
    images: Attribute.Media & Attribute.Required;
    scrollName: Attribute.String;
  };
}

export interface SectionsHero5 extends Schema.Component {
  collectionName: 'components_sections_hero5s';
  info: {
    displayName: 'Hero5 - About';
    icon: 'picture';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    paragraphColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    paragraph: Attribute.Text & Attribute.Required;
    scrollName: Attribute.String;
  };
}

export interface SectionsHero6Product extends Schema.Component {
  collectionName: 'components_sections_hero6_products';
  info: {
    displayName: 'Hero6 - Realization';
    icon: 'picture';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'gray'>;
    slide: Attribute.Component<'other.slide', true>;
    showBreadcrumb: Attribute.Boolean & Attribute.DefaultTo<true>;
    scrollName: Attribute.String;
  };
}

export interface SectionsHero6 extends Schema.Component {
  collectionName: 'components_sections_hero6s';
  info: {
    displayName: 'Hero6';
    icon: 'picture';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'gray'>;
    header: Attribute.String & Attribute.DefaultTo<'Hero 6'>;
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
    linkUrl1: Attribute.String & Attribute.DefaultTo<'#'>;
    linkText1: Attribute.String &
      Attribute.DefaultTo<'Zobacz realizacj\u0119 \u2192'>;
    images: Attribute.Media & Attribute.Required;
    scrollName: Attribute.String;
  };
}

export interface SectionsHero7 extends Schema.Component {
  collectionName: 'components_sections_hero7s';
  info: {
    displayName: 'Hero7 - Contact';
    icon: 'picture';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    header: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Skontaktuj si\u0119 z nami:'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    text: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'black'>;
    headerForm: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Zadaj nam pytanie:'>;
    companyName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Baukustik sp. z o.o.'>;
    addressStreet: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u017Belechowska 2'>;
    address: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'04-854 Warszawa'>;
    phone: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'+48 732 922 622'>;
    email: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'info@baukustik.com'>;
    bankAccounts: Attribute.Text;
    formName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Twoje Imi\u0119 i Nazwisko*'>;
    formCompany: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Nazwa firmy'>;
    formPhone: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Telefon'>;
    formEmail: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Adres e-mail*'>;
    formMessage: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Tre\u015B\u0107 wiadomo\u015Bci*'>;
    formSubmit: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Wy\u015Blij \u2192'>;
    scrollName: Attribute.String;
  };
}

export interface SectionsPartnersGrid extends Schema.Component {
  collectionName: 'components_sections_partners_grids';
  info: {
    displayName: 'PartnersGrid';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    header: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Nasi partnerzy'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    paragraph1: Attribute.String &
      Attribute.DefaultTo<'Tu b\u0119dzie akapit tekstu, ilustrowany logami partner\u00F3w i firm wsp\u00F3\u0142pracuj\u0105cych.'>;
    paragraph2: Attribute.String;
    paragraphColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'black'>;
    linkText1: Attribute.String &
      Attribute.DefaultTo<'Link do powi\u0105zanego zagadnienia \u2192'>;
    linkUrl1: Attribute.String & Attribute.DefaultTo<'#'>;
    linkText2: Attribute.String;
    linkUrl2: Attribute.String;
    partnersLogo: Attribute.Media & Attribute.Required;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    scrollName: Attribute.String;
  };
}

export interface SectionsProductData extends Schema.Component {
  collectionName: 'components_sections_product_data';
  info: {
    displayName: 'ProductData';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    header: Attribute.String & Attribute.DefaultTo<'Dane techniczne'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'black'>;
    tableColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'white'>;
    images: Attribute.Media;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    linkText1: Attribute.String &
      Attribute.DefaultTo<'Link do powi\u0105zanego zagadnienia \u2192 '>;
    linkUrl1: Attribute.String & Attribute.DefaultTo<'#'>;
    table: Attribute.Component<'other.table', true>;
    scrollName: Attribute.String;
  };
}

export interface SectionsProduct1 extends Schema.Component {
  collectionName: 'components_sections_product1s';
  info: {
    displayName: 'Product1 - 3 Rects';
    icon: 'archive';
    description: '';
  };
  attributes: {
    header: Attribute.String & Attribute.Required & Attribute.DefaultTo<'Name'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'very-light-gray'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    linkText1: Attribute.String;
    linkUrl1: Attribute.String & Attribute.DefaultTo<'#'>;
    linkText2: Attribute.String;
    linkUrl2: Attribute.String;
    products: Attribute.Component<'other.products', true> & Attribute.Required;
    scrollName: Attribute.String;
  };
}

export interface SectionsProduct2 extends Schema.Component {
  collectionName: 'components_sections_product2s';
  info: {
    displayName: 'Product2 - 3 Rects Services';
    icon: 'archive';
    description: '';
  };
  attributes: {
    header: Attribute.String & Attribute.Required & Attribute.DefaultTo<'Name'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'very-light-gray'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    linkText1: Attribute.String;
    linkUrl1: Attribute.String & Attribute.DefaultTo<'#'>;
    linkText2: Attribute.String;
    linkUrl2: Attribute.String;
    products: Attribute.Component<'other.products', true> & Attribute.Required;
    scrollName: Attribute.String;
  };
}

export interface SectionsProduct3 extends Schema.Component {
  collectionName: 'components_sections_product3s';
  info: {
    displayName: 'Product3 - 4 Squares';
    icon: 'archive';
    description: '';
  };
  attributes: {
    header: Attribute.String & Attribute.Required & Attribute.DefaultTo<'Name'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'very-light-gray'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    linkText1: Attribute.String;
    linkUrl1: Attribute.String & Attribute.DefaultTo<'#'>;
    linkText2: Attribute.String;
    linkUrl2: Attribute.String;
    products: Attribute.Component<'other.products', true> & Attribute.Required;
    scrollName: Attribute.String;
  };
}

export interface SectionsProduct4 extends Schema.Component {
  collectionName: 'components_sections_product4s';
  info: {
    displayName: 'Product4 - 6 Squares';
    icon: 'archive';
    description: '';
  };
  attributes: {
    header: Attribute.String & Attribute.Required & Attribute.DefaultTo<'Name'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'very-light-gray'>;
    linkColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    linkText1: Attribute.String;
    linkUrl1: Attribute.String & Attribute.DefaultTo<'#'>;
    linkText2: Attribute.String;
    linkUrl2: Attribute.String;
    products: Attribute.Component<'other.products', true> & Attribute.Required;
    scrollName: Attribute.String;
  };
}

export interface SectionsRealizationGrid extends Schema.Component {
  collectionName: 'components_sections_realization_grids';
  info: {
    displayName: 'RealizationGrid';
    icon: 'apps';
  };
  attributes: {
    desc: Attribute.String;
  };
}

export interface SectionsTeam extends Schema.Component {
  collectionName: 'components_sections_teams';
  info: {
    displayName: 'Team';
    icon: 'user';
    description: '';
  };
  attributes: {
    header: Attribute.String &
      Attribute.DefaultTo<'Zesp\u00F3\u0142 Baukustik'>;
    headerColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    bg: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'very-light-gray'>;
    personColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'black'>;
    personContactColor: Attribute.Enumeration<
      ['white', 'green', 'black', 'gray', 'light-gray', 'very-light-gray']
    > &
      Attribute.DefaultTo<'green'>;
    persons: Attribute.Component<'other.persons', true>;
    scrollName: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'other.paragraph-links': OtherParagraphLinks;
      'other.persons': OtherPersons;
      'other.products': OtherProducts;
      'other.slide': OtherSlide;
      'other.slide2': OtherSlide2;
      'other.slide3': OtherSlide3;
      'other.table': OtherTable;
      'other.tags': OtherTags;
      'sections.acoustic-parameter': SectionsAcousticParameter;
      'sections.block1': SectionsBlock1;
      'sections.block2': SectionsBlock2;
      'sections.block3': SectionsBlock3;
      'sections.block4': SectionsBlock4;
      'sections.block5': SectionsBlock5;
      'sections.block6': SectionsBlock6;
      'sections.block7': SectionsBlock7;
      'sections.contact-person': SectionsContactPerson;
      'sections.files': SectionsFiles;
      'sections.hero-2-category': SectionsHero2Category;
      'sections.hero1-home': SectionsHero1Home;
      'sections.hero1': SectionsHero1;
      'sections.hero2': SectionsHero2;
      'sections.hero3-product-group': SectionsHero3ProductGroup;
      'sections.hero3': SectionsHero3;
      'sections.hero4-product': SectionsHero4Product;
      'sections.hero4': SectionsHero4;
      'sections.hero5': SectionsHero5;
      'sections.hero6-product': SectionsHero6Product;
      'sections.hero6': SectionsHero6;
      'sections.hero7': SectionsHero7;
      'sections.partners-grid': SectionsPartnersGrid;
      'sections.product-data': SectionsProductData;
      'sections.product1': SectionsProduct1;
      'sections.product2': SectionsProduct2;
      'sections.product3': SectionsProduct3;
      'sections.product4': SectionsProduct4;
      'sections.realization-grid': SectionsRealizationGrid;
      'sections.team': SectionsTeam;
    }
  }
}
