export interface Thumbnails {
  default: { url: string };
  medium: { url: string };
  high: { url: string };
}

export interface Snippet {
  title: string;
  description: string;
  channelId: string;
  channelTitle: string;
  publishTime: string;
  thumbnails: Thumbnails;
}

export interface Id {
  kind: string;
  videoId: string;
}

export interface Item {
  kind: string;
  id: Id;
  snippet: Snippet;
}

export interface ApiResponse {
  items: Item[] | null;
}
