import moment from "moment"

export function useDateCounter(date: string) {
  if (!date) return;
  return date ? moment(date).endOf('day').fromNow() : "-";
}
