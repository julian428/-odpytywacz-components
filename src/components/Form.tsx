import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function Form({ children }: Props) {
  return <form className="card neutral max-w-md">{children}</form>;
}
