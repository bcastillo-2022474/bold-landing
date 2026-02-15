import { cn } from "@/utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      type={props.type || "button"}
      {...props}
      className={cn(
        "px-5 py-2 font-semibold rounded-full bg-black text-white",
        className,
      )}
    />
  );
}
