"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type ContactCopyButtonProps = {
  email: string;
};

export function ContactCopyButton({ email }: ContactCopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const resetTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }

      resetTimerRef.current = window.setTimeout(() => {
        setCopied(false);
        resetTimerRef.current = null;
      }, 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  const Icon = copied ? CheckIcon : CopyIcon;

  return (
    <Button aria-live="polite" onClick={copyEmail} type="button" variant="ghost">
      <Icon data-icon="inline-start" />
      {copied ? "E-mail copiado" : "Copiar e-mail"}
    </Button>
  );
}
