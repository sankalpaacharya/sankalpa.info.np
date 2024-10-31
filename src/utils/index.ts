export const formatDate = (date: Date): [number, string, number] => {
    const months: string[] = [
       "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
       "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const year = date.getFullYear();
    const day = date.getDate();
    const month = months[date.getMonth()];
    return [year, month, day];
   }