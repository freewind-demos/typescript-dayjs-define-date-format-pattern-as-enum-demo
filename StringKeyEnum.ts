import dayjs from 'dayjs';

enum StringKeyEnum {
  'M/D/YYYY' = 'M/D/YYYY',
  'MM/DD/YYYY' = 'MM/DD/YYYY',
  'YYYY-MM-DD' = 'YYYY-MM-DD',
}

function formatDate(date: Date, pattern: StringKeyEnum): string {
  return dayjs(date).format(pattern)
}

const formattedDate = formatDate(new Date(), StringKeyEnum['YYYY-MM-DD'])
console.log("### formattedDate: ", formattedDate);

