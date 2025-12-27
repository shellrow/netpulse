export type UnitPref = "bits" | "bytes";

export const BPS_UNIT_KEY = "np:set:bps_unit";

export function normalizeBpsUnit(
  value: unknown,
  fallback: UnitPref = "bits",
): UnitPref {
  if (value === "bytes" || value === "bits") return value;
  return fallback;
}

export function readBpsUnit(
  storage: Storage,
  fallback: UnitPref = "bits",
): UnitPref {
  return normalizeBpsUnit(storage.getItem(BPS_UNIT_KEY), fallback);
}
