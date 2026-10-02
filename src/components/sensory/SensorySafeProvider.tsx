"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "sensory-safe-mode";

type SensorySafeContextValue = {
  enabled: boolean;
  toggle: () => void;
  setEnabled: (value: boolean) => void;
};

const SensorySafeContext = createContext<SensorySafeContextValue | null>(null);

export function SensorySafeProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabledState] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "1") setEnabledState(true);
    } catch {
      /* privacy-conscious: ignore storage failures */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.body.classList.toggle("sensory-safe", enabled);
    try {
      window.localStorage.setItem(STORAGE_KEY, enabled ? "1" : "0");
    } catch {
      /* ignore */
    }
  }, [enabled, ready]);

  const setEnabled = useCallback((value: boolean) => {
    setEnabledState(value);
  }, []);

  const toggle = useCallback(() => {
    setEnabledState((prev) => !prev);
  }, []);

  return (
    <SensorySafeContext.Provider value={{ enabled, toggle, setEnabled }}>
      {children}
    </SensorySafeContext.Provider>
  );
}

export function useSensorySafe() {
  const ctx = useContext(SensorySafeContext);
  if (!ctx) {
    throw new Error("useSensorySafe must be used within SensorySafeProvider");
  }
  return ctx;
}
