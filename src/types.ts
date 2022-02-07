export type Feedback = {
  id: string;
  title: string;
  details: string;
  category: string;
  status: string;
  votesCount?: number;
  commentsCount?: number;
};

export type SortBy = {
  title: string;
  index: number;
  key: string;
  order: string;
};

export type Comment = {
  id: string;
  feedbackId: string;
  author: string;
  avatar: string;
  email: string;
  content: string;
};
