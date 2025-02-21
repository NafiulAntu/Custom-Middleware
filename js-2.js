prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
  alert(
    "Your love socre is " +
      loveScore +
      "%" +
      "  You love each other like Ayman love Farhan."
  );
}
if (loveScore > 30 && loveScore <= 70) {
  alert("Your love score is " + loveScore + "%");
}

if (loveScore > 30) {
  alert(
    "Your love score is " + loveScore + "%" + "You together like oil and water."
  );
} else {
  alert("Your love score is " + loveScore + "%");
}
