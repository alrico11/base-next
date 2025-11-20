import { cn } from "@/lib/index";
import * as LabelPrimitive from "@radix-ui/react-label";
import { ClassValue } from "clsx";
import React, { ElementType, JSX } from "react";


type Variant =
  | "H1" | "H2" | "H3" | "H4" | "H5" | "H6"
  | "Body1" | "Body2" | "Body3" | "Body4" | "Body5"
  | "ButtonSmall" | "ButtonMedium16" | "ButtonMedium18" | "ButtonMedium20";

type Weight = "regular" | "medium" | "semibold" | "bold";

interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
  text?: string;
  variant?: Variant;
  weight?: Weight;
  children?: React.ReactNode;
  htmlFor?: string;
  mobile?: Variant;
}

export const Label = ({
  text,
  className,
  variant = "Body1",
  weight = "regular",
  children,
  htmlFor,
  mobile = "Body3",
  ...rest
}: LabelProps) => {
  const variantClasses: Record<Variant, ClassValue> = {
    H1: "text-[60px]",
    H2: "text-[48px]",
    H3: "text-[34px]",
    H4: "text-[24px]",
    H5: "text-[20px]",
    H6: "text-[18px]",
    Body1: "text-[16px]",
    Body2: "text-[14px]",
    Body3: "text-[12px]",
    Body4: "text-[10px]",
    Body5: "text-[8px]",
    ButtonSmall: "text-[16px]",
    ButtonMedium16: "text-[16px]",
    ButtonMedium18: "text-[18px]",
    ButtonMedium20: "text-[20px]",
  };

  const desktopVariant: Record<Variant, ClassValue> = {
    H1: "lg:text-[60px]",
    H2: "lg:text-[48px]",
    H3: "lg:text-[34px]",
    H4: "lg:text-[24px]",
    H5: "lg:text-[20px]",
    H6: "lg:text-[18px]",
    Body1: "lg:text-[16px]",
    Body2: "lg:text-[14px]",
    Body3: "lg:text-[12px]",
    Body4: "lg:text-[10px]",
    Body5: "text-[8px]",
    ButtonSmall: "lg:text-[16px]",
    ButtonMedium16: "lg:text-[16px]",
    ButtonMedium18: "lg:text-[18px]",
    ButtonMedium20: "lg:text-[20px]",
  };

  const weightClasses: Record<Weight, string> = {
    regular: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const TagMap: Partial<Record<Variant, keyof JSX.IntrinsicElements>> = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
    Body1: "p",
    Body2: "p",
    Body3: "p",
    Body4: "p",
    ButtonSmall: "button",
    ButtonMedium16: "button",
    ButtonMedium18: "button",
    ButtonMedium20: "button",
  };

  const Tag: ElementType = htmlFor ? "label" : (TagMap[variant] || "span") as any

  const getVariantClasses = () => {
    if (mobile) {
      return [
        variantClasses[mobile],
        desktopVariant[variant]
      ];
    }
    return variantClasses[variant];
  };

  return (
    <Tag
      {...(htmlFor ? { htmlFor } : {})}
      className={cn(
        "text-font",
        getVariantClasses(),
        weightClasses[weight],
        className
      )}
      {...rest}
    >
      {text}
      {children}
    </Tag>
  );
};

interface ErrorLabelProps extends LabelProps {
}

export const ErrorLabel = ({ children, className, ...rest }: ErrorLabelProps) => {
  return <Label variant="Body3" className={cn("text-[#DA2B3C]", className)} {...rest}>{children}</Label>
}