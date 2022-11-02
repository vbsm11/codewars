function getGrade (s1, s2, s3) {
    let ave = (s1 + s2 + s3)/3;
    if (ave >= 90 && ave <= 100) return 'A';
    if (ave >= 80 && ave < 90) return 'B';
    if (ave >= 70 && ave < 80) return 'C';
    if (ave >= 60 && ave < 70) return 'D';
    if (ave >= 0 && ave < 60) return 'F';
}