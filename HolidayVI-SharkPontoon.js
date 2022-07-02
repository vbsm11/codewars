function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if (dolphin == true) sharkSpeed = sharkSpeed * 0.5;

    if (pontoonDistance/youSpeed < sharkDistance/sharkSpeed) return 'Alive!';
    else return 'Shark Bait!';
}