"use client";

import clsx from "clsx";
import { InputHTMLAttributes } from "react";
import { useController, useFormContext } from "react-hook-form";

interface TextAreaProps {
  name: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
}

export default function TextArea({ name, inputMode, type }: TextAreaProps) {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const errorMsg = error ? error.message : null;

  return (
    <textarea
      rows={10}
      className={clsx(
        "w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border-b border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
      )}
      {...field}
    />
  );
}
