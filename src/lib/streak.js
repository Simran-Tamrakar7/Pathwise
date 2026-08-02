/** Daily check-in streak for Pathwise Today hub. */

import { readJson, writeJson } from './storage'

const KEY = 'pathwise-streak-v1'

function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10)
}

function yesterdayKey(date = new Date()) {
  const d = new Date(date)
  d.setDate(d.getDate() - 1)
  return d.toISOString().slice(0, 10)
}

function read() {
  return readJson(KEY, {})
}

function write(data) {
  writeJson(KEY, data)
}

/** @returns {{ count: number, lastDate: string | null, checkedToday: boolean }} */
export function getStreak() {
  const data = read()
  const today = todayKey()
  const last = data.lastDate || null
  const count = Number(data.count) || 0

  if (last === today) return { count, lastDate: last, checkedToday: true }
  if (last === yesterdayKey()) return { count, lastDate: last, checkedToday: false }
  return { count: 0, lastDate: last, checkedToday: false }
}

/** Mark today done. Continues streak if yesterday was checked. */
export function checkInToday() {
  const data = read()
  const today = todayKey()
  if (data.lastDate === today) return getStreak()
  const prev = Number(data.count) || 0
  const next = data.lastDate === yesterdayKey() ? prev + 1 : 1
  write({ count: next, lastDate: today })
  return getStreak()
}

export function sparkDoneCount() {
  return readJson('pathwise-sparks-done', []).length
}
