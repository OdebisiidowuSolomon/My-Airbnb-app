"use client";

import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Counter({
  title,
  subtitle,
  value,
  onChange,
}: {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}) {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) return;

    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">{subtitle}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          className="w-10
        h-10
        rounded-full
        border-[1px]
        border-neutral-400
        flex
        items-center
        justify-center
        text-neutral-600
        cursor-pointer
        hover:opacity-80
        transition
        "
          onClick={onReduce}
        >
          <AiOutlineMinus />
        </div>
        <div className="font-light text-xl text-neutral-600">{value}</div>
        <div
          className="w-10
        h-10
        rounded-full
        border-[1px]
        border-neutral-400
        flex
        items-center
        justify-center
        text-neutral-600
        cursor-pointer
        hover:opacity-80
        transition
        "
          onClick={onAdd}
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
}
