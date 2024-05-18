import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="card-container rounded-lg  p-9 pt-7.5 shadow-solid-9 ">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div className="text-white">
          <h3 className="mb-1.5 text-metatitle3 text-white">{name}</h3>
          <p>{designation}</p>
        </div>
        <Image width={60} height={50} className="" src={image} alt={name} />
      </div>

      <p className="text-white">{content}</p>
    </div>
  );
};

export default SingleTestimonial;
