export type ShareItem = {
  id: string;
  moduleId: string;
  moduleTitle: string;
  createdAt: number;
  expiresAt: number;
};

const store = new Map<string, ShareItem>();

export function setShare(item: ShareItem) {
  store.set(item.id, item);
}

export function getShare(id: string): ShareItem | undefined {
  const item = store.get(id);
  if (!item) return undefined;
  if (Date.now() > item.expiresAt) {
    store.delete(id);
    return undefined;
  }
  return item;
}
