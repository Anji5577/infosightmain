import { useState, useEffect } from 'react';

export interface PerformanceSettings {
  dpr: number;
  antialias: boolean;
  isLowEnd: boolean;
  precision: 'lowp' | 'mediump' | 'highp';
}

export function useAdaptivePerformance(): PerformanceSettings {
  const [settings, setSettings] = useState<PerformanceSettings>({
    dpr: 1.5,
    antialias: true,
    isLowEnd: false,
    precision: 'highp',
  });

  useEffect(() => {
    const checkPerformance = () => {
      if (typeof window === 'undefined') return;

      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isLowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
      
      // @ts-ignore
      const isLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
      const isSmallScreen = window.innerWidth < 768;

      if (isMobile || isLowCores || isLowMemory || isSmallScreen) {
        setSettings({
          dpr: 1.0,
          antialias: false,
          isLowEnd: true,
          precision: 'mediump',
        });
      } else {
        setSettings({
          dpr: 1.5,
          antialias: true,
          isLowEnd: false,
          precision: 'highp',
        });
      }
    };

    checkPerformance();

    window.addEventListener('resize', checkPerformance, { passive: true });
    return () => window.removeEventListener('resize', checkPerformance);
  }, []);

  return settings;
}
