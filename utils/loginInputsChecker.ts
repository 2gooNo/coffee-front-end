export default function logInInputChecker(inputVals: {
  eMail: string | null;
  passWord: string | null;
}) {
  if (!inputVals.eMail || !inputVals.passWord) {
    console.log("check youre inputs");
    return 1;
  } else {
    return 2;
  }
}
