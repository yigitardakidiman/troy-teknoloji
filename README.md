# Troy Teknoloji Landing Page

Troy Teknoloji için Next.js App Router, TypeScript ve Tailwind CSS ile hazırlanmış; modüler, responsive ve erişilebilir kurumsal landing page başlangıç projesidir.

## Gereksinimler

- Node.js 20.9 veya üzeri
- npm 10 veya üzeri

## Kurulum

```bash
npm install
npm run dev
```

Uygulama varsayılan olarak [http://localhost:3000](http://localhost:3000) adresinde açılır.

## Kontrol komutları

```bash
npm run lint
npm run build
npm run format:check
```

Production build'i yerelde çalıştırmak için:

```bash
npm run build
npm run start
```

## Medya dosyaları

Medya dosyaları telif ve dosya boyutu nedeniyle projede yer tutucu yollarla tanımlanmıştır. Aşağıdaki dosyaları belirtilen adlarla ekleyin:

| Dosya                                     | Zorunluluk   | Açıklama                                                                          |
| ----------------------------------------- | ------------ | --------------------------------------------------------------------------------- |
| `public/videos/rocket-launch.mp4`         | Önerilen     | Masaüstü hero videosu; H.264, sessiz ve web için optimize edilmiş                 |
| `public/videos/rocket-launch.webm`        | Opsiyonel    | Daha verimli WebM masaüstü alternatifi                                            |
| `public/videos/rocket-launch-mobile.mp4`  | Opsiyonel    | Dikey/yakın kadrajlı, daha düşük boyutlu mobil video                              |
| `public/videos/rocket-launch-mobile.webm` | Opsiyonel    | Mobil WebM alternatifi                                                            |
| `public/images/rocket-poster.webp`        | Önerilen     | Video yüklenirken, hata verdiğinde ve reduced-motion tercihinde gösterilen poster |
| `public/images/troy-logo.svg`             | Opsiyonel    | Resmî logo; yoksa metin logosu otomatik görünür                                   |
| `public/images/og-cover.jpg`              | Yayın öncesi | 1200×630 px sosyal paylaşım görseli                                               |
| `public/images/favicon.svg`               | Yayın öncesi | Tarayıcı ve manifest ikonu                                                        |

Video veya poster henüz eklenmemişse hero alanı CSS ile üretilen koyu teknik gradient arka planına düşer; içerik ve sayfa düzeni bozulmaz. Logo bulunmazsa sade `TROY TEKNOLOJİ` metin işareti kullanılır. Proje yeni bir logo üretmez.

### Önerilen medya optimizasyonu

- Hero videosunu mümkün olduğunca kısa bir döngü olarak hazırlayın.
- MP4 için H.264, WebM için VP9/AV1 kullanın; ses kanalını tamamen kaldırın.
- Masaüstü dosyasını yaklaşık 1080p, mobil dosyayı 720p sınırında tutun.
- Poster görselini 1920×1080 veya eşdeğer oranlı WebP olarak dışa aktarın.
- Metnin bulunduğu sol bölgede görsel karmaşıklığını düşük tutan bir kadraj seçin.

## İçerik yönetimi

Navigasyon, hero metinleri, uzmanlık alanları, medya yolları ve iletişim alanları tek bir dosyadan yönetilir:

```text
src/content/site.ts
```

Doğrulanmış e-posta, telefon ve adres bilgileri geldiğinde `contact` alanları burada doldurulabilir. Placeholder bölümleri `siteContent.placeholders` dizisinden kaldırılabilir veya kendi section bileşenleriyle değiştirilebilir.

## Proje yapısı

```text
docs/
├── DESIGN.md               # Tasarım sistemi ve stil rehberi
└── PRODUCT.md              # Ürün gereksinimleri ve yol haritası
src/
├── app/                    # App Router, metadata ve manifest
├── components/
│   ├── layout/             # Navbar, Logo, Footer
│   ├── sections/           # Hero, uzmanlık ve placeholder bölümleri
│   └── ui/                 # Button, container ve başlık bileşenleri
├── content/                # Merkezi site içeriği
├── lib/                    # Küçük yardımcı fonksiyonlar
└── styles/                 # Global stiller ve tasarım tokenları
public/
├── images/
└── videos/
```

## SEO ve yayın ayarı

Yayına almadan önce `.env.example` dosyasını `.env.local` olarak kopyalayın ve gerçek site adresini girin:

```env
NEXT_PUBLIC_SITE_URL=https://gercek-domain.example
```

Metadata, Open Graph, manifest ve temel `Organization` JSON-LD altyapısı hazırdır. Firma adresi, iletişim bilgisi, sosyal medya hesabı veya sertifika gibi doğrulanmamış bilgiler eklenmemiştir.

## Tasarım tokenları

Renk sistemi `src/styles/globals.css` dosyasındaki CSS değişkenleri üzerinden yönetilir. Ana arka plan, yüzey, turuncu vurgu, metin ve teknik çizgi renkleri burada tek noktadan değiştirilebilir.
