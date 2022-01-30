import database from '../firebase';
import { ref, set } from 'firebase/database';

type FeedbackFormData = {
  id: string;
  title: string;
  category: string;
  status: string;
  details: string;
};

function writeFeedbackData(feedback: FeedbackFormData) {
  const db = database;
  set(ref(db, 'feedback/' + feedback.id), feedback);
}

export { writeFeedbackData };
