"use client";
import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  Error,
  Input,
  Select,
  Textarea,
} from "@/ui";
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
        Checkbox,
        Error,
        Image,
        Input,
        Select,
        Textarea,
      }}
    />
  );
}
