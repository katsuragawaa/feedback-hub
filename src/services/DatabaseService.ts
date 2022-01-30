import database from '../firebase';
import { ref, set, get, child } from 'firebase/database';

type FeedbackFormData = {
  id: string;
  title: string;
  category: string;
  status: string;
  details: string;
};

async function readAllFeedbackData(): Promise<FeedbackFormData[]> {
  const dbRef = ref(database);
  const feedbacks: FeedbackFormData[] = [];
  const snapshot = await get(child(dbRef, 'feedbacks/'));

  if (snapshot.exists()) {
    feedbacks.push(snapshot.val());
  } else {
    console.log('No data available');
  }
  
  return feedbacks;
}

function readFeedbackData(id: string) {
  const dbRef = ref(database);
  get(child(dbRef, `feedbacks/${id}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function writeFeedbackData(feedback: FeedbackFormData) {
  set(ref(database, 'feedbacks/' + feedback.id), feedback);
}

export { readAllFeedbackData, readFeedbackData, writeFeedbackData };
