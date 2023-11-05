interface Props {
  coverUrl?: string;
  title: string;
  description?: string;
  color?: string;
}

export default function Card({ coverUrl, title, description, color }: Props) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="card w-96 h-44 bg-base-100 shadow-xl image-full overflow-hidden duration-700 hover:scale-[99%] group transition-all"
    >
      {coverUrl && (
        <figure>
          <img className="w-full" src={coverUrl} alt="something went wrong" />
        </figure>
      )}
      <div
        style={{ backgroundColor: color }}
        className="w-full h-full group-hover:opacity-0 opacity-50 transition-all duration-700"
      ></div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
