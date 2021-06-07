import dayjs from "dayjs"

const dateUtils = {
  getDate: (stringDate = '') => (stringDate !== '' ? dayjs(stringDate) : dayjs()),
  getReadableDate: (format = 'YYYY MMM DD') => dayjs().format(format),
  convertToReadableDate: (datetime) => dayjs(datetime).format('DD MMM YYYY'),
}

export default dateUtils
