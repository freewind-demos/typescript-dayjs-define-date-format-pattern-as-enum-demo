import dayjs from 'dayjs';

enum UnicodeKeyEnum {
  MⳆDⳆYYYY = 'M/D/YYYY',
  MMⳆDDⳆYYYY = 'MM/DD/YYYY',
  YYYYⲻMMⲻDD = 'YYYY-MM-DD',
}

function formatDate(date: Date, pattern: UnicodeKeyEnum): string {
  return dayjs(date).format(pattern)
}

const formattedDate = formatDate(new Date(), UnicodeKeyEnum.YYYYⲻMMⲻDD)
console.log("### formattedDate: ", formattedDate);

