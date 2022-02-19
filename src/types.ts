export type FeedbackType = {
  id: string;
  title: string;
  details: string;
  category: string;
  status: string;
  votesCount?: number;
  commentsCount?: number;
};

export type SortByType = {
  title: string;
  index: number;
  key: string;
  order: string;
};

export type CommentType = {
  id: string;
  feedbackId: string;
  userId: string;
  author: string;
  avatar: string;
  email: string;
  content: string;
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  avatar: string;
}
