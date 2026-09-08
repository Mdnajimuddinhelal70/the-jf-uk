import { useTranslations } from "next-intl";
import Image from "next/image";

const founderImages = [
  {
    src: "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788885665/WhatsApp_Image_2026-09-08_at_10.26.04_PM_1_rg3xxv.jpg",
    alt: "Founder photo 1",
  },
  {
    src: "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788885031/WhatsApp_Image_2026-09-08_at_10.26.02_PM_2_fqu2hu.jpg",
    alt: "Founder photo 1",
  },
  {
    src: "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788885031/WhatsApp_Image_2026-09-08_at_10.26.02_PM_1_csrtod.jpg",
    alt: "Founder photo 2",
  },
  {
    src: "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788885031/WhatsApp_Image_2026-09-08_at_10.26.02_PM_admc6r.jpg",
    alt: "Founder photo 3",
  },
  {
    src: "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788885031/WhatsApp_Image_2026-09-08_at_10.26.01_PM_2_zjbwmn.jpg",
    alt: "Founder photo 4",
  },
  {
    src: "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788885031/WhatsApp_Image_2026-09-08_at_10.26.01_PM_1_qem7kx.jpg",
    alt: "Founder photo 5",
  },
  {
    src: "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788885032/WhatsApp_Image_2026-09-08_at_10.26.01_PM_3_gqp3jc.jpg",
    alt: "Founder photo 6",
  },
  {
    src: "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788885032/WhatsApp_Image_2026-09-08_at_10.25.58_PM_1_mihwgs.jpg",
    alt: "Founder photo 7",
  },
  {
    src: "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788885033/WhatsApp_Image_2026-09-08_at_10.25.59_PM_ene6vn.jpg",
    alt: "Founder photo 8",
  },
  {
    src: "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788885033/WhatsApp_Image_2026-09-08_at_10.25.58_PM_2_dgkwno.jpg",
    alt: "Founder photo 9",
  },
  {
    src: "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788885033/WhatsApp_Image_2026-09-08_at_10.26.01_PM_hfxxya.jpg",
    alt: "Founder photo 10",
  },
  {
    src: "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788885033/WhatsApp_Image_2026-09-08_at_10.26.04_PM_rj98vx.jpg",
    alt: "Founder photo 11",
  },
  {
    src: "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788885033/WhatsApp_Image_2026-09-08_at_10.26.03_PM_2_zacfac.jpg",
    alt: "Founder photo 12",
  },
  {
    src: "https://res.cloudinary.com/dpgjlcycl/image/upload/v1788885034/WhatsApp_Image_2026-09-08_at_10.26.03_PM_oawehz.jpg",
    alt: "Founder photo 13",
  },
];

export default function FounderGallery() {
  const t = useTranslations("FounderGallery.Gallery");

  return (
    <section className="relative overflow-hidden bg-base-100 py-20 lg:py-28">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-5 text-3xl font-bold leading-tight text-base-content sm:text-4xl lg:text-5xl">
            {t("galleryTitle")}{" "}
            <span className="text-primary">{t("galleryTitleHighlight")}</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-base-content/70 sm:text-lg">
            {t("galleryDescription")}
          </p>
        </div>

        {/* Gallery */}
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {founderImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-base-200 shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
