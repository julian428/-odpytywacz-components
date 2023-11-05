import { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  coverUrl?: string;
  title: string;
  description?: string;
  color?: string;
  href?: string;
}

export default function Card({
  coverUrl,
  title,
  description,
  color,
  href,
}: Props) {
  return (
    <a
      href={href}
      className="card sm:card-side hover:bg-base-200 transition-colors sm:max-w-none"
    >
      <figure className="mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pr-0">
        <img
          loading="lazy"
          className="border-base-content bg-base-300 rounded-btn border border-opacity-5"
          src={coverUrl}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 style={{ color }} className="card-title">
          {title}
        </h2>
        <p className="text-xs opacity-60">{description}</p>
      </div>
    </a>
  );
}
