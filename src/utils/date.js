import { format } from 'date-fns'

export function formatString (dateAsString) {
  if (!dateAsString) return ''

  return formatDate(new Date(dateAsString))
}

export function formatDate (dateAsObject) {
  return format(dateAsObject, 'LLL dd, u')
}