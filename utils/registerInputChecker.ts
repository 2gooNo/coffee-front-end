export default function inputChecker(inputVals: {
  fullName: string;
  eMail: string | null;
  passWord: string | null;
  confirmPassword: string | null;
}) {
  //   switch (inputVals.toString()) {
  //     case { ...inputVals, fullName: "" }.toString():
  //       console.log("fullName null");
  //       return "1";
  //     case { ...inputVals, eMail: "" }.toString():
  //       console.log("eMail null");
  //       return "2";
  //     case { ...inputVals, passWord: "" }.toString():
  //       console.log("passWord null");
  //       return "3";
  //     case { ...inputVals, fullName: inputVals.confirmPassword }.toString():
  //       console.log("not matched null");
  //       return "4";
  //   }
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
