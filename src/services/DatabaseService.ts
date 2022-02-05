import database from '../firebase';
import { ref, set, get, child, onValue } from 'firebase/database';

type FeedbackFormData = {
  id: string;
  title: string;
  category: string;
  status: string;
  details: string;
  votes: number;
  comments: string[]; // TODO: setup comments type
};

const dbRef = ref(database);

async function readAllFeedbackData() {
  const snapshot = await get(child(dbRef, 'feedbacks/'));

  return snapshot.exists() ? snapshot.val() : {};
}

function readFeedbackData(id: string) {
  get(child(dbRef, `feedbacks/${id}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
}

function writeFeedbackData(feedback: FeedbackFormData) {
  set(ref(database, 'feedbacks/' + feedback.id), feedback);
}

export { readAllFeedbackData, readFeedbackData, writeFeedbackData };
