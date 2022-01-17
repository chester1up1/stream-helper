import { AuthContextData } from 'contexts/auth';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const authenticationObserver = (
  setState: React.Dispatch<React.SetStateAction<AuthContextData>>
) => {
  const auth = getAuth();
  return new Promise<User>((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('user is authorized', user);
        setState({
          isAuthorized: true,
          email: user.email,
        });
        resolve(user);
      } else {
        console.log('user is not authorized');
        setState({ isAuthorized: false, email: null });
        reject();
      }
    });
  });
};

export const signUp = (email: string, password: string) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email: string, password: string) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};
