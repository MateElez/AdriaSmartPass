export const PROJECT_TYPES = ["APARTMENT", "AIRBNB", "HOTEL", "OFFICE", "OTHER"] as const;
export type ProjectTypeValue = (typeof PROJECT_TYPES)[number];

export const LEAD_STATUSES = ["NEW", "CONTACTED", "IN_PROGRESS", "WON", "LOST"] as const;
export type LeadStatusValue = (typeof LEAD_STATUSES)[number];
