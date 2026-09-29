export interface Link {
  id: number;
  code: string;
  url: string;
  createdAt: string;
  lastClickedAt: string | null;
  userId: number;
  _count: { clicks: number };
}
