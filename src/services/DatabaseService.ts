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
import { FeedbackType, CommentType } from '../types';

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

function writeFeedbackData(feedback: FeedbackType) {
  set(ref(database, 'feedbacks/' + feedback.id), feedback);
}

function writeCommentData(comment: CommentType) {
  set(ref(database, 'comments/' + comment.id), comment);
}

export {
  readAllFeedbackData,
  readFeedbackData,
  writeFeedbackData,
  writeCommentData,
};
