import dayjs from 'dayjs';

const PATTERNS = {
  'M/D/YYYY': 'M/D/YYYY' as DateFormatPattern,
  'MM/DD/YYYY': 'MM/DD/YYYY' as DateFormatPattern,
  'YYYY-MM-DD': 'YYYY-MM-DD' as DateFormatPattern,
}

type DateFormatPattern = 'M/D/YYYY' | 'MM/DD/YYYY' | 'YYYY-MM-DD'

function formatDate(date: Date, pattern: DateFormatPattern): string {
  return dayjs(date).format(pattern)
}

const formattedDate = formatDate(new Date(), PATTERNS['YYYY-MM-DD'])
console.log("### formattedDate: ", formattedDate);

