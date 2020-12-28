import dayjs from 'dayjs';

enum DateFormatPattern {
  MⳆDⳆYYYY = 'M/D/YYYY',
  MMⳆDDⳆYYYY = 'MM/DD/YYYY',
  YYYYⲻMMⲻDD = 'YYYY-MM-DD',
}

function formatDate(date: Date, pattern: DateFormatPattern): string {
  return dayjs(date).format(pattern)
}

const formattedDate = formatDate(new Date(), DateFormatPattern.YYYYⲻMMⲻDD)
console.log("### formattedDate: ", formattedDate);

