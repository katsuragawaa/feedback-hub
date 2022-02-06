import database from '../firebase';
import { ref, set, get, child, onValue } from 'firebase/database';
import { FeedbackFormData } from '../types';

const dbRef = ref(database);

async function readAllFeedbackData() {
  const snapshot = await get(child(dbRef, 'feedbacks/'));

  return snapshot.exists() ? snapshot.val() : {};
}

async function readFeedbackData(id: string) {
  const snapshot = await get(child(dbRef, `feedbacks/${id}`));

  return snapshot.exists() ? snapshot.val() : {};
}

function writeFeedbackData(feedback: FeedbackFormData) {
  set(ref(database, 'feedbacks/' + feedback.id), feedback);
}

export { readAllFeedbackData, readFeedbackData, writeFeedbackData };
