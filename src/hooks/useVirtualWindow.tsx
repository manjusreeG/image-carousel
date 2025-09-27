
export function useVirtualWindow<T>(items: T[], index: number) {
    const n = items.length;
    if (n === 0) return { windowItems: [] as T[], windowIndexMap: [] as number[] };

    const prev = (index - 1 + n) % n;
    const next = (index + 1) % n;

    const windowIndexMap = [prev, index, next];
    const windowItems = windowIndexMap.map(i => items[i]);

    return { windowIndexMap, windowItems };
}

