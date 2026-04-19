type RateLimitOptions = {
  limit: number;
  windowMs: number;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  retryAfter: number;
};

const stores = new Map<string, RateLimitEntry>();

const defaultOptions: RateLimitOptions = {
  limit: 5,
  windowMs: 60_000
};

export function checkRateLimit(identifier: string, options = defaultOptions): RateLimitResult {
  const now = Date.now();
  const current = stores.get(identifier);

  if (!current || current.resetAt <= now) {
    stores.set(identifier, { count: 1, resetAt: now + options.windowMs });
    return {
      allowed: true,
      remaining: options.limit - 1,
      retryAfter: 0
    };
  }

  if (current.count >= options.limit) {
    return {
      allowed: false,
      remaining: 0,
      retryAfter: Math.ceil((current.resetAt - now) / 1000)
    };
  }

  current.count += 1;
  stores.set(identifier, current);

  return {
    allowed: true,
    remaining: Math.max(0, options.limit - current.count),
    retryAfter: 0
  };
}
