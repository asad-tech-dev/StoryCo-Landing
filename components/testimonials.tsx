"use client";

import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";
import TestimonialImg07 from "@/public/images/testimonial-07.jpg";
import TestimonialImg08 from "@/public/images/testimonial-08.jpg";
import TestimonialImg09 from "@/public/images/testimonial-09.jpg";

const testimonials = [
  {
    img: TestimonialImg01,
    name: "MaKayla P.",
    company: "Versora",
    content:
      "Finding high-quality content used to be a hassle, but this agency changed everything. Their community of talented writers delivers exceptional content tailored to my brand’s voice.",
  },
  {
    img: TestimonialImg02,
    name: "Andrew K.",
    company: "Synthora",
    content:
      "Working with this agency has been a game-changer. Their writers understand exactly what I need and consistently produce well-researched, engaging content that resonates with my audience.",
  },
  {
    img: TestimonialImg03,
    name: "Lucy D.",
    company: "Orbitec",
    content:
      "I struggled to keep up with content demands, but this platform made it effortless. The writers here are skilled, reliable, and always deliver on time.",
  },
  {
    img: TestimonialImg04,
    name: "Pavel M.",
    company: "Quanticraft",
    content:
      "This agency has been my go-to for content creation. Their network of expert writers ensures I get top-notch articles, blogs, and website copy whenever I need it.",
  },
  {
    img: TestimonialImg05,
    name: "Miriam E.",
    company: "Lumina Works",
    content:
      "Outsourcing content used to be hit or miss, but this agency changed the game. The quality, creativity, and professionalism of their writers are unmatched.",
  },
  {
    img: TestimonialImg06,
    name: "Eloise V.",
    company: "Braventa",
    content:
      "Thanks to this platform, I no longer stress about content creation. Their writers are amazing, delivering compelling and SEO-friendly content that boosts my brand’s online presence.",
  },
  {
    img: TestimonialImg07,
    name: "Pierre-Gilles L.",
    company: "Createure",
    content:
      "This agency has been a lifesaver for my business! Their writers create content that not only meets my expectations but also engages my audience perfectly.",
  },
  {
    img: TestimonialImg08,
    name: "Danielle K.",
    company: "Inkspire Studio",
    content:
      "I’ve worked with many content services, but none compare to this one. The writers are talented, responsive, and always deliver high-quality work on time.",
  },
  {
    img: TestimonialImg09,
    name: "Mary P.",
    company: "Bitnest",
    content:
      "The writers on this platform truly understand storytelling. Every piece they deliver is well-crafted, engaging, and perfectly aligned with my brand’s vision.",
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            What People Are Saying About Us
          </h2>
          <p className="text-lg text-indigo-200/65">
            Hear from our users who have experienced the impact of
            our expert content writing services. Their words reflect our
            commitment to quality, creativity, and excellence.
          </p>
        </div>

        <div
          className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
          ref={masonryContainer}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <Testimonial testimonial={testimonial}>
                {testimonial.content}
              </Testimonial>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  children,
}: {
  testimonial: {
    img: StaticImageData;
    name: string;
    company: string;
    content: string;
  };
  children: React.ReactNode;
}) {
  return (
    <article className="relative rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
      <div className="flex flex-col gap-4">
        <div>
        </div>
        <p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
          {children}
        </p>
        <div className="flex items-center gap-3">
          <Image
            className="inline-flex shrink-0 rounded-full"
            src={testimonial.img}
            width={36}
            height={36}
            alt={testimonial.name}
          />
          <div className="text-sm font-medium text-gray-200">
            <span>{testimonial.name}</span>
            <span className="text-gray-700"> - </span>
            <a
              className="text-indigo-200/65 transition-colors hover:text-indigo-500"
              href="#0"
            >
              {testimonial.company}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
