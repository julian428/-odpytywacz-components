import { HTMLProps, InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const input = cva("input", {
  variants: {
    variant: {
      bordered: "input-bordered",
      ghost: "input-ghost",
    },
    colorVariant: {
      primary: "input-primary",
      secondary: "input-secondary",
      neutral: "input-neutral",
      accent: "input-accent",
    },
    sizeVariant: {
      xs: "input-xs",
      sm: "input-sm",
      md: "input-md",
      lg: "input-lg",
    },
  },
  compoundVariants: [
    { variant: "bordered", colorVariant: "neutral", sizeVariant: "md" },
  ],
  defaultVariants: {
    variant: "bordered",
    colorVariant: "neutral",
    sizeVariant: "md",
  },
});

interface Props
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {
  label?: string;
  labelClassName?: HTMLProps<HTMLElement>["className"];
  wrapperClassName?: HTMLProps<HTMLElement>["className"];
}

export default function Input({
  label,
  variant,
  sizeVariant,
  colorVariant,
  className,
  labelClassName,
  wrapperClassName,
  ...props
}: Props) {
  return (
    <div className={cn("form-control w-full", wrapperClassName)}>
      {label && (
        <label htmlFor={props.id} className={cn("label", labelClassName)}>
          {label}
        </label>
      )}
      <input
        className={cn(input({ variant, sizeVariant, colorVariant }), className)}
        {...props}
      />
    </div>
  );
}
