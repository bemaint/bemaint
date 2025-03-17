"use client";

import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function ThemeProviderWrapper({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
