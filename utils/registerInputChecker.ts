export default function registerInputChecker(inputVals: {
  fullName: string;
  eMail: string | null;
  passWord: string | null;
  confirmPassword: string | null;
}) {
  if (
    !inputVals.fullName ||
    !inputVals.eMail ||
    !inputVals.passWord ||
    !(inputVals.passWord == inputVals.confirmPassword)
  ) {
    console.log("check youre inputs");
    return 1;
  } else {
    return 2;
  }
}
