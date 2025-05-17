import Image from "next/image";
import classes from "./product.module.css";
export default function Product({
  title,
  image,
  description,
  className,
  width,
  height,
}) {
  return (
    <div className={classes.product}>
      <div className={classes.image}>
        <Image
          loading="lazy"
          src={image}
          width={width}
          height={height}
          className={className}
          alt="coffee"
        />
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
