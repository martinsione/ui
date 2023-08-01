"use client";

import Image from "next/image";
import { ArrowUp } from "@/ui/icons";
import { Badge, Button, Input, Select, SelectItem } from "@/ui";
import { useMDXComponent } from "next-contentlayer/hooks";

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <Component
      components={
        {
          ArrowUp,
          Badge,
          Button,
          Image,
          Input,
          Select,
          SelectItem,
        } as any
      }
    />
  );
}
