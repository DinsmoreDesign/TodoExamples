export default (inputDate) => {

    const inputTime = new Date(inputDate);
    const now = new Date();
    const msDiff = now - inputTime;
    const difference = Math.round(msDiff / (1000 * 60 * 60 * 24));

    return difference.toString();

};