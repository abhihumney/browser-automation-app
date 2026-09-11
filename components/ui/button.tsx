import * as React from "react"

import { cn } from "@/lib/utils"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ className, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus-visible:ring-neutral-300",
        className,
      )}
      {...props}
    />
  )
}
