import database from '../firebase';
import {
  ref,
  set,
  get,
  child,
  equalTo,
  query,
  orderByChild,
} from 'firebase/database';
import { Feedback } from '../types';

const dbRef = ref(database);

async function readAllFeedbackData() {
  // use this for comment
  // const testRef = query(
  //   ref(database, 'feedbacks'),
  //   orderByChild('title'),
  //   equalTo('A live feedback')
  // );
  // const testSnap = await get(testRef);
  // console.log(testSnap.val());

  const snapshot = await get(child(dbRef, 'feedbacks/'));
  return snapshot.exists() ? snapshot.val() : {};
}

async function readFeedbackData(id: string) {
  const snapshot = await get(child(dbRef, `feedbacks/${id}`));
  return snapshot.exists() ? snapshot.val() : {};
}

function writeFeedbackData(feedback: Feedback) {
  set(ref(database, 'feedbacks/' + feedback.id), feedback);
}

export { readAllFeedbackData, readFeedbackData, writeFeedbackData };
