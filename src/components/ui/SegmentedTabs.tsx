type TabItem<T extends string> = { id: T; label: string; badge?: string }

type SegmentedTabsProps<T extends string> = {
  ariaLabel: string
  items: readonly TabItem<T>[]
  value: T
  onChange: (value: T) => void
}

export function SegmentedTabs<T extends string>({ ariaLabel, items, value, onChange }: SegmentedTabsProps<T>) {
  function selectRelative(current: T, offset: number) {
    const currentIndex = items.findIndex((item) => item.id === current)
    const nextIndex = (currentIndex + offset + items.length) % items.length
    onChange(items[nextIndex].id)
  }

  return (
    <div aria-label={ariaLabel} className="segmented-tabs" role="tablist">
      {items.map((item) => (
        <button
          aria-selected={item.id === value}
          className={item.id === value ? 'is-active' : ''}
          key={item.id}
          onClick={() => onChange(item.id)}
          onKeyDown={(event) => {
            if (event.key === 'ArrowRight') selectRelative(item.id, 1)
            if (event.key === 'ArrowLeft') selectRelative(item.id, -1)
          }}
          role="tab"
          tabIndex={item.id === value ? 0 : -1}
          type="button"
        >
          {item.label}{item.badge ? <small>{item.badge}</small> : null}
        </button>
      ))}
    </div>
  )
}
