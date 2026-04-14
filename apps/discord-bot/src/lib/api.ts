/**
 * HTTP client for apps/api.
 *
 * Phase 1: placeholder. Will be used to submit interest
 * form data and fetch tournament info in future phases.
 */

const API_URL = "http://localhost:8000"

export async function apiHealth(): Promise<unknown> {
  const res = await fetch(`${API_URL}/health`)
  if (!res.ok) throw new Error(`API health failed: ${res.statusText}`)
  return res.json()
}
