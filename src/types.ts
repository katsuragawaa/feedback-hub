export type Feedback = {
  id: string;
  title: string;
  details: string;
  category: string;
  status: string;
  votes: number;
  comments: string[]; // TODO
};

export type FeedbackFormData = {
  id: string;
  title: string;
  category: string;
  status: string;
  details: string;
  votes?: number;
  comments?: string[]; // TODO: setup comments type
};
