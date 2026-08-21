---
name: Troy Teknoloji
description: Aerospace Propulsion & Telemetry design system for advanced R&D and defense engineering
colors:
  propulsion-orange: "#ef6a2e"
  thrust-flame: "#ff7b3d"
  deep-space-void: "#07111b"
  abyssal-dark: "#030a11"
  technical-slate: "#0d1822"
  cockpit-panel: "#111f2b"
  telemetry-blue: "#6386a1"
  reticle-line: "rgba(126, 166, 196, 0.16)"
  titanium-white: "#f2f0eb"
  alloy-mist: "#b7c0c8"
  radar-gray: "#7d8a96"
  precision-ink: "#0b1015"
typography:
  display:
    fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif'
    fontSize: "clamp(2.7rem, 8vw, 6.75rem)"
    fontWeight: 500
    lineHeight: 0.96
    letterSpacing: "-0.055em"
  headline:
    fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif'
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  title:
    fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif'
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: '"SFMono-Regular", Consolas, "Liberation Mono", monospace'
    fontSize: "0.68rem"
    fontWeight: 600
    letterSpacing: "0.24em"
rounded:
  none: "0px"
  xs: "2px"
  sm: "4px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.propulsion-orange}"
    textColor: "{colors.precision-ink}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.thrust-flame}"
    textColor: "{colors.precision-ink}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.03)"
    textColor: "{colors.titanium-white}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-secondary-hover:
    backgroundColor: "rgba(255, 255, 255, 0.08)"
    textColor: "{colors.titanium-white}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
---

# Design System: Troy Teknoloji

## Overview

**Creative North Star: "Aerospace Propulsion & Telemetry"**

Troy Teknoloji tasarım dili, 2004 yılından bu yana süregelen kritik savunma, havacılık ve ileri mekanik mühendisliği disiplinini dijital ortama taşır. Arayüz; derin teknik koyu arka planlar, yüksek kontrastlı telemetri ızgaraları, 1px hassasiyetinde reticle sınırları ve kontrollü itki alevini simgeleyen canlı turuncu aksanlarla karakterize edilir.

Tasarım felsefesi süslemeci (decorative) değil, operasyonel ve işlevseldir (instrumentation). Görsel hiyerarşi; teknik çizim ve havacılık kokpit enstrümantasyonunu andıran net grid yapıları, monospaced telemetri kodları (`01`, `02`, `03`, `04`) ve keskin form dili üzerine kuruludur.

**Key Characteristics:**
- **Derin Uzay & Kokpit Paleti:** `#07111b` ve `#030a11` tonlarında derin koyu zemin üzerine kurulan yüksek kontrast.
- **Keskin & Taktik Form Dili:** Sıfır radiuslu, net kenarlı, 1px teknik sınırlara sahip buton ve panel mimarisi.
- **Telemetri & Reticle Hassasiyeti:** Sayısal veri göstergelerinde monospaced tipografi, teknik artı/çember işaretleri ve ızgara zeminleri.
- **Propulsion Vurgusu:** Yalnızca birincil aksiyon ve aktif durumlarda kullanılan yüksek enerjili turuncu vurgu.

## Colors

Palet, derin havacılık karanlığı, soğuk teknik metalik tonlar ve yüksek enerjili itki alevi turuncusunun kontrollü kontrastı üzerine inşa edilmiştir.

### Primary
- **Propulsion Orange** (`#ef6a2e`): Birincil aksiyon butonları, aktif navigasyon çizgileri, odak halkaları ve telemetri işaretçileri. Nadir ve yüksek etkili kullanılır.
- **Thrust Flame** (`#ff7b3d`): Birincil butonların hover durumu ve yüksek enerjili etkileşim geri bildirimleri.

### Neutral
- **Deep Space Void** (`#07111b`): Sayfanın ana arka plan tonu; derin, mat ve yansımayı absorbe eden teknik koyuluk.
- **Abyssal Dark** (`#030a11`): Sayfa tabanı, video arka planları ve footer zemin rengi.
- **Technical Slate** (`#0d1822`): İçerik bölümleri ve uzmanlık alanları için zemin yüzeyi.
- **Cockpit Panel** (`#111f2b`): Kartlar ve yükseltilmiş panel yüzeyleri.
- **Telemetry Blue** (`#6386a1`): İkincil teknik ikonlar, koordinat çizgileri ve diyagram işaretçileri.
- **Reticle Line** (`rgba(126, 166, 196, 0.16)`): Kart sınırları, ayırıcı 1px çizgiler ve ızgara reticle hatları.
- **Titanium White** (`#f2f0eb`): Birincil başlıklar ve yüksek önem derecesine sahip metinler.
- **Alloy Mist** (`#b7c0c8`): İkincil metinler, açıklamalar ve standart etiketler.
- **Radar Gray** (`#7d8a96`): Açıklama altı notlar, pasif yer tutucu metinler ve telif yazıları.
- **Precision Ink** (`#0b1015`): Birincil turuncu buton metin rengi ve seçim (selection) metin rengi.

### Named Rules
**The Propulsion Sparsity Rule.** Canlı turuncu (`#ef6a2e`) vurgusu ekran alanının azami %8'inde kullanılır. Rengin nadirliği, dikkat çekme gücünün ve aciliyetinin temel kaynağıdır.

**The Reticle & Axis Rule.** Bölüm ve kart ayrımları daima `rgba(126, 166, 196, 0.16)` değerinde 1px kesintisiz veya gradyanlı çizgilerle sağlanır; asla kalın veya bulanık yapay gölgeler kullanılmaz.

## Typography

**Display & Headline Font:** Arial, "Helvetica Neue", Helvetica, sans-serif  
**Body Font:** Arial, "Helvetica Neue", Helvetica, sans-serif  
**Label/Mono Font:** "SFMono-Regular", Consolas, "Liberation Mono", monospace  

**Character:** Sans-serif font ailesi endüstriyel netlik ve yüksek okunabilirlik sağlarken; monospaced kod ailesi telemetri, teknik indeksler ve mikro etiketlerde askeri/mühendislik hassasiyeti sunar.

### Hierarchy
- **Display** (500 Medium, `clamp(2.7rem, 8vw, 6.75rem)`, line-height: `0.96`, tracking: `-0.055em`): Hero ana başlığı için kullanılır; dramatik ölçek ve sıkı harf aralığına sahiptir.
- **Headline** (500 Medium, `clamp(1.875rem, 4vw, 3rem)`, line-height: `1.15`, tracking: `-0.035em`): Bölüm başlıkları (`SectionHeading`).
- **Title** (500 Medium, `1.25rem - 1.5rem`, line-height: `1.3`, tracking: `-0.025em`): Uzmanlık kartı başlıkları ve modal başlıkları.
- **Body** (400 Regular, `0.875rem - 1rem`, line-height: `1.75`, normal tracking): Açıklama paragrafları ve gövde metinleri (azami genişlik 65-75ch).
- **Label / Eyebrow** (600 Semibold, `0.62rem - 0.72rem`, uppercase, tracking: `0.19em - 0.24em`): Üst başlıklar (eyebrows), buton metinleri ve navigasyon linkleri.
- **Mono Telemetry** (Regular/Medium, `0.62rem - 0.75rem`, font-mono, tracking: `0.16em`): Bölüm numaralandırmaları (`01`, `02`), teknik parametreler ve indeks kodları.

### Named Rules
**The Monospaced Telemetry Rule.** Tüm sayısal kodlar, bölüm indeksleri ve teknik parametreler `font-mono` ile yazılır ve mutlaka çift basamaklı (`01`, `02`) veya teknik ön ekli formatlanır.

**The Uppercase Eyebrow Rule.** Tüm üst başlıklar (eyebrow) ve buton etiketleri büyük harf (uppercase) ve geniş harf aralığı (`tracking-[0.14em]` ile `tracking-[0.24em]`) ile oluşturulur.

## Layout

Izgara ve yerleşim yapısı 1440px maksimum konteyner genişliği (`max-w-[1440px]`) ve 8px tabanlı aralık ritmi üzerine oturur.

- **Konteyner ve Dolgular:** Sayfa yan boşlukları mobil için `px-5` (20px), tablet için `px-8` (32px), masaüstü için `lg:px-12` (48px) ve geniş ekranlar için `xl:px-16` (64px).
- **Bölüm Dikey Aralıkları:** Standart bölümler mobilde `py-20` (80px), geniş ekranlarda `lg:py-32` (128px) dikey nefes alma alanı kullanır.
- **Izgara Dokusu (`.hero-grid` / `.placeholder-grid`):** Arka planlarda 80px/32px ölçülerinde %5.5-7 opaklıkta teknik koordinat çizgileri ve maskelenmiş gradyanlar yer alır.
- **Duyarlı Ayrışma:** Masaüstünde 2 sütunlu asimetrik yerleşim (`grid-cols-[0.8fr_1.2fr]` veya `grid-cols-[1fr_1.15fr]`); mobilde dikey akış.

## Elevation & Depth

Sistem, geleneksel bulanık kutu gölgeleri (diffuse drop-shadows) yerine **Tonal Katmanlaşma (Tonal Layering)** ve **1px Reticle Çizgileri** kullanır. Yüzeyler derinlik kazandıkça renk tonu `#030a11`'den `#07111b`, `#0d1822` ve `#111f2b`'ye doğru hafifçe aydınlanır.

### Shadow Vocabulary
- **Propulsion Button Glow** (`box-shadow: 0 12px 36px rgba(239, 106, 46, 0.22)`): Yalnızca birincil turuncu buton altında ve hover anlarında aktif itki hissi vermek için kullanılır.
- **Navbar Elevation Glow** (`box-shadow: 0 12px 40px rgba(0, 0, 0, 0.16)`): Kaydırma anında navbar altında beliren hafif derinlik efekti.
- **Technical Rings** (`box-shadow: 0 0 0 80px rgba(99, 134, 161, 0.035), 0 0 0 160px rgba(99, 134, 161, 0.025)`): Radar/telemetri halkası efekti.

### Named Rules
**The Zero Heavy Shadows Rule.** Kartlar ve bölümler için opak siyah gölgeler yasaktır. Derinlik yalnızca arka plan ton farkı ve `rgba(126, 166, 196, 0.16)` sınır çizgileriyle verilir.

## Shapes

- **Köşe Radyusu Felsefesi:** Taktik ve endüstriyel form dili gereği ana butonlar ve teknik kartlar **keskin köşelidir (`rounded: 0px`)**.
- **İstisnalar:** Yalnızca logo odak çerçevesi ve alt bilgi etiketlerinde mikro yumuşatma (`rounded-sm: 4px`) kullanılır.
- **Kenarlıklar:** Tüm sınır çizgileri `border-line` (`1px solid rgba(126, 166, 196, 0.16)`) standardını takip eder.

## Components

### Buttons
- **Shape:** Keskin dikdörtgen form (`border-radius: 0px`), minimum yükseklik 48px (`min-h-12`).
- **Primary:** `bg-accent` (`#ef6a2e`), `text-ink` (`#0b1015`), `border-accent`, `px-5 sm:px-6`. Hover durumunda `bg-accent-bright` (`#ff7b3d`) ve turuncu parlama gölgesi.
- **Secondary:** `bg-white/[0.03]`, `border-white/28`, `text-text-primary`, `backdrop-blur-sm`. Hover durumunda `border-white/55` ve `bg-white/[0.08]`.
- **Etkileşim:** Hover anında sağa kayan 16px SVG ok ikonu (`group-hover:translate-x-1`).

### Cards & Panels (Uzmanlık Alanları)
- **Corner Style:** Keskin (`rounded: 0px`).
- **Background:** `bg-white/[0.015]`, hover durumunda yumuşak geçişle `bg-white/[0.045]`.
- **Border:** 1px `border-line` ile sınırlandırılmış ızgara hücreleri.
- **Hover Efekti:** Kartın altında sıfırdan %100 genişliğe uzanan 1px turuncu çizgi (`transition-[width] duration-500`) ve 45 derece dönen teknik nişangah ikonu.

### Navigation Header
- **Style:** Sabit (fixed) üst bar, 80px-96px yükseklik.
- **Scrolled State:** `bg-background/88`, `backdrop-blur-xl`, `border-b border-line`.
- **Nav Links:** Büyük harf `text-[0.68rem] font-medium tracking-[0.14em]`, hover anında soldan sağa açılan turuncu alt çizgi (`after:h-px after:bg-accent`).
- **Mobile Menu:** Grid tabanlı akıcı açılış (`grid-rows-[1fr]`), `bg-background/96`, sağda iki basamaklı indeks numaraları (`01`, `02`).

### Section Headings
- **Structure:** 32px uzunluğunda yatay turuncu çizgi + `text-[0.68rem] tracking-[0.24em]` uppercase eyebrow; altında büyük puntolu title ve opsiyonel açıklama.

## Do's and Don'ts

### Do:
- **Do** tüm yeni bölümlerde 1px `border-line` (`rgba(126, 166, 196, 0.16)`) ayırıcı çizgi standardını koruyun.
- **Do** sayısal indeksleri ve telemetri verilerini `font-mono` ve iki basamaklı (`01`, `02`, `03`) olarak biçimlendirin.
- **Do** aksiyon butonlarında büyük harf, geniş harf aralığı (`tracking-[0.13em]`) ve ok ikonunu birlikte kullanın.
- **Do** `prefers-reduced-motion` sorgusunu her animasyonlu bileşende eksiksiz uygulayın.

### Don't:
- **Don't** yuvarlak hatlı (pill / `rounded-full`) butonlar veya yumuşak balonumsu kartlar kullanmayın.
- **Don't** jenerik mor/pembe neon SaaS gradyanları veya rastgele renk geçişleri eklemeyin.
- **Don't** turuncu rengi arka plan geniş bloklarında veya gövde metinlerinde kullanmayın (yalnızca aksiyon ve telemetri).
- **Don't** koyu ağır `box-shadow` gölgeleriyle derinlik vermeye çalışmayın; ton farkları ve sınır çizgilerini tercih edin.
