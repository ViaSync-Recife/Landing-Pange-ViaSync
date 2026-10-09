export type GridCell = { column: number; row: number }

export function interpolateCells(from: GridCell, to: GridCell): GridCell[] {
  const columns = to.column - from.column
  const rows = to.row - from.row
  const steps = Math.max(Math.abs(columns), Math.abs(rows))

  if (steps === 0) return [from]

  return Array.from({ length: steps + 1 }, (_, index) => ({
    column: Math.round(from.column + (columns * index) / steps),
    row: Math.round(from.row + (rows * index) / steps),
  })).filter((cell, index, cells) => index === 0 || cell.column !== cells[index - 1].column || cell.row !== cells[index - 1].row)
}
