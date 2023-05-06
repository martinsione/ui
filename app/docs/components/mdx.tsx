"use client";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Avatar, Badge, Button, Input } from "@/ui";
import { ArrowUp } from "@/ui/icons";

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <Component
      components={{
        ArrowUp,
        Avatar,
        Badge,
        Button,
        Image,
        Input,
      }}
    />
  );
}
