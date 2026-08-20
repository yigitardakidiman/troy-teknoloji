export type NavigationItem = {
  label: string;
  href: string;
};

export type ExpertiseItem = {
  title: string;
  code: string;
};

export const siteContent = {
  company: {
    name: "Troy Teknoloji",
    legalName: "Troy Teknoloji",
    description:
      "Ürün geliştirme, mekanik ve elektromekanik sistemler, hızlı prototipleme ve ileri mühendislik alanlarında AR-GE çözümleri.",
  },
  navigation: [
    { label: "Ana Sayfa", href: "#ana-sayfa" },
    { label: "Uzmanlık Alanları", href: "#uzmanlik-alanlari" },
    { label: "Hakkımızda", href: "#hakkimizda" },
    { label: "İletişim", href: "#iletisim" },
  ] satisfies NavigationItem[],
  hero: {
    eyebrow: "2004'ten beri mühendislik ve AR-GE",
    title: "Geleceğin Teknolojilerini\nBugünden Geliştiriyoruz.",
    description:
      "Ürün tasarımından mekanik ve elektromekanik sistemlere, hızlı prototiplemeden ileri mühendislik çözümlerine uzanan AR-GE kabiliyeti.",
    primaryAction: {
      label: "Uzmanlık Alanlarımız",
      href: "#uzmanlik-alanlari",
    },
    secondaryAction: {
      label: "Bizimle İletişime Geçin",
      href: "#iletisim",
    },
  },
  media: {
    logo: "/images/troy-logo.png",
    heroPoster: "/images/rocket-poster.webp",
    heroVideo: "/videos/rocket-launch.mp4",
    heroVideoWebm: "/videos/rocket-launch.webm",
    heroVideoMobile: "/videos/rocket-launch-mobile.mp4",
    heroVideoMobileWebm: "/videos/rocket-launch-mobile.webm",
    openGraphImage: "/images/og-cover.jpg",
    favicon: "/images/favicon.svg",
  },
  expertise: [
    { title: "Ürün Tasarımı ve Geliştirme", code: "01" },
    { title: "Mekanik ve Elektromekanik Sistemler", code: "02" },
    { title: "Hızlı Prototipleme Teknolojileri", code: "03" },
    { title: "Piroteknik Kimyasallar", code: "04" },
  ] satisfies ExpertiseItem[],
  placeholders: [
    {
      id: "arge-kabiliyetleri",
      eyebrow: "AR-GE",
      title: "AR-GE Kabiliyetleri",
    },
    {
      id: "projeler",
      eyebrow: "Projeler",
      title: "Öne Çıkan Projeler",
    },
    {
      id: "hakkimizda",
      eyebrow: "Kurumsal",
      title: "Hakkımızda",
    },
    {
      id: "kalite-politikasi",
      eyebrow: "Kalite",
      title: "Kalite Politikası",
    },
    {
      id: "iletisim",
      eyebrow: "İletişim",
      title: "İletişim",
    },
  ],
  // Doğrulanmış iletişim bilgileri alındığında bu alanlar doldurulabilir.
  contact: {
    email: null as string | null,
    phone: null as string | null,
    address: null as string | null,
  },
} as const;
